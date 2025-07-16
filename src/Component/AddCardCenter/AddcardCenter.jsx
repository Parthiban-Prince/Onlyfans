import React from 'react';
import { Link } from 'react-router-dom';

function AddcardCenter() {
  return (
    <section className="flex flex-col border-x border-gray-300 h-dvh">
      <div className="w-full max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300 h-[56px] sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <span className="text-[28px] font-bold cursor-pointer">&larr;</span>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold">ADD CARD</h1>
          </div>
          <div className="text-[#00aff0] font-semibold text-sm sm:text-base">
            VERIFY
          </div>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-6 px-4 sm:px-6 py-6">
          <form className="flex flex-col gap-8 w-full">
            {/* Billing Details */}
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-base sm:text-lg">BILLING DETAILS</h2>
              <p className="text-sm text-gray-600">
                We are fully compliant with Payment Card Industry Data Security Standards.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="State/Province"
                    className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
            </div>

            {/* Card Details */}
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-base sm:text-lg">CARD DETAILS</h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>

              <input
                type="text"
                placeholder="Card Number"
                className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm"
              />
              <p className="text-xs text-[#00aff0] px-1">My card number is longer</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-start gap-2 px-1">
              <input type="checkbox" className="mt-1 h-4 w-4" />
              <label className="text-sm text-gray-700 leading-tight">
                Tick here to confirm that you are at least 18 years old and the age
                <span className="block">of majority in your place of residence.</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#00aff0] text-white font-medium rounded-md h-11 px-6 hover:bg-[#0095cc] transition mb-15" 
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddcardCenter;
