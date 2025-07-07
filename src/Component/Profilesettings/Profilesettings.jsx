import React from 'react';
import { useEffect,useState } from 'react';

export default function Profilesettings() {

  const [user,setUser] = useState(null)



    useEffect(() => {
      const usertoken = localStorage.getItem("token")
  
      const fetchProfileData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/my/Profile', {
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


  return (
    <section className="flex relative border border-gray-400">
      <div className="w-[632px]">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-gray-300 h-[56px] sticky top-0 z-10 bg-white rounded-t-md">
          <h1 className="text-xl font-bold">EDIT PROFILE</h1>
          <button className="bg-gray-300 text-white px-5 py-1 font-semibold rounded-md uppercase text-sm">
            Save
          </button>
        </div>

        {/* Cover + Avatar */}
        <div className="w-full">
          <div className="w-full">
            <img
              src={user?.coverPhoto || ""}
              className="h-[180px] w-full object-cover object-center "
              alt="Cover"
            />
          </div>
          <div className="relative flex justify-between">
            <div className="relative left-5 bottom-10 w-[100px] bg-gray-300 p-1 rounded-full">
              <img
                src={user?.profilePhoto || "none"}
                className="h-[100px] w-[100px] object-cover object-top rounded-full"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-3 px-5 mt-2">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 w-full px-3 py-2 text-sm rounded-md"
            value={user?.name || "none"}

          />
          <input
            type="text"
            placeholder="Display name"
            className="border border-gray-300 w-full px-3 py-2 text-sm rounded-md"
            value={user?.username || "none"}
          />
          <textarea
            className="border border-gray-300 w-full px-3 py-2 resize-none text-sm rounded-md"
            placeholder="Bio"
            value={user?.Bio || ""}
            rows="3"
          />
          <input
            type="text"
            placeholder="Location"
            className="border border-gray-300 w-full px-3 py-2 text-sm rounded-md"
          />
          <input
            type="text"
            placeholder="Website URL"
            className="border border-gray-300 w-full px-3 py-2 text-sm rounded-md"
          />
          <input
            type="text"
            placeholder="Amazon Wishlist"
            className="border border-gray-300 w-full px-3 py-2 text-sm rounded-md"
          />
        </form>

        {/* Sections */}
<div className="flex flex-col gap-6 my-6 text-sm px-5">
  {/* Subscription */}
  <div className="bg-gray-50 rounded-md p-4 shadow-sm border border-gray-200">
    <h1 className="font-semibold text-gray-800 mb-2">Subscription</h1>
    <h3 className="py-1 border-t border-gray-200 pt-1">Subscription price</h3>
  </div>

  {/* Additional Info */}
  <div className="bg-gray-50 rounded-md p-4 shadow-sm border border-gray-200">
    <h1 className="font-semibold text-gray-800 mb-2">Additional Info</h1>
    <h3 className="py-1 border-t border-gray-200 pt-1">Spotify account</h3>
    <h3 className="py-1 border-t border-gray-200">Things I Like</h3>
  </div>

  {/* Web3 */}
  <div className="bg-gray-50 rounded-md p-4 shadow-sm border border-gray-200">
    <h1 className="font-semibold text-gray-800 mb-2">Web3</h1>
    <h3 className="py-1 border-t border-gray-200 pt-1">Web3 avatar</h3>
    <h3 className="py-1 border-t border-gray-200">NFTs</h3>
  </div>

  {/* Related Settings */}
  <div className="bg-gray-50 rounded-md p-4 shadow-sm border border-gray-200">
    <h1 className="font-semibold text-gray-800 mb-2">Related Settings</h1>
    <h3 className="py-1 border-t border-gray-200 pt-1">Privacy and safety</h3>
  </div>
</div>

      </div>
    </section>
  );
}
