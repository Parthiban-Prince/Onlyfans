import React, { useEffect, useRef, useState } from 'react';
import Play from '../../assets/Icons_Images/play.png';
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';
import LikeButton from '../likezButton/like'; // ✅ Import LikeButton component

function HomeCenterPost() {
  const [posts, setPosts] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/Post/all", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        if (Array.isArray(data.data)) {
          setPosts(data.data);
        }
      } catch (err) {
        console.error("❌ Fetch error:", err);
      }
    };
    fetchPost();
  }, []);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  return (
    <>
      {posts.map((post, index) => {
        if (!post?.media || !post?.thumbnail) return null;

        return (
          <div key={post._id} className="w-full md:max-w-[856px] mb-10 rounded-md overflow-hidden border border-gray-200 shadow-sm">
            
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src={post.user?.profilePhoto || 'https://via.placeholder.com/100'}
                  alt="User"
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div>
                  <h1 className="font-bold text-sm">{post.user?.name || "User"}</h1>
                  <p className="text-gray-600 text-sm">@{post.user?.username || "username"}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
            </div>

            {/* Caption */}
            <div className="px-4 pb-3 text-[15px] text-gray-800 leading-5">
              {post.captions || "No caption"}
              {post.link && (
                <a href={post.link} className="text-blue-500 block" target="_blank" rel="noreferrer">
                  {post.link}
                </a>
              )}
            </div>

            {/* Video / Thumbnail */}
            <div className="relative w-full h-[481px]">
              {playingIndex !== index && (
                <>
                  <img
                    src={post.thumbnail}
                    alt="Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer z-10"
                    onClick={() => handlePlay(index)}
                  />
                  <img
                    src={Play}
                    className="absolute z-10 w-[60px] h-[60px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-500 rounded-full cursor-pointer"
                    alt="Play"
                    onClick={() => handlePlay(index)}
                  />
                </>
              )}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={post.media}
                controls
                className="absolute inset-0 w-full h-full"
                onPlay={() => setPlayingIndex(index)}
              />
            </div>

            {/* Profile Banner */}
            <div className="flex px-4 pt-4">
              <div className="relative w-full">
                <img
                  src={post.user?.coverPhoto || "https://via.placeholder.com/600x150"}
                  alt="Banner"
                  className="w-full h-[128px] rounded-md object-cover"
                />
                <img src={Menu} alt="Menu" className="absolute top-2 right-2 w-[24px] h-[24px]" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] rounded-md flex items-center pl-10 gap-4">
                  <img
                    src={post.user?.profilePhoto || 'https://via.placeholder.com/100'}
                    className="w-[96px] h-[96px] rounded-full object-cover border-2 border-white"
                    alt="User"
                  />
                  <div className="text-white">
                    <h1 className="text-lg font-bold">{post.user?.name}</h1>
                    <p>@{post.user?.username}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between px-4 py-3 mt-2">
              <div className="flex gap-6">
                {/* ✅ Like Button Component */}
                <LikeButton
                  postId={post._id}
                  initialLiked={false} // If you track user likes, update this
                  initialCount={post.likes || 0}
                />

                <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="Comment" className="w-6 h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="Tip" className="w-6 h-6" />
              </div>
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" alt="Bookmark" className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomeCenterPost;
