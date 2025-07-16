import React, { useState, useEffect } from 'react';
import menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';
import Poll from '../../assets/Icons_Images/icons8-poll-horizontal-48.png';
import { Link } from 'react-router-dom';

function Profilecenter() {
  const [user, setUser] = useState(null);
  const [Post, setPost] = useState([]);
  const [activeTab, setActiveTab] = useState('Posts');
  const [modalMedia, setModalMedia] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchProfile = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/my/Profile', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const result = await res.json();
        if (result.data) setUser(result.data);
      } catch (err) {
        console.error('Profile fetch error:', err);
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/create/Posts', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const result = await res.json();
        if (result.data) setPost(result.data);
      } catch (err) {
        console.error('Post fetch error:', err);
      }
    };

    fetchProfile();
    fetchPosts();
  }, []);

  return (
    <section className="flex flex-col relative border border-gray-300 md:w-[600px] shadow-sm h-screen overflow-hidden">
      {/* Top Fixed Content */}
      <div className="absolute top-0 left-0 w-full z-10 bg-white">
        {/* Banner */}
        <div className="w-full">
          <img
            src={user?.coverPhoto || 'https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000'}
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

        {/* Profile Info */}
        <div className="relative px-5 mt-[-50px]">
          <div className="w-[100px] h-[100px] rounded-full border-[3px] border-white overflow-hidden">
            <img
              src={user?.profilePhoto || 'https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000'}
              className="w-full h-full object-cover object-top"
              alt="Profile"
            />
          </div>
        </div>

        {/* Info & Buttons */}
        <div className="flex justify-between border-b border-gray-200 py-4 px-5 text-sm bg-white">
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
            className={`py-3 cursor-pointer ${
              activeTab === 'Media' ? 'bg-gray-100 font-semibold' : ''
            }`}
            onClick={() => setActiveTab('Media')}
          >
            Media
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="mt-[410px] flex-1 overflow-y-auto no-scrollbar px-4 py-4">
        {activeTab === 'Posts' ? (
          Post.length === 0 ? (
            <p className="text-gray-500 italic text-center">No posts available.</p>
          ) : (
            Post.map((post, index) => {
              const images = Array.isArray(post.images) ? post.images : [post.images];
              const validImages = images.filter((img) => img && !img.includes(post.thumbnail));
              const hasVideo = post.media && post.thumbnail;

              return (
                <div key={index} className="border border-gray-200 rounded-lg shadow-sm bg-white p-4 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={user?.profilePhoto}
                      className="w-10 h-10 rounded-full object-cover"
                      alt="Profile"
                    />
                    <div>
                      <h1 className="font-semibold text-sm">{user?.name}</h1>
                      <p className="text-gray-500 text-xs">@{user?.username}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-800 mb-2">{post?.captions}</p>

                  {validImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Post"
                      className="w-full max-h-[400px] object-cover rounded mb-2 cursor-pointer"
                      onClick={() => setModalMedia({ type: 'image', src: img })}
                    />
                  ))}

                  {hasVideo && (
                    <div
                      className="relative w-full max-h-[400px] rounded overflow-hidden cursor-pointer"
                      onClick={() => setModalMedia({ type: 'video', src: post?.media })}
                    >
                      <img
                        src={post?.thumbnail}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex justify-center items-center bg-black/40">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )
        ) : (
          <div className="flex flex-wrap gap-4 justify-start">
            {Post.map((post, index) => {
              const images = Array.isArray(post.images) ? post.images : [post.images];
              const hasVideo = post.media && post.thumbnail;

              return (
                <React.Fragment key={index}>
                  {images.map((img, i) =>
                    img && img !== post.thumbnail ? (
                      <div
                        key={`img-${index}-${i}`}
                        className="w-[100px] h-[100px] border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer"
                        onClick={() => setModalMedia({ type: 'image', src: img })}
                      >
                        <img src={img} alt="Post" className="w-full h-full object-cover" />
                      </div>
                    ) : null
                  )}
                  {hasVideo && (
                    <div
                      key={`vid-${index}`}
                      className="w-[100px] h-[100px] border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer relative"
                      onClick={() => setModalMedia({ type: 'video', src: post.media })}
                    >
                      <img
                        src={post.thumbnail}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalMedia && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
          onClick={() => setModalMedia(null)}
        >
          {modalMedia.type === 'image' ? (
            <img
              src={modalMedia.src}
              alt="Preview"
              className="max-w-[90%] max-h-[90%] rounded shadow-xl"
            />
          ) : (
            <video
              src={modalMedia.src}
              controls
              autoPlay
              className="max-w-[90%] max-h-[90%] rounded shadow-xl"
            />
          )}
        </div>
      )}
    </section>
  );
}

export default Profilecenter;
