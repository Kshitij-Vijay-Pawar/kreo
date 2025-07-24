// src/components/YoutubeFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MAX_RESULTS = 6;

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;


const YoutubeFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              key: API_KEY,
              channelId: CHANNEL_ID,
              part: 'snippet',
              maxResults: 6,
              order: 'date'
            }
          }
        );
        
        setVideos(res.data.items);
      } catch (err) {
        console.error("Error fetching YouTube videos", err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <div key={video.id.videoId} className="rounded overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            
            title={video.snippet.title}
            allowFullScreen
          ></iframe>
          <div className="p-2">
            <h3 className="font-bold text-lg">{video.snippet.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YoutubeFeed;
