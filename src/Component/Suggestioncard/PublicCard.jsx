import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { api } from '../../api/api';

function PublicCard() {
  const { username } = useParams();
  const profileName = username;

  const { isPending, error, data } = useQuery({
    queryKey: ['ProfileDetails', profileName],
    queryFn: async () => {
      const response = await fetch(`${api}/api/public/${profileName}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      return result.data;
    },
  });

  const isLoading = isPending;

  // ✅ If data is not available or empty after loading, hide component
  if (!isLoading && (!data || Object.keys(data).length === 0 || error)) {
    return null;
  }

  return (
    <section className="md:w-[368px] ml-4 py-5 relative z-10">
      <div className="fixed top-20 md:w-[368px] border border-gray-300 bg-white shadow-md rounded-lg px-4 py-4 space-y-4">
        <h1 className="text-xl font-bold text-gray-800">SUBSCRIPTIONS</h1>

        <div className="p-3 rounded-md bg-gray-50 space-y-3">
          <div className="flex items-start gap-3">
            {isLoading ? (
              <Skeleton circle={true} height={40} width={40} />
            ) : (
              <img
                src={data.profilePhoto}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover border"
              />
            )}

            {isLoading ? (
              <Skeleton count={2} width="100%" />
            ) : (
              <p className="text-sm text-gray-700 leading-snug border border-gray-300 p-2 rounded-md">
                You found me!! 🤭 Sub now for{' '}
                <span className="font-semibold text-blue-500">40% OFF</span> and let's get naughty 🔥
              </p>
            )}
          </div>

          {isLoading ? (
            <Skeleton height={44} borderRadius="999px" />
          ) : (
            <button className="bg-[#00AFF0] w-full rounded-full text-white font-bold py-3 text-center hover:bg-[#0099d1] transition">
              SUBSCRIBE <span className="ml-2">$5.39 for 31 days</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default PublicCard;
