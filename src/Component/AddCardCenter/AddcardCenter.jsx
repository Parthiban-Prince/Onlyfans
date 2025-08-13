import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({ width, height, className }) => (
  <Skeleton width={width} height={height} className={className} />
);

export default function AddcardCenter() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    address: "",
    city: "",
    email: "",
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    isAdultConfirmed: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submission logic here
    if (!formData.isAdultConfirmed) {
      alert("Please confirm that you are at least 18 years old.");
      return;
    }
    console.log("Form submitted", formData);
  };

  return (
    <section className="flex flex-col border-x border-gray-300 min-h-screen px-4 sm:px-6 bg-white">
      <div className="w-full md:w-[400px] mx-auto relative">
        {/* Header */}
        <header className="flex justify-between items-center py-3 border-b border-gray-300 h-[56px] sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <Link to="/my/:username" aria-label="Go back">
              <IoArrowBackOutline className="w-6 h-6" />
            </Link>
            {loading ? (
              <LoadingSkeleton width={112} height={24} />
            ) : (
              <h1 className="text-lg sm:text-xl font-bold">ADD CARD</h1>
            )}
          </div>
          {loading ? (
            <LoadingSkeleton width={64} height={20} />
          ) : (
            <div className="text-[#00aff0] font-semibold text-sm sm:text-base">VERIFY</div>
          )}
        </header>

        {/* Form */}
        <div className="flex flex-col gap-6 py-6">
          <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit} noValidate>
            {/* Billing Section */}
            <fieldset className="flex flex-col gap-3 border-0 p-0">
              {loading ? (
                <LoadingSkeleton width={160} height={20} />
              ) : (
                <legend className="font-bold text-base sm:text-lg">BILLING DETAILS</legend>
              )}
              {loading ? (
                <LoadingSkeleton count={2} height={16} width="100%" />
              ) : (
                <p className="text-sm text-gray-600">
                  We are fully compliant with Payment Card Industry Data Security Standards.
                </p>
              )}

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {loading ? (
                    <>
                      <LoadingSkeleton height={40} width="100%" className="rounded-md sm:w-1/2" />
                      <LoadingSkeleton height={40} width="100%" className="rounded-md sm:w-1/2" />
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Country"
                        autoComplete="country-name"
                        className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="State/Province"
                        autoComplete="address-level1"
                        className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </>
                  )}
                </div>
                {loading ? (
                  <>
                    <LoadingSkeleton height={40} width="100%" className="rounded-md" />
                    <LoadingSkeleton height={40} width="100%" className="rounded-md" />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                      autoComplete="street-address"
                      className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      autoComplete="address-level2"
                      className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </>
                )}
              </div>
            </fieldset>

            {/* Card Section */}
            <fieldset className="flex flex-col gap-4 border-0 p-0">
              {loading ? (
                <LoadingSkeleton width={160} height={20} />
              ) : (
                <legend className="font-bold text-base sm:text-lg">CARD DETAILS</legend>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {loading ? (
                  <>
                    <LoadingSkeleton height={40} width="100%" className="rounded-md sm:w-1/2" />
                    <LoadingSkeleton height={40} width="100%" className="rounded-md sm:w-1/2" />
                  </>
                ) : (
                  <>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      autoComplete="email"
                      className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="nameOnCard"
                      id="nameOnCard"
                      placeholder="Name on Card"
                      autoComplete="cc-name"
                      className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                      value={formData.nameOnCard}
                      onChange={handleChange}
                      required
                    />
                  </>
                )}
              </div>

              {loading ? (
                <LoadingSkeleton height={40} width="100%" className="rounded-md" />
              ) : (
                <>
                  <input
                    type="text"
                    inputMode="numeric"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="Card Number"
                    autoComplete="cc-number"
                    className="w-full h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"
                    maxLength={19} // for spaced card numbers if you want
                  />
                  <p className="text-xs text-[#00aff0] px-1">My card number is longer</p>
                </>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {loading ? (
                  <>
                    <LoadingSkeleton height={40} width="100%" className="rounded-md sm:w-1/2" />
                    <LoadingSkeleton height={40} width="100%" className="rounded-md sm:w-1/2" />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      name="expiryDate"
                      id="expiryDate"
                      placeholder="Expiry Date (MM/YY)"
                      autoComplete="cc-exp"
                      className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                      title="Expiry date should be in MM/YY format"
                    />
                    <input
                      type="text"
                      name="cvv"
                      id="cvv"
                      placeholder="CVV"
                      autoComplete="cc-csc"
                      className="w-full sm:w-1/2 h-10 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      pattern="\d{3,4}"
                      maxLength={4}
                      title="CVV must be 3 or 4 digits"
                    />
                  </>
                )}
              </div>
            </fieldset>

            {/* Confirmation */}
            <div className="flex items-start gap-2 px-1">
              {loading ? (
                <>
                  <LoadingSkeleton height={16} width={16} className="rounded" />
                  <LoadingSkeleton height={16} width={240} />
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    id="isAdultConfirmed"
                    name="isAdultConfirmed"
                    className="mt-1 h-4 w-4 focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
                    checked={formData.isAdultConfirmed}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="isAdultConfirmed"
                    className="text-sm text-gray-700 leading-tight cursor-pointer"
                  >
                    Tick here to confirm that you are at least 18 years old and the age
                    <span className="block">of majority in your place of residence.</span>
                  </label>
                </>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              {loading ? (
                <LoadingSkeleton height={44} width={112} className="rounded-md" />
              ) : (
                <button
                  type="submit"
                  className="bg-[#00aff0] text-white font-medium rounded-md h-11 px-6 hover:bg-[#0095cc] transition mb-15 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.isAdultConfirmed}
                >
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
