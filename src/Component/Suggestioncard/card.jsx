import React from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useQuery } from '@tanstack/react-query';

function Card() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ['suggestionCards'],
    queryFn: async () => {
      const response = await fetch(`${api}/api/suggestion/card`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const result = await response.json();
      return result.data || [];
    }
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 p-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} height={180} borderRadius={12} baseColor="#e0e0e0" />
        ))}
      </div>
    );
  }

  if (isError || users.length === 0) {
    return <p className="text-center text-gray-500">No suggestions found.</p>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {users.map((user, index) => (
        <div
          key={user._id || index}
          className="relative w-[368px] rounded-md overflow-hidden cursor-pointer"
          onClick={() => navigate(`/my/${user.name}/ProfileDetails`, { state: user.name })}
        >
          {/* Background Image */}
          {user?.coverPhoto ? (
            <img
              src={user.coverPhoto}
              alt="Cover"
              className="w-full h-[128px] object-cover"
            />
          ) : (
            <Skeleton width={368} height={128} baseColor="#e0e0e0" />
          )}

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

          {/* Menu Icon */}
          <IoEllipsisVerticalOutline className="absolute top-2 right-2 w-6 h-6 z-20 text-white" />

          {/* Profile Image */}
          <img
            src={user.profilePhoto || "https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"}
            alt="Avatar"
            className="w-[96px] h-[96px] object-cover rounded-full border-4 border-white absolute top-[20px] left-[20px] z-30"
          />

          {/* User Info */}
          <div className="absolute top-[30px] left-[130px] z-30">
            <h1 className="text-white text-lg font-bold">{user.name || "Anonymous"}</h1>
            <p className="text-white text-sm">@{user.username || "unknown"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
