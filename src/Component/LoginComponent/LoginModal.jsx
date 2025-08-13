import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/Text_with_Bluelogo.png'
import { api } from '../../api/api'

export default function LoginModal({ isOpen, onClose, profilePhoto, name, username }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleToggleMode = () => {
    setIsSignUp(prev => !prev)
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await fetch(
      isSignUp ? `${api}/api/auth/Signup` : `${api}/api/auth/Signin`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          ...(isSignUp && { name: fullName.toLowerCase })
        }),
      }
    )

    const data = await response.json()

    console.log(data)

    if (!response.ok) {
      throw new Error(data?.message || 'Authentication failed')
    }

    if (isSignUp) {
      alert('Signup successful. Please login.')
      setIsSignUp(false)
      return
    }

    // Save token in localStorage
    if (data?.data) {
      localStorage.setItem('token', data.data)
    } else {
      throw new Error('Token not found in response')
    }



    navigate(`/my/${name}/ProfileDetails`,{state:name})

  } catch (error) {
    alert(error.message)
  }
}

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl mx-4 md:flex shadow-2xl relative overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/2 p-6 border-r border-gray-200 flex flex-col gap-5">
          <h1 className='uppercase'>Login to Subscribe</h1>
          <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md mb-6">
            <img src={profilePhoto} alt={`${name} cover`} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <img src={profilePhoto} alt={`${name} avatar`} className="w-20 h-20 rounded-full border-4 border-white object-cover -mt-12 shadow-md" />
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-gray-500">@{username}</p>
            </div>
          </div>
          <div className="text-gray-600 font-semibold mb-2">SUBSCRIBE AND GET THESE BENEFITS:</div>
          <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
            <li>Full access to this user's content</li>
            <li>Direct message with this user</li>
            <li>Cancel your subscription at any time</li>
          </ul>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-5">
          <h2 className="text-2xl font-bold text-[#00AFF0] flex items-center gap-2">
            <img src={Logo} alt="OnlyFans Logo" className="w-full" />
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {isSignUp && (
              <input
                type="text"
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00AFF0]"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00AFF0]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00AFF0]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#00AFF0] text-white rounded-full py-3 font-bold shadow-md hover:bg-[#0099d1] transition"
            >
              {isSignUp ? 'SIGN UP' : 'LOG IN'}
            </button>
          </form>

          <p className="text-xs text-gray-500">
            By {isSignUp ? 'signing up' : 'logging in'}, you agree to our{' '}
            <a href="#" className="text-blue-500 underline">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-500 underline">Privacy Policy</a>, and confirm that you are at least 18 years old.
          </p>

          <div className="text-sm text-[#00AFF0] flex justify-between">
            {!isSignUp ? (
              <>
                <button onClick={() => alert('Forgot password?')} className="underline">
                  Forgot password?
                </button>
                <button onClick={handleToggleMode} className="underline">
                  Sign up for OnlyFans
                </button>
              </>
            ) : (
              <p className="text-center w-full">
                Already have an account?{' '}
                <button onClick={handleToggleMode} className="underline">
                  Log in here
                </button>
              </p>
            )}
          </div>

          <div className="space-y-2 pt-2">
            <button className="w-full bg-black rounded-full py-2 flex items-center justify-center gap-2 font-semibold text-white hover:bg-gray-800 transition shadow-sm">
              <span>Sign in with X</span>
            </button>
            <button className="w-full bg-[#4285F4] rounded-full py-2 flex items-center justify-center gap-2 font-semibold text-white hover:bg-[#357ae8] transition shadow-sm">
              <span>Sign in with Google</span>
            </button>
            <button className="w-full bg-[#00AFF0] rounded-full py-2 flex items-center justify-center gap-2 font-semibold text-white hover:bg-[#0099d1] transition shadow-sm">
              <span>Passwordless Sign In</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="absolute bottom-4 right-4 text-[#00AFF0] font-bold underline"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}
