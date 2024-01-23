const firebaseConfig = require('./firebaseConfig.js');
const firestore = firebaseConfig.firestore;
const storage = firebaseConfig.storage;

const ffmpeg = require('fluent-ffmpeg');
const functions = require('firebase-functions');
const request = require('request');

const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpegPath = ffmpegInstaller.path;

ffmpeg.setFfmpegPath(ffmpegPath);

exports.setupVideosFunction = functions.runWith({ memory: '2GB', timeoutSeconds: 540 }).pubsub.schedule('0 0 * * *').timeZone('America/Los_Angeles').onRun(async (context) => {
  async function setupVideos() {
    try {
      await deleteAllDocumentsFromFirestore();
      await deleteAllFilesFromStorage();
      const feedRefs = firestore.collection('feed');
      const feedData = await feedRefs.orderBy('createdAt', 'desc').limit(15).get();

      if (feedData.docs) {
        // Process videos sequentially
        for (let doc of feedData.docs) {
          try {
            await transloadVideo(doc.id, doc.data());
            const url = await getVideoUrl(`${doc.id}.webm`);
            const videoRef = firestore.collection('ConvertedVideos').doc();
            const videoData = {
              thumbnailUrl: doc.data().thumbnailUrl,
              createdAt: doc.data().createdAt,
              music: doc.data().music,
              tiktokUser: doc.data().tiktokUser,
              likes: doc.data().likes ? doc.data().likes.length : 0,
              videoUrl: url
            };
            await videoRef.set(videoData);
          } catch (error) {
            console.error('Error in processing video:', error);
          }
        }
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const getVideoUrl = async (fileName) => {
    try {
      const file = storage.file(`converted-videos/${fileName}`);
      const [signedUrl] = await file.getSignedUrl({
        action: 'read',
        expires: '03-17-2025' // Set an appropriate expiry date
      });
      return signedUrl;
    } catch (error) {
      console.error('Error generating signed URL:', error);
      throw error;
    }
  };

  const transloadVideo = (id, doc) => {
    return new Promise((resolve, reject) => {
      const storagePath = `converted-videos/${id}.webm`;
      const file = storage.file(storagePath);
      const writeStream = file.createWriteStream({
        metadata: {
          contentType: 'video/webm',
        },
      });
      ffmpeg().input(request(doc.videoUrl)).audioCodec('libvorbis').videoCodec('libvpx').toFormat('webm').outputOptions([
        '-threads 1',
        '-r 30',
        '-vf scale=640:-1',
        '-t 10',
        '-b:v 500k',
      ]).on('error', (err) => {
        console.error('Error converting video:', err);
        reject(err);
      }).pipe(writeStream, { end: true });
      writeStream.on('finish', () => {
        console.log('Finished')
        resolve();
      });
      writeStream.on('error', (err) => {
        console.error('Error writing to storage:', err);
        reject(err);
      });
    });
  }

  const deleteAllDocumentsFromFirestore = async () => {
    const collectionRef = firestore.collection('ConvertedVideos');
    const querySnapshot = await collectionRef.get();
    if (querySnapshot.empty) {
      console.log('No docs are found in the collection!');
      return;
    }
    const batch = firestore.batch();
    const deletePromises = querySnapshot.docs.map(doc => {
      batch.delete(doc.ref);
    });
    await Promise.all(deletePromises);
    await batch.commit();
  };

  const deleteAllFilesFromStorage = async () => {
    try {
      const [files] = await storage.getFiles({ prefix: 'converted-videos/' }); // The trailing slash ensures it's treated as a folder
      if (!files.length) {
        console.log('Files are not found!');
        return;
      }
      const deletePromises = files.map(file => file.delete());
      await Promise.all(deletePromises);
    } catch (error) {
      console.error('Error deleting files:', error);
      throw error;
    }
  };
  try {
    await setupVideos()
    return null;  // Successful execution ends with a return of null
  } catch (err) {
    console.error(err);
    throw new functions.https.HttpsError('internal', 'Internal error occurred.');
  }
});