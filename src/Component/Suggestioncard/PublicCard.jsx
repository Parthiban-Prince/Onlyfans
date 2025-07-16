import React from 'react';

function PublicCard() {
  const avatarUrl =
    'https://thumbs.onlyfans.com/public/files/thumbs/c144/v/vf/vfw/vfw6wnox8m15k544pxowigxrou01fvmf1572979146/avatar.jpg';

  return (
    <section className="md:w-[368px] ml-4 py-5 relative z-10">
      <div className="fixed top-20 md:w-[368px] border border-gray-300 bg-white shadow-md rounded-lg px-4 py-4 space-y-4">
        <h1 className="text-xl font-bold text-gray-800">SUBSCRIPTIONS</h1>

        <div className=" p-3 rounded-md bg-gray-50 space-y-3">
          <div className="flex items-start gap-3">
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover border"
            />
            <p className="text-sm text-gray-700 leading-snug border border-gray-300">
              You found me!! 🤭 Sub now for{' '}
              <span className="font-semibold text-blue-500">40% OFF</span> and let's get naughty 🔥
            </p>
          </div>

          <button className="bg-[#00AFF0] w-full rounded-full text-white font-bold py-3 text-center hover:bg-[#0099d1] transition">
            SUBSCRIBE <span className="ml-2">$5.39 for 31 days</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PublicCard;
