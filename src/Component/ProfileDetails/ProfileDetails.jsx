import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { IoArrowBackOutline } from 'react-icons/io5'
import { api } from '../../api/api.js'
import PublicCard from '../Suggestioncard/PublicCard.jsx'
import BottomPublic from '../BottomTab/BottmPublic.jsx'
import FriendsBar from '../userCard/UserFriendsCard.jsx'

export default function PublicProfile() {
  const location = useLocation()
  const profileName = location.state
  const navigate = useNavigate()
  const [showMore, setShowMore] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [tab, setTab] = useState('posts')
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false)
  const [selectedReason, setSelectedReason] = useState('')

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)

  const subButton = subscribed ? "Subscribed" : "Subscribe"

  const avatarUrl = 'https://thumbs.onlyfans.com/public/files/thumbs/c144/v/vf/vfw/vfw6wnox8m15k544pxowigxrou01fvmf1572979146/avatar.jpg'

  useEffect(() => {
    setIsPending(true)
    setError(null)

    fetch(`${api}/api/public/${profileName}`)
      .then(res => {
        if (!res.ok) throw new Error('Network error')
        return res.json()
      })
      .then(result => {
        setData(result.data)
        setIsPending(false)
      })
      .catch(err => {
        setError(err.message)
        setIsPending(false)
      })
  }, [profileName])

  if (error) {
    return (
      <div className='flex flex-col items-center justify-center h-screen text-center'>
        <h1>Sorry</h1>
        <p>This page is not available</p>
        <h1>The link may be broken or removed.</h1>
        <a href='https://onlyfans-liard.vercel.app' className="text-blue-500 underline">Go back to homepage</a>
      </div>
    )
  }

  function handleSubscribeToggle() {
    setSubscribed(!subscribed)
    setModalOpen(false)
  }

  return (
    <section className='flex'>
      <div className="w-full md:w-[632px] mx-auto md:border-l md:border-r md:border-gray-300 bg-white relative min-h-screen">
        
        {/* Header */}
        <div className="relative">
          {isPending ? (
            <Skeleton height={200} />
          ) : (
            <img
              src={data?.coverPhoto || "https://public.onlyfans.com/files/t/td/tdg/tdg08m7z04rgqddih8yb0kwegkhtlv0s1576661836/header.jpg"}
              alt="Header"
              className="w-full h-[200px] object-cover"
            />
          )}
          <IoArrowBackOutline
            className="absolute top-3 left-3 w-6 h-6 p-1 rounded-full text-black cursor-pointer"
            onClick={() => navigate('/my/:username')}
          />
          <h1 className="absolute top-3 left-12 text-black text-xl font-bold">
            {isPending ? <Skeleton width={120} /> : data?.name}
          </h1>
          <div className="absolute top-10 left-12 text-black flex gap-4">
            {isPending ? (
              <Skeleton width={250} />
            ) : (
              <>
                <span>@{data?.username}</span>
                {subscribed && (
                  <>
                    <span>{data?.posts} posts</span>
                    <span>{data?.media} media</span>
                  </>
                )}
              </>
            )}
          </div>
          <div className="absolute bottom-[-48px] left-5">
            {isPending ? (
              <Skeleton circle width={96} height={96} />
            ) : (
              <img
                src={data?.profilePhoto || avatarUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-black object-cover"
              />
            )}
          </div>
        </div>

        {/* Info */}
        <div className="mt-16 px-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                {isPending ? <Skeleton width={100} /> : data?.name}
              </h2>
              <p className="text-sm text-gray-600">
                {isPending ? <Skeleton width={200} /> : (
                  <>@{data?.username} <span className="text-green-600 ml-1">• Available now</span></>
                )}
              </p>
            </div>
            {isPending ? (
              <Skeleton circle width={48} height={48} />
            ) : (
              <img
                src={data?.profilePhoto || avatarUrl}
                alt="Profile Small"
                className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
              />
            )}
          </div>
          <div className="mt-2">
            {isPending ? (
              <Skeleton count={2} />
            ) : (
              <>
                {showMore && (
                  <p className="mb-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    luctus, sapien nec hendrerit pretium, purus magna porttitor
                    ligula, at scelerisque sapien magna vel lorem.
                  </p>
                )}
                <p>
                  {data?.Bio ||
                    "Only place you can chat with me and find sexy content you won’t see anywhere else!"}
                </p>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-blue-500 font-semibold mt-1"
                >
                  {showMore ? "Show less" : "More info"}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Subscription section */}
        {!subscribed && (
          <div className="px-5 py-4 space-y-6">
            <div className="space-y-3 border border-gray-300 rounded-lg shadow-sm p-4 bg-white">
              <h3 className="text-sm font-semibold text-gray-500">SUBSCRIPTION</h3>
              <h2 className="text-xl font-bold text-gray-800">
                🎉 Limited Offer – <span className="text-[#00AFF0]">40% OFF</span> for 31 days!
              </h2>
              <p className="text-sm text-gray-500">Offer ends <strong>JUL 18</strong></p>
              <div className="flex items-start gap-3 border border-gray-200 p-3 rounded-md bg-gray-50">
                {isPending ? (
                  <Skeleton circle width={40} height={40} />
                ) : (
                  <img src={data?.profilePhoto || avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full object-cover border" />
                )}
                <p className="text-sm text-gray-700 leading-snug">
                  You found me!! 🤭 Sub now for <span className="font-semibold text-blue-500">40% OFF</span> and let's get naughty 🔥
                </p>
              </div>
              <button
                className="bg-[#00AFF0] hover:bg-[#0099d1] transition w-full rounded-full text-white font-bold py-3 text-center text-base"
                onClick={handleSubscribeToggle}
              >
                {subButton} <span className="ml-2">$5.39 for 31 days</span>
              </button>
              <p className="text-sm text-gray-400 text-center">Regular price: $8.99 /month</p>
            </div>
            {/* Bundles remain unchanged */}
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
                  <button
                    className="font-bold text-base bg-white text-[#00AFF0] rounded-full px-4 py-1"
                    onClick={handleSubscribeToggle}
                  >
                    {subButton}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Unsubscribe button */}
        {subscribed && (
          <div className="px-5 mt-4">
            <button
              className="bg-red-500 hover:bg-red-600 transition w-full rounded-full text-white font-bold py-3 text-center text-base mb-3"
              onClick={() => setShowUnsubscribeModal(true)}
            >
              Unsubscribe
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-evenly py-3 border-t border-gray-200 cursor-pointer select-none">
          <div
            onClick={() => (subscribed ? setTab('posts') : setModalOpen(true))}
            className={`flex flex-col items-center ${tab === 'posts' ? 'border-b-2 border-blue-500' : ''}`}
          >
            <h4 className="text-sm font-semibold">POSTS</h4>
            {subscribed && <p className="text-xl font-bold">{data?.posts}</p>}
          </div>
          <div
            onClick={() => (subscribed ? setTab('media') : setModalOpen(true))}
            className={`flex flex-col items-center ${tab === 'media' ? 'border-b-2 border-blue-500' : ''}`}
          >
            <h4 className="text-sm font-semibold">MEDIA</h4>
            {subscribed && <p className="text-xl font-bold">{data?.media}</p>}
          </div>
        </div>

        {/* Tab content */}
        <div className="px-5 py-6">
          {subscribed ? (
            <>
              {tab === 'posts' && (
                <>
                  <h3 className="text-xl font-semibold mb-3">Posts</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[1, 2, 3, 4].map(post => (
                      <div key={post} className="border rounded p-3 shadow-sm hover:shadow-md cursor-pointer">
                        <h4 className="font-bold mb-1">Post #{post}</h4>
                        <p className="text-sm text-gray-700">This is a sample post content preview...</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {tab === 'media' && (
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map(media => (
                    <img
                      key={media}
                      src={`https://picsum.photos/seed/media${media}/150/150`}
                      alt={`Media ${media}`}
                      className="rounded cursor-pointer hover:brightness-90"
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="relative h-[200px] w-full">
              {isPending ? (
                <Skeleton height={200} />
              ) : (
                <img
                  src={data?.profilePhoto || "https://public.onlyfans.com/files/t/td/tdg/tdg08m7z04rgqddih8yb0kwegkhtlv0s1576661836/header.jpg"}
                  alt="Banner"
                  className="w-full h-full object-cover rounded-t-md"
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-white px-4">
                <button
                  className="bg-[#00AFF0] hover:bg-[#0099d1] transition rounded-full text-white font-bold px-6 py-2"
                  onClick={handleSubscribeToggle}
                >
                  {subButton} <span className="ml-2">$5.39 for 31 days</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {!subscribed ?  <PublicCard /> : <FriendsBar/> }
      <BottomPublic />

      {/* Unsubscribe Modal */}
      {showUnsubscribeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-80 p-4">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Subscription</h3>
            <p className="text-sm text-gray-700 mt-2">Are you sure you want to cancel your subscription?</p>
            <select
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="w-full mt-4 p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">No specific reason</option>
              <option value="Too expensive">Too expensive</option>
              <option value="Not enough content">Not enough content</option>
              <option value="Found another creator">Found another creator</option>
              <option value="Just taking a break">Just taking a break</option>
              <option value="Other">Other</option>
            </select>
            <div className="flex justify-end mt-5 space-x-4 text-sm font-medium">
              <button
                onClick={() => setShowUnsubscribeModal(false)}
                className="text-blue-500 hover:underline"
              >
                BACK
              </button>
              <button
                onClick={() => {
                  if (!selectedReason)
                    return alert("Please select a reason before unsubscribing.");
                  setSubscribed(false);
                  setShowUnsubscribeModal(false);
                }}
                className="text-blue-500 hover:underline"
              >
                UNSUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
