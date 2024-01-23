import { firestore } from "../../../firebaseConfig.js";

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }
  let data = []
  const videoRefs = firestore.collection('ConvertedVideos')
  const videoData = await videoRefs.orderBy('createdAt', 'desc').get()
  if (videoData.docs) {
    data = videoData.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })
  }
  res.status(200).json(data);
};
