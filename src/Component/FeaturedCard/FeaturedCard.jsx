import React, { useEffect, useRef, useState } from 'react';
import Profile from '../../assets/images/OnlyFans_Logo_Icon_Blue.png';
import Play from '../../assets/Icons_Images/play.png';

const fallbackThumbnail = "https://via.placeholder.com/856x480.png?text=No+Thumbnail";
const fallbackVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

function FeaturedCard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/owner/me", {
          method: "GET",
          headers: { 'Content-Type': "application/json" }
        });
        const data = await response.json();
        console.log(data.data);
        setPosts(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (playingIndex !== null) {
      videoRefs.current.forEach((video, i) => {
        if (video && i !== playingIndex) video.pause();
      });

      const currentVideo = videoRefs.current[playingIndex];
      if (currentVideo) {
        currentVideo.play().catch(err => {
          console.error("Autoplay failed:", err);
        });
      }
    }
  }, [playingIndex]);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading featured posts...</div>;
  }

  if (!posts.length) {
    return <div className="text-center py-10 text-red-500">No posts found</div>;
  }

  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className="max-w-[856px] w-full h-auto mb-12 rounded-md overflow-hidden shadow-md shadow-black/30 bg-white"
        >
          {/* Header */}
          <div className="flex justify-between items-start px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src={post?.user?.profilePhoto || Profile}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="leading-tight">
                <h1 className="font-semibold text-base">{post?.user?.username || 'Onlyfans'}</h1>
                <p className="text-sm text-gray-600">@{post?.user?.username || 'onlyfans'}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 pt-2 pr-1">3 hours ago</div>
          </div>

          {/* Caption */}
          <div className="px-4 pb-3 text-sm text-gray-800 leading-relaxed">
            {post?.captions || 'No caption'}
            <span className="block mt-1 text-blue-500 hover:underline cursor-pointer">
              onlyfans.com/{post?.user?.username || 'user'} / onlyfans.com/oftv
            </span>
          </div>

          {/* Video Section */}
          <div className="relative w-full aspect-video bg-black">
            {post?.media ? (
              playingIndex !== index ? (
                <>
                  <img
                    src={post?.thumbnail || fallbackThumbnail}
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover z-10 cursor-pointer"
                    onClick={() => setPlayingIndex(index)}
                  />
                  <img
                    src={Play}
                    alt="Play"
                    title="Play Video"
                    className="absolute z-20 w-[60px] h-[60px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-600 rounded-full p-2 cursor-pointer transition duration-200 ease-in-out"
                    onClick={() => setPlayingIndex(index)}
                  />
                </>
              ) : (
                <video
                  ref={el => (videoRefs.current[index] = el)}
                  src={post?.media || fallbackVideo}
                  controls
                  className="absolute inset-0 w-full h-full z-0"
                  onEnded={() => setPlayingIndex(null)}
                />
              )
            ) : (
              <img
                src={post?.thumbnail || fallbackThumbnail}
                alt="Static Image"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default FeaturedCard;
