import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { api } from '../../api/api';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Accountsettings() {

  const navigate = useNavigate() 

  const token = localStorage.getItem('token');

  const { data: user, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const res = await fetch(`${api}/api/my/Profile`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const result = await res.json();
      return result.data;
    },
  });

  return (
    <div className="w-full bg-white shadow-sm min-h-screen text-sm md:w-[600px]">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-4 py-3">
        <h1 className="text-base font-bold text-gray-900 flex gap-5 items-center">
         
          <span className="md:hidden"> <IoArrowBack className='w-6 h-6 md:hidden' onClick={()=>navigate('/my/:username')} /></span> ACCOUNT
        </h1>
      </div>

      {/* Account Info */}
      <div className="mb-2">
        <div className="px-4 py-2 border-y border-gray-200">
          <p className="text-sm font-semibold text-gray-700">Account info</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Username</p>
          <p className="text-sm text-gray-500">
            {isLoading ? <Skeleton width={100} /> : `@${user?.username}`}
          </p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Email</p>
          <p className="text-sm text-gray-500">
            {isLoading ? <Skeleton width={200} /> : user?.email}
          </p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Phone number</p>
          <p className="text-sm text-gray-500">
            {isLoading ? <Skeleton width={120} /> : user?.phone || 'N/A'}
          </p>
        </div>
      </div>

      {/* Linked Accounts */}
      <div className="mb-2">
        <div className="px-4 py-2 border-y border-gray-200">
          <p className="text-sm font-semibold text-gray-700">Linked accounts</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">X account</p>
          <p className="text-sm text-gray-500">English</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Google account</p>
          <p className="text-sm text-gray-500">
            {isLoading ? <Skeleton width={180} /> : user?.email}
          </p>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="mb-2">
        <div className="px-4 py-2 border-y border-gray-200">
          <p className="text-sm font-semibold text-gray-700">Connected accounts</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Connect another OnlyFans account</p>
          <p className="text-sm text-gray-500">English</p>
        </div>
      </div>

      {/* Security */}
      <div className="mb-2">
        <div className="px-4 py-2 border-y border-gray-200">
          <p className="text-sm font-semibold text-gray-700">Security</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Password</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Login sessions</p>
          <p className="text-sm text-gray-500">English</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Two Step Authentication</p>
          <p className="text-sm text-gray-500">Enabled</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-gray-900">Passwordless sign in</p>
          <p className="text-sm text-gray-500">Off</p>
        </div>
      </div>

      {/* Account Management */}
      <div className="mb-2">
        <div className="px-4 py-2 border-y border-gray-200">
          <p className="text-sm font-semibold text-gray-700">Account management</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
          <p className="text-sm font-medium text-red-600">Delete account</p>
        </div>
      </div>
    </div>
  );
}
