import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32.png'
import BottomPublic from '../BottomTab/BottmPublic'

export default function PublicProfile() {
  const { profileName } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/public/${profileName}`)
        const result = await response.json()
        console.log(result.data)
        setUser(result.data)
      } catch (err) {
        console.error('Fetch error:', err)
      }
    }

    if (profileName) fetchProfile()
  }, [profileName])

  if (!user){
    return(
      <>
      <div>
        <h1>Sorry</h1>
        <p>this page is not available</p>
        <h1>The link you followed may be broken, or the page may have been removed.</h1>
        <a href='http://localhost:5173'>Go back to localhost:5173</a>
      </div>
      </>
    )
  } 

  const avatarUrl = 'https://thumbs.onlyfans.com/public/files/thumbs/c144/v/vf/vfw/vfw6wnox8m15k544pxowigxrou01fvmf1572979146/avatar.jpg'

  return (
    <section>
      <div className="w-full md:w-[632px] mx-auto md:border-l md:border-r md:border-gray-300 bg-white">
        {/* Header */}
        <div className="relative">
          <img
            src={user?.coverPhoto  ||"https://public.onlyfans.com/files/t/td/tdg/tdg08m7z04rgqddih8yb0kwegkhtlv0s1576661836/header.jpg"}
            alt="Header"
            className="w-full h-[200px] object-cover"
          />
          <img src={Menu} alt="Menu" className="absolute top-3 left-3 w-6 h-6 bg-blue-600 rotate-90 p-1 rounded-full" />
          <h1 className="absolute top-3 left-12 text-white text-xl font-bold">{user.name}</h1>

          <div className="absolute top-10 left-12 text-white flex gap-4">
            <span>@{user?.username}</span>
            <span>{user.posts} posts</span>
            <span>{user.media} media</span>
          </div>

          <img src={user?.profilePhoto ||avatarUrl} alt="Profile" className="absolute bottom-[-48px] left-5 w-24 h-24 rounded-full border-2 border-black object-cover" />
        </div>

        {/* Info */}
        <div className="mt-16 px-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-sm text-gray-600">@{user.username} <span className="text-green-600 ml-1">• Available now</span></p>
            </div>
            <img src={avatarUrl} alt="Profile Small" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
          </div>
          <div className="mt-2">
            <p>{user?.Bio || "Only place you can chat with me and find sexy content you won’t see anywhere else!"}</p>
            <button className="text-blue-500 font-semibold mt-1">More info</button>
          </div>
        </div>

        {/* Subscription */}
        <div className="px-5 py-4 space-y-6">
          <div className="space-y-3 border border-gray-300 rounded-lg shadow-sm p-4 bg-white">
            <h3 className="text-sm font-semibold text-gray-500">SUBSCRIPTION</h3>
            <h2 className="text-xl font-bold text-gray-800">🎉 Limited Offer – <span className="text-[#00AFF0]">40% OFF</span> for 31 days!</h2>
            <p className="text-sm text-gray-500">Offer ends <strong>JUL 18</strong></p>

            <div className="flex items-start gap-3 border border-gray-200 p-3 rounded-md bg-gray-50">
              <img src={user?.profilePhoto||avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full object-cover border" />
              <p className="text-sm text-gray-700 leading-snug">You found me!! 🤭 Sub now for <span className="font-semibold text-blue-500">40% OFF</span> and let's get naughty 🔥</p>
            </div>

            <button className="bg-[#00AFF0] hover:bg-[#0099d1] transition w-full rounded-full text-white font-bold py-3 text-center text-base">
              SUBSCRIBE <span className="ml-2">$5.39 for 31 days</span>
            </button>
            <p className="text-sm text-gray-400 text-center">Regular price: $8.99 /month</p>
          </div>

          {/* Bundles */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500">SUBSCRIPTION BUNDLES</h3>
            {[1, 3, 6].map(months => (
              <div
                key={months}
                className="flex items-center justify-between bg-[#00AFF0] hover:bg-[#0099d1] transition text-white rounded-full px-5 py-3 shadow-sm"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-base">{months}-Month Bundle</span>
                  <span className="text-sm font-light">Save 40% – ${(5.39 * months).toFixed(2)} total</span>
                </div>
                <button className="font-bold text-base bg-white text-[#00AFF0] rounded-full px-4 py-1">Subscribe</button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-evenly py-3 border-t border-gray-200">
          <div><h4 className="text-sm font-semibold">POSTS</h4></div>
          <div><h4 className="text-sm font-semibold">MEDIA</h4></div>
        </div>

        {/* Footer Banner */}
        <div className="relative h-[200px] w-full">
          <img
            src={user?.profilePhoto||"https://public.onlyfans.com/files/t/td/tdg/tdg08m7z04rgqddih8yb0kwegkhtlv0s1576661836/header.jpg"}
            alt="Banner"
            className="w-full h-full object-cover rounded-t-md"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
            <div className="flex gap-4 text-center mb-4">
              <div><p className="text-xl font-bold">294</p><p className="text-xs text-gray-200">Posts</p></div>
              <div><p className="text-xl font-bold">402</p><p className="text-xs text-gray-200">Media</p></div>
              <div><p className="text-xl font-bold">11</p><p className="text-xs text-gray-200">Stories</p></div>
            </div>
            <button className="bg-[#00AFF0] hover:bg-[#0099d1] transition rounded-full text-white font-bold px-6 py-2">
              SUBSCRIBE <span className="ml-2">$5.39 for 31 days</span>
            </button>
          </div>
        </div>
      </div>
      <BottomPublic />
    </section>
  )
}
