import React, { useState, useEffect } from 'react';
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';
import LikeButton from '../likezButton/like';
import {api} from '../../api/api'
import { IoBookmarkOutline, IoChatbubble, IoChatbubbleOutline } from 'react-icons/io5';
import { HiCurrencyDollar, HiOutlineCurrencyDollar } from 'react-icons/hi2';

function HomeImagePost() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${api}/api/Post/all`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        });

        const data = await response.json();
        console.log("Fetched Data:");


            const filteredData = Array.isArray(data.data)
        ? data.data.filter(post => {
            // Ensure images is either a non-empty array or a valid string
            if (Array.isArray(post.images)) {
              return post.images.length > 0 && post.images[0];
            }
            return post.images; // If not an array, it must be a non-null string
          })
        : [];

        setUser(filteredData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      {user && user.map((userItem, index) => {
        const imageUrl = Array.isArray(userItem.images)
          ? userItem.images[0]
          : userItem.images;

        return (
          <div key={index} className="w-full md:max-w-[856px]     border-gray-300 border-1">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src={userItem.user?.profilePhoto || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-12 h-12 object-cover object-top rounded-full"
                />
                <div className="leading-4">
                  <h1 className="font-bold text-sm">{userItem.user?.username || "OnlyFans ✅"}</h1>
                  <p className="text-gray-600 text-sm">@{userItem.user?.username || "onlyfans"}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">{new Date(userItem.createdAt).toLocaleString() || "Just now"}</p>
            </div>

            {/* Caption */}
            <div className="px-4 pb-3 text-[15px] text-gray-800 leading-5">
              {userItem.captions || "No caption available."}
            </div>

            {/* Main Image */}
            <div className="relative w-full h-auto">
              <img
                src={imageUrl || "https://via.placeholder.com/500"}
                alt="Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Card Preview */}
            <div className="relative px-4 pt-4">
              <div className="relative w-full rounded-md overflow-hidden">
                <img
                  src={userItem.user?.coverPhoto || "https://via.placeholder.com/500"}
                  alt="Card Cover"
                  className="w-full h-32 object-cover rounded-md"
                />
                <img
                  src={Menu}
                  alt="Menu"
                  className="absolute top-2 right-2 w-6 h-6 z-20"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center rounded-md">
                  <div className="flex items-center gap-4 px-6">
                    <img
                      src={userItem.user?.profilePhoto || "https://via.placeholder.com/150"}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border-2 border-white"
                    />
                    <div className="text-white">
                      <h1 className="text-lg font-bold">{userItem.user?.name || "OnlyFans"}</h1>
                      <p>@{userItem.user?.username || "onlyfans"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between px-4 py-3 mt-2">
              <div className="flex gap-6">
        
        <LikeButton
  postId={userItem._id}
  initialLiked={false} // update to true if you track user likes
  initialCount={userItem.likes || 0}
/>
                <IoChatbubbleOutline
                 
                  alt="Comment"
                  title="Comment"
                  className="w-6 h-6 cursor-pointer"
                />
                <HiOutlineCurrencyDollar
                 
                  alt="Send Tip"
                  title="Send Tip"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
              <IoBookmarkOutline
              
                alt="Bookmark"
                title="Bookmark"
                className="w-6 h-6 cursor-pointer"
              />
            </div>

            {/* Likes Count */}
          </div>
        );
      })}
    </>
  );
}

export default HomeImagePost;
