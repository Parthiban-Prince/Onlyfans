import React, { useEffect, useState } from 'react';
import {api} from '../../api/api'
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Card() {

  let { name } = useParams();

  console.log("Username from params:", name);

  const navigate = useNavigate()

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchSuggestions() {
      const token = localStorage.getItem("token")
      try {
        const response = await fetch(`${api}/api/suggestion/card`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const result = await response.json();
        setUsers(result.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchSuggestions();
  }, []);

  if (users.length === 0) {
    return <div className="p-4 text-gray-500">Loading cards...</div>;
  }


  return (
    <div className="flex flex-col gap-4 p-4">
      {users.map((user, index) => (
        <div key={user._id || index} className="relative w-[368px rounded-md overflow-hidden" onClick={() => navigate(`/${user.name}/ProfileDetails`, { state: user.name })}>
          {/* Background Image */}
          <img
            src={user.coverPhoto || "https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"}
            alt="Profile Background"
            className="w-full h-[128px] object-cover"
          />

          {/* Menu Icon */}
          <IoEllipsisVerticalOutline className="absolute top-2 right-2 w-[24px] h-[24px] z-20 text-white"/>

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

          {/* Profile Picture (fallback to coverPhoto or default) */}
          <img
            src={user?.profilePhoto || "https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"}
            alt="Avatar"
            className="w-[96px] h-[96px] object-cover rounded-full border-4 border-white absolute top-[20px] left-[20px] z-30"
          />

          {/* Name and Username */}
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
