import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';
import LikeButton from '../likezButton/like';
import { api } from '../../api/api';
import { IoBookmarkOutline, IoChatbubbleOutline } from 'react-icons/io5';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';

function HomeImagePost() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['imagePosts'],
    queryFn: async () => {
      const response = await fetch(`${api}/api/Post/all`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      return Array.isArray(result.data)
        ? result.data.filter(post =>
            (Array.isArray(post.images) && post.images.length > 0 && post.images[0]) ||
            (typeof post.images === 'string' && post.images)
          )
        : [];
    },
  });

  if (isLoading) {
    return (
      <div className="w-full max-w-[856px] mx-auto px-4 py-5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="mb-6 border border-gray-300 bg-white p-4 rounded">
            <Skeleton height={50} width={50} circle />
            <Skeleton height={20} width={`60%`} className="mt-2" />
            <Skeleton height={300} className="mt-4" />
            <Skeleton height={100} className="mt-4" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 text-center mt-6">❌ Error fetching image posts.</div>;
  }

  return (
    <>
      {data.map((post, index) => {
        const imageUrl = Array.isArray(post.images) ? post.images[0] : post.images;

        return (
          <div key={index} className="w-full md:max-w-[856px] mx-auto mb-6 border border-gray-300 bg-white">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src={post.user?.profilePhoto || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-12 h-12 object-cover object-top rounded-full"
                />
                <div className="leading-4">
                  <h1 className="font-bold text-sm">{post.user?.username || 'OnlyFans ✅'}</h1>
                  <p className="text-gray-600 text-sm">@{post.user?.username || 'onlyfans'}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
            </div>

            {/* Caption */}
            <div className="px-4 pb-3 text-[15px] text-gray-800 leading-5">
              {post.captions || 'No caption available.'}
            </div>

            {/* Main Image */}
            <div className="relative w-full h-auto">
              <img
                src={imageUrl || 'https://via.placeholder.com/500'}
                alt="Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Card Preview */}
            <div className="relative px-4 pt-4">
              <div className="relative w-full rounded-md overflow-hidden">
                <img
                  src={post.user?.coverPhoto || 'https://via.placeholder.com/500'}
                  alt="Card Cover"
                  className="w-full h-32 object-cover rounded-md"
                />
                <img src={Menu} alt="Menu" className="absolute top-2 right-2 w-6 h-6 z-20" />
                <div className="absolute inset-0 bg-black/30 flex items-center rounded-md">
                  <div className="flex items-center gap-4 px-6">
                    <img
                      src={post.user?.profilePhoto || 'https://via.placeholder.com/150'}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border-2 border-white"
                    />
                    <div className="text-white">
                      <h1 className="text-lg font-bold">{post.user?.name || 'OnlyFans'}</h1>
                      <p>@{post.user?.username || 'onlyfans'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between px-4 py-3 mt-2">
              <div className="flex gap-6 items-center">
                <LikeButton
                  postId={post._id}
                  initialLiked={false}
                  initialCount={post.likes || 0}
                />
                <IoChatbubbleOutline className="w-6 h-6 cursor-pointer" title="Comment" />
                <HiOutlineCurrencyDollar className="w-6 h-6 cursor-pointer" title="Send Tip" />
              </div>
              <IoBookmarkOutline className="w-6 h-6 cursor-pointer" title="Bookmark" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomeImagePost;
