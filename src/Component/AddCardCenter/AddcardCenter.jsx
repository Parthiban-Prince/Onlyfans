import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function AddcardCenter() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col border-x border-gray-300 h-dvh px-4 sm:px-6">
      <div className="w-full md:w-[400px] mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center py-3 border-b border-gray-300 h-[56px] sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <Link to="/Dashboard">
              <IoArrowBackOutline className="w-6 h-6" />
            </Link>
            {loading ? (
              <Skeleton className="w-28 h-6" />
            ) : (
              <h1 className="text-lg sm:text-xl font-bold">ADD CARD</h1>
            )}
          </div>
          {loading ? (
            <Skeleton className="w-16 h-5" />
          ) : (
            <div className="text-[#00aff0] font-semibold text-sm sm:text-base">VERIFY</div>
          )}
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 py-6">
          <form className="flex flex-col gap-8 w-full">
            {/* Billing Section */}
            <div className="flex flex-col gap-3">
              {loading ? (
                <Skeleton className="w-40 h-5" />
              ) : (
                <h2 className="font-bold text-base sm:text-lg">BILLING DETAILS</h2>
              )}
              {loading ? (
                <Skeleton count={2} className="h-4 w-full" />
              ) : (
                <p className="text-sm text-gray-600">
                  We are fully compliant with Payment Card Industry Data Security Standards.
                </p>
              )}

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {loading ? (
                    <>
                      <Skeleton className="h-10 rounded-md w-full sm:w-1/2" />
                      <Skeleton className="h-10 rounded-md w-full sm:w-1/2" />
                    </>
                  ) : (
                    <>
                      <input type="text" placeholder="Country" className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm" />
                      <input type="text" placeholder="State/Province" className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm" />
                    </>
                  )}
                </div>
                {loading ? (
                  <>
                    <Skeleton className="h-10 rounded-md w-full" />
                    <Skeleton className="h-10 rounded-md w-full" />
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Address" className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm" />
                    <input type="text" placeholder="City" className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm" />
                  </>
                )}
              </div>
            </div>

            {/* Card Section */}
            <div className="flex flex-col gap-4">
              {loading ? (
                <Skeleton className="w-40 h-5" />
              ) : (
                <h2 className="font-bold text-base sm:text-lg">CARD DETAILS</h2>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {loading ? (
                  <>
                    <Skeleton className="h-10 rounded-md w-full sm:w-1/2" />
                    <Skeleton className="h-10 rounded-md w-full sm:w-1/2" />
                  </>
                ) : (
                  <>
                    <input type="email" placeholder="Email" className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm" />
                    <input type="text" placeholder="Name on Card" className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm" />
                  </>
                )}
              </div>

              {loading ? (
                <Skeleton className="h-10 rounded-md w-full" />
              ) : (
                <>
                  <input type="text" placeholder="Card Number" className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm" />
                  <p className="text-xs text-[#00aff0] px-1">My card number is longer</p>
                </>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {loading ? (
                  <>
                    <Skeleton className="h-10 rounded-md w-full sm:w-1/2" />
                    <Skeleton className="h-10 rounded-md w-full sm:w-1/2" />
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Expiry Date (MM/YY)" className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm" />
                    <input type="text" placeholder="CVV" className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm" />
                  </>
                )}
              </div>
            </div>

            {/* Confirmation */}
            <div className="flex items-start gap-2 px-1">
              {loading ? (
                <>
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 w-60" />
                </>
              ) : (
                <>
                  <input type="checkbox" className="mt-1 h-4 w-4" />
                  <label className="text-sm text-gray-700 leading-tight">
                    Tick here to confirm that you are at least 18 years old and the age
                    <span className="block">of majority in your place of residence.</span>
                  </label>
                </>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              {loading ? (
                <Skeleton className="h-11 w-28 rounded-md" />
              ) : (
                <button type="submit" className="bg-[#00aff0] text-white font-medium rounded-md h-11 px-6 hover:bg-[#0095cc] transition mb-15">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
