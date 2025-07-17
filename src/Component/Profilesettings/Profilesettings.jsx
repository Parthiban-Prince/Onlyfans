import React, { useRef, useState, useEffect } from 'react';
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32.png'
import {api} from '../../api/api'

export default function Profilesettings() {
  const [user, setUser] = useState(null);
  const cPhoto = useRef();
  const pPhoto = useRef();
  const [previewCover, setPreviewCover] = useState(null);
  const [previewProfile, setPreviewProfile] = useState(null);

  useEffect(() => {
    const usertoken = localStorage.getItem("token");

    const fetchProfileData = async () => {
      try {
        const response = await fetch(`${api}/api/my/Profile`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${usertoken}`
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

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImagePreview = (e, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const UploadProfile = async () => {
    const usertoken = localStorage.getItem("token");
    const formData = new FormData();

    // Append image files
    if (cPhoto.current?.files[0]) {
      formData.append("coverPhoto", cPhoto.current.files[0]);
    }
    if (pPhoto.current?.files[0]) {
      formData.append("profilePhoto", pPhoto.current.files[0]);
    }

    // Append text fields
    if (user?.name) formData.append("name", user.name);
    if (user?.username) formData.append("username", user.username);
    if (user?.Bio) formData.append("Bio", user.Bio);

    try {
      const response = await fetch("api/api/my/Profile/update", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${usertoken}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Profile updated successfully");
        setUser(result.data);
        setPreviewCover(null);
        setPreviewProfile(null);
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <section className="flex relative border border-gray-400">
      <div className="w-[632px]">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-gray-300 h-[56px] sticky top-0 z-10 bg-white rounded-t-md">
          <h1 className="text-xl font-bold flex gap-5 items-center"><span className='md:hidden'><img src={Menu}/></span> EDIT PROFILE</h1>
          <button
            className="bg-gray-800 text-white px-5 py-1 font-semibold rounded-md uppercase text-sm"
            onClick={UploadProfile}
          >
            Save
          </button>
        </div>

        {/* Cover Photo */}
        <div className="w-full">
          <form>
            <label htmlFor="coverPhoto">
              <img
                src={previewCover || user?.coverPhoto || "/default-cover.jpg"}
                className="h-[180px] w-full object-cover object-center cursor-pointer"
                alt="Cover"
              />
            </label>
            <input
              type="file"
              className="hidden"
              id="coverPhoto"
              name="coverPhoto"
              ref={cPhoto}
              accept="image/*"
              onChange={(e) => handleImagePreview(e, setPreviewCover)}
            />
          </form>
        </div>

        {/* Profile Photo */}
        <div className="relative flex justify-between">
          <div className="relative left-5 bottom-10 w-[100px] bg-gray-300 p-1 rounded-full">
            <form>
              <label htmlFor="Profile">
                <img
                  src={previewProfile || user?.profilePhoto || "/default-profile.jpg"}
                  className="h-[100px] w-[100px] object-cover object-top rounded-full cursor-pointer"
                  alt="Profile"
                />
              </label>
              <input
                type="file"
                className="hidden"
                id="Profile"
                ref={pPhoto}
                name="profilePhoto"
                accept="image/*"
                onChange={(e) => handleImagePreview(e, setPreviewProfile)}
              />
            </form>
          </div>
        </div>

        {/* Editable Form */}
        <form className="flex flex-col gap-3 px-5 mt-2">
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="border border-gray-300 w-full px-3 py-2 text-sm rounded-md"
            value={user?.name || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Display name"
            className="border border-gray-300 w-full px-3 py-2 text-sm rounded-md"
            value={user?.username || ""}
            onChange={handleInputChange}
          />
          <textarea
            name="Bio"
            className="border border-gray-300 w-full px-3 py-2 resize-none text-sm rounded-md"
            placeholder="Bio"
            value={user?.Bio || ""}
            rows="3"
            onChange={handleInputChange}
          />
        </form>

        {/* Additional Sections */}
        <div className="flex flex-col gap-6 my-6 text-sm px-5">
          <div className="bg-gray-50 rounded-md p-4 shadow-sm border border-gray-200">
            <h1 className="font-semibold text-gray-800 mb-2">Subscription</h1>
            <h3 className="py-1 border-t border-gray-200 pt-1">Subscription price</h3>
          </div>

          <div className="bg-gray-50 rounded-md p-4 shadow-sm border border-gray-200">
            <h1 className="font-semibold text-gray-800 mb-2">Additional Info</h1>
            <h3 className="py-1 border-t border-gray-200 pt-1">Spotify account</h3>
            <h3 className="py-1 border-t border-gray-200">Things I Like</h3>
          </div>

          <div className="bg-gray-50 rounded-md p-4 shadow-sm border border-gray-200">
            <h1 className="font-semibold text-gray-800 mb-2">Web3</h1>
            <h3 className="py-1 border-t border-gray-200 pt-1">Web3 avatar</h3>
            <h3 className="py-1 border-t border-gray-200">NFTs</h3>
          </div>

          <div className="bg-gray-50 rounded-md p-4 shadow-sm border border-gray-200">
            <h1 className="font-semibold text-gray-800 mb-2">Related Settings</h1>
            <h3 className="py-1 border-t border-gray-200 pt-1">Privacy and safety</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
