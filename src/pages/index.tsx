import React from 'react';
import LatestVideos from "../components/LatestVideos";
import Introduction from "../components/Introduction";
import Head from 'next/head'

interface Videos {
  videos: any[];
}

const Home: React.FC<Videos> = ({ videos }) => {
  return (
    <div>
      <Head>
        <title>AnybodyMovz</title>
      </Head>
      <Introduction></Introduction>
      <LatestVideos videos={videos}></LatestVideos>
    </div>
  )
}

export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600');
  let videos = [];
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/getVideos`);  // Ensure the URL matches your setup.
    videos = await response.json();
  } catch (error) {
    console.error("There was an error fetching the data:", error);
  }

  return { props: { videos } }
}

export default Home

