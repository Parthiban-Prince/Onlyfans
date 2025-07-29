import React, { useState, useRef } from 'react';
import { data, useNavigate } from 'react-router-dom';
import Bluelogo from '../../assets/images/Text_with_Bluelogo.png';
import white from '../../assets/images/OnlyFans_Logo_Full_White.png';
import '../LoginComponent/LoginCompontent.css';
import { api } from '../../api/api';
import {IoFingerPrintOutline, IoLogoGoogle, IoLogoTwitter} from 'react-icons/io5'

function LoginComponent() {
  const [sign, setSignup] = useState(false);
  const [forgotOpen, forgotClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function signup() {
    setSignup(true);
    setErrorMessage('');
  }

  function forgotPassword() {
    document.body.style.overflow = 'hidden';
    forgotClose(true);
  }

  function Close() {
    document.body.style.overflow = 'auto';
    forgotClose(false);
  }

  async function handleAuth() {
    setLoading(true);
    setErrorMessage('');

    const userEmail = email.current?.value?.toLowerCase();
    const userPassword = password.current?.value;
    const userName = name.current?.value?.toLowerCase();

    try {
      const response = await fetch(
        sign
          ? `${api}/api/auth/Signup`
          : `${api}/api/auth/Signin`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            sign
              ? { email: userEmail, password: userPassword, name: userName }
              : { email: userEmail, password: userPassword }
          ),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        setErrorMessage(data?.message || 'Invalid credentials')
        return;
      }

      if (sign) {
        setSignup(false);
        setErrorMessage('Signup successful. Please login.');
      } else {
        if (data.data) {
          localStorage.setItem('token', data.data);
          navigate(`my/:username`);
        }
      }
    } catch (error) {
      setErrorMessage(data?.message || 'An error occurred. Please try again.'+error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full xs:px-5 s:px-7 sm:px-0 shadow-sm">
      <div className="sm:flex sm:w-full sm:h-[665px]">
        {/* Left Panel */}
        <div className="sm:flex sm:flex-col relative sm:py-[70px] sm:px-5 sm:bg-[#00affe] sm:w-1/2">
          <div className="sm:h-full sm:flex sm:flex-col sm:items-end">
            <img src={Bluelogo} alt="Brand-Full-Blue_logo" className="w-[225px] h-[48px] block sm:hidden" />
            <img src={white} alt="Brand-Full-White_logo" className="w-[225px] h-[48px] hidden sm:block sm:mx-2 md:mr-25" />
            <h1 className="text-[28px] sm:text-white sm:text-[32px] sm:font-semibold mt-4">
              Sign up to support your
              <span className="block">favorite creators</span>
            </h1>
          </div>
        </div>

        {/* Right Panel */}
        <div className="sm:justify-center sm:flex">
          <div className="flex flex-col mt-5 w-full sm:justify-center sm:items-center sm:w-fit">
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <h6 className="text-[14px]">{sign ? 'Create an Account' : 'Log in'}</h6>

              <div className="flex flex-col gap-5">
                {sign && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border border-gray-300 rounded px-5 h-10"
                    ref={name}
                  />
                )}
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="border border-gray-300 rounded px-5 h-10"
                  ref={email}
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className="border border-gray-300 rounded px-5 h-10"
                  ref={password}
                />
                {errorMessage && (
                  <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
                )}
                <button
                  className="rounded-full bg-[#DCE0E4] h-10 text-white font-bold"
                  onClick={handleAuth}
                  disabled={loading}
                >
                  {loading
                    ? sign
                      ? 'Signing Up...'
                      : 'Logging In...'
                    : sign
                    ? 'SIGN UP'
                    : 'LOG IN'}
                </button>
              </div>

              <p className="pt-2 pb-0 px-3 text-[13px] leading-[1.5]">
                By logging in and using OnlyFans, you agree to our
                <span className="text-[#00aff0]"> Terms of Service</span> and
                <span className="text-[#00aff0]"> Privacy Policy</span>, and confirm
                that you are at least 18 years old.
              </p>

              <div className="flex text-[#00aff0] justify-center gap-5 py-6 text-[14px]">
                {sign ? (
                  <h6 className="text-black">
                    Already have an account?
                    <span
                      className="text-[#00aff0] px-2 cursor-pointer"
                      onClick={() => setSignup(false)}
                    >
                      Log in
                    </span>
                  </h6>
                ) : (
                  <>
                    <h6 className="cursor-pointer" onClick={forgotPassword}>
                      Forgot Password?
                    </h6>
                    <h6 className="cursor-pointer" onClick={signup}>
                      Sign up for OnlyFans
                    </h6>
                  </>
                )}
              </div>

              {/* Social */}
              <div className="flex flex-col text-[14px] gap-4 text-white font-semibold">
                <button className="bg-[#00aff0] rounded-full h-10 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <IoLogoTwitter  className="h-[24px] w-[24px]" />
                    <span>SIGN IN WITH X</span>
                  </div>
                </button>

                <button className="bg-[#4285f4] rounded-full h-10 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <IoLogoGoogle  className="h-[24px] w-[24px]" />
                    <span>SIGN IN WITH GOOGLE</span>
                  </div>
                </button>

                <button className="bg-[#00aff0] px-2 rounded-full h-10 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <IoFingerPrintOutline  alt="Passwordless sign-in" className="h-[24px] w-[24px]" />
                    <span>PASSWORDLESS SIGN</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotOpen && (
        <div className="bg-white shadow-2xl w-[90%] sm:w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[10px] p-5 z-50">
          <div className="font-bold mb-6">
            <h1>RESTORE ACCESS</h1>
          </div>
          <div className="flex flex-col justify-center">
            <p>
              If you have an OnlyFans account, you will receive a password reset
              link to this e-mail.
            </p>
            <form>
              <input
                autoFocus
                type="email"
                name="Email"
                placeholder="Email"
                className="my-5 w-full border border-gray-300 h-[40px] rounded px-5"
                ref={email}
              />
            </form>
          </div>
          <div className="flex justify-end gap-6 mt-4">
            <button
              className="text-sm font-medium text-gray-500 hover:text-black"
              onClick={Close}
            >
              Close
            </button>
            <button className="text-sm font-semibold text-[#00aff0] hover:underline">
              Send
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default LoginComponent;
