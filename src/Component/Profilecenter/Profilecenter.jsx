import React, { useState, useEffect } from 'react';
import menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';
import Poll from '../../assets/Icons_Images/icons8-poll-horizontal-48.png';
import { Link } from 'react-router-dom';
import ProfileCenterPosts from '../Homecenterpost/ProfileCenterPosts';


function Profilecenter() {
  const [user, setUser] = useState(null);
  const [Post, setPost] = useState([]);
  const [activeTab, setActiveTab] = useState('Posts'); // 'Posts' or 'Media'


  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://onlyfans-backend-production.up.railway.app/api/my/Profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (result.data) {
          setUser(result.data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error.message);
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchUserPost = async () => {
      try {
        const response = await fetch('https://onlyfans-backend-production.up.railway.app/api/create/Posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (result.data) {
          setPost(result.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
    fetchUserPost();
  }, []);

  return (
    <section className="flex flex-col relative border border-gray-300 w-[600px] shadow-sm overflow-hidden">
      {/* Banner */}
      <div className="w-full">
        <img
          src={
            user?.coverPhoto ||
            'https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000'
          }
          className="h-[180px] w-full object-cover"
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
            src={
              user?.profilePhoto ||
              'https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000'
            }
            className="w-full h-full object-cover object-top"
            alt="Profile"
          />
        </div>
      </div>

      {/* Profile Info + Buttons */}
      <div className="flex justify-between border-b border-gray-200 py-4 px-5 text-sm">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">{user?.name || 'unknown'}</h1>
          <p className="text-gray-600">@{user?.username || 'unknown'}</p>
          <select className="border border-gray-300 px-2 py-1 text-sm rounded-md">
            <option>Available</option>
            <option>Invisible</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/my/settings/profile">
            <button className="bg-[#00Aff0] text-white font-medium px-4 py-2 rounded-md">
              Edit Profile
            </button>
          </Link>

          <button className="bg-[#00aff0] p-2 rounded-md">
            <img src={Poll} alt="Poll" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 text-center text-sm border-t border-gray-200">
        <div
          className={`border-r border-gray-200 py-3 cursor-pointer ${
            activeTab === 'Posts' ? 'bg-gray-100 font-semibold' : ''
          }`}
          onClick={() => setActiveTab('Posts')}
        >
          Posts
        </div>
        <div
          className={`py-3 cursor-pointer transition-all ease ${
            activeTab === 'Media' ? 'bg-gray-100 font-semibold' : ''
          }`}
          onClick={() => setActiveTab('Media')}
        >
          Media
        </div>
      </div>

      {/* Post or Media Section */}
      {activeTab === 'Posts' && (
        <div id="Posts">
          <ProfileCenterPosts />
        </div>
      )}

      {activeTab === 'Media' && (
        <div id="Media" className="px-4 py-4 flex flex-wrap gap-4 justify-start">
          {Post.map((post, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white"
            >
              <img
                src={
                  post.images ||
                  'https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000'
                }
                alt="Post"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      )}
    </section>
  );
}

export default Profilecenter;
