import React, { useEffect, useState } from 'react';
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';

function Card() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchSuggestions() {
      const token = localStorage.getItem("token")
      try {
        const response = await fetch("https://onlyfans-backend-production.up.railway.app/api/suggestion/card", {
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
        <div key={user._id || index} className="relative w-full rounded-md overflow-hidden">
          {/* Background Image */}
          <img
            src={user.coverPhoto || "https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg"}
            alt="Profile Background"
            className="w-full h-[128px] object-cover"
          />

          {/* Menu Icon */}
          <img
            src={Menu}
            alt="Menu"
            className="absolute top-2 right-2 w-[24px] h-[24px] z-20"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

          {/* Profile Picture (fallback to coverPhoto or default) */}
          <img
            src={user.coverPhoto || "https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg"}
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
