import React, { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { api } from '../../api/api';

import { IoBookmarkOutline, IoChatbubbleOutline, IoPlayOutline } from 'react-icons/io5';
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';
import LikeButton from '../likezButton/like';

function HomeCenterPost() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  // React Query to fetch posts
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch(`${api}/api/Post/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      return result.data;
    },
  });

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

  if (isLoading) {
    return (
      <div className="w-full max-w-[856px] mx-auto px-4 py-5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="mb-6 border border-gray-300 bg-white p-4 rounded">
            <Skeleton height={50} width={50} circle />
            <Skeleton height={20} width={`60%`} className="mt-2" />
            <Skeleton height={481} className="mt-4" />
            <Skeleton height={100} className="mt-4" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-red-500 mt-10">Failed to load posts.</div>;
  }

  return (
    <>
      {data?.map((post, index) => {
        if (!post?.media || !post?.thumbnail) return null;

        return (
          <div
            key={post._id}
            className="w-full md:max-w-[856px] mx-auto overflow-hidden shadow-sm border border-gray-300 bg-white mb-6"
          >
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
                  <IoPlayOutline
                    className="absolute z-10 w-[60px] h-[60px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-500 cursor-pointer text-white rounded-md"
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
              <div className="flex gap-5 items-center">
                <LikeButton
                  postId={post._id}
                  initialLiked={false}
                  initialCount={post.likes || 0}
                />
                <IoChatbubbleOutline className="w-6 h-6" />
                <div className='flex items-center gap-2'>
                  <HiOutlineCurrencyDollar className="w-6 h-6" /><span>Send Tips</span>
                </div>
              </div>
              <IoBookmarkOutline className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomeCenterPost;
