import React, { useState, useEffect } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function AddcardRight() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="ml-0 md:ml-4 py-5 my-5 relative z-10 w-full md:w-auto">
      <div className="flex flex-col gap-6 items-center md:items-start">
        {/* Wallet Section */}
        <div className="flex flex-col gap-4 w-full md:w-[400px] border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <div className="border-b border-gray-300 px-5 py-4 bg-white">
            {loading ? (
              <>
                <Skeleton className="w-20 h-7" />
                <Skeleton className="w-28 h-4 mt-2" />
              </>
            ) : (
              <>
                <h1 className="text-2xl font-semibold text-gray-900">$0</h1>
                <p className="text-sm text-gray-600">Wallet credits</p>
              </>
            )}
          </div>

          <div className="flex flex-col px-5 py-4 gap-4 bg-white">
            {loading ? (
              <>
                <Skeleton className="w-52 h-5" />
                <Skeleton className="w-full h-10 rounded-full" />
                <Skeleton className="w-full h-5" />
              </>
            ) : (
              <>
                <h2 className="font-semibold text-sm text-gray-700">ADD FUNDS TO YOUR WALLET</h2>
                <button className="bg-[#0aaff0] text-white rounded-full h-[40px] font-medium hover:bg-[#0999d2] transition">
                  ADD A PAYMENT CARD
                </button>
                <div className="flex justify-between items-center gap-4">
                  <p className="text-sm text-gray-600">Make wallet primary method for rebills</p>
                  <label className="w-[60px] h-[34px] flex items-center justify-center">
                    <input type="checkbox" className="w-5 h-5" />
                  </label>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Transactions Section */}
        <div className="flex flex-col gap-6 w-full md:w-[400px] h-[300px] py-5 px-5 border border-gray-300 rounded-md bg-white shadow-sm">
          {loading ? (
            <>
              <Skeleton className="w-48 h-5" />
              <div className="flex flex-col items-center justify-center flex-1 gap-2">
                <Skeleton circle className="w-10 h-10" />
                <Skeleton className="w-32 h-4" />
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-gray-700">LATEST TRANSACTIONS</h2>
              <div className="flex flex-col items-center justify-center text-gray-400 flex-1">
                <IoCartOutline className="w-8 h-8 mb-2" />
                <p className="text-sm">No payments done yet</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AddcardRight;
