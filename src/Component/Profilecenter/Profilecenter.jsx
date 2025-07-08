import React from 'react';
import menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';
import Poll from '../../assets/Icons_Images/icons8-poll-horizontal-48.png';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Profilecenter() {

  const [user,setUser]=useState(null)

    useEffect(() => {

      const token = localStorage.getItem("token")
  
      const fetchProfileData = async () => {
        try {
          const response = await fetch('https://onlyfans-backend-production.up.railway.app/api/my/Profile', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
  
          const result = await response.json();
          if (result.data) {
            setUser(result.data);
          }
        } catch (error) {
          console.error("Error fetching profile:", error.message);
        }
      };
  
      fetchProfileData();
    }, []);



  return (
    <section className="flex flex-col relative border border-gray-300  overflow-hidden w-[600px] shadow-sm">
      {/* Banner */}
      <div className="w-full">
        <img
          src={user?.coverPhoto ||"https://res.cloudinary.com/dri7edc3h/image/upload/v1749639331/Payaldhare/fenhcq6epckwjyg3hqk1.jpg"}
          className="h-[180px] w-full object-cover object-[0px_-200px]"
          alt="Banner"
        />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-3 text-white">
        <div className="flex gap-4 items-center">
          <img src={menu} alt="Menu" className="rotate-90" />
          <h1 className="text-lg font-bold">Home</h1>
        </div>
        <img src={menu} alt="Menu" />
      </div>

      {/* Profile Image */}
      <div className="relative px-5 mt-[-50px]">
        <div className="w-[100px] h-[100px] rounded-full border-[3px] border-white overflow-hidden">
          <img
            src={user?.profilePhoto ||"https://res.cloudinary.com/dri7edc3h/image/upload/v1749639331/Payaldhare/fenhcq6epckwjyg3hqk1.jpg"}
            className="w-full h-full object-cover object-top"
            alt="Profile"
          />
        </div>
      </div>

      {/* Profile Info + Buttons */}
      <div className="flex justify-between border-b border-gray-200 py-4 px-5 text-sm">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">{user?.name || "unknown"}</h1>
          <p className="text-gray-600">@{user?.username|| "unknown"}</p>
          <select className="border border-gray-300 px-2 py-1 text-sm rounded-md">
            <option>Available</option>
            <option>Invisible</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <Link to='/my/settings/profile' >          <button className="bg-[#00Aff0] text-white font-medium px-4 py-2 rounded-md">
            Edit Profile
          </button></Link>

          <button className="bg-[#00aff0] p-2 rounded-md">
            <img src={Poll} alt="Poll" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 text-center text-sm border-t border-gray-200">
        <div className="border-r border-gray-200 py-3 hover:bg-gray-100 cursor-pointer">
          <button>NO POST</button>
        </div>
        <div className="py-3 hover:bg-gray-100 cursor-pointer">
          <button>NO MEDIA</button>
        </div>
      </div>
    </section>
  );
}

export default Profilecenter;
