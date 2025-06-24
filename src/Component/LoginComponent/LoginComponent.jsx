import React, { useState } from 'react'
import Bluelogo from '../../assets/images/OnlyFans_Logo_Full_White.png'
import X from '../../assets/Icons_Images/x.png'
import Google from '../../assets/Icons_Images/google.png'
import finger from '../../assets/Icons_Images/fingerIcon.png'
import '../LoginComponent/LoginCompontent.css'
import Login from '../../hooks/Login'
import User from '../../hooks/createUser'
import Forgot from '../../hooks/forgotPassword'

function LoginComponent() {

    const {email,setEmail,password,setPassword,handleclick}=Login()

    const {name,setName,Email,setemail,Password,setpassword,createUser}=User()

    const {foremail,setForEmail,forgot} = Forgot()


    const [sign,setSignup] = useState(false)

    const [forgotOpen,forgotClose] = useState(false)

    function signup(){
        setSignup(true)
    }

    function forgotPassword(){
        document.body.style.overflow = "hidden"
        forgotClose(true)
    }

    function Close(){
        document.body.style.overflow ="auto"
        forgotClose(false)
    }




  return (
    <section className=' w-full h-[719px] flex shadow-black shadow-2xs '  >
        <div className='bg-[#00AEEF] p-23.5 flex-1/2 w-1/2 relative' id='Logo-Content-Background' >
        <div className='flex justify-end'>
                        <div className='flex flex-col h-[525px] w-fit '>
                <div className='flex flex-col '>
                                   <img src={Bluelogo} alt='Brand-Full-Blue_logo' className='max-w-56.3 w-[225px] h-[40px] object-contain'/>
                                                   <h1 className='text-[2rem] text-white py-5'>Sign up to support your
                    <span className='block'>favorite creators</span>
                </h1>
                </div>
            </div>
        </div>
        </div>
        <div className='flex w-1/2 flex-col justify-center items-center'>
            <div className='flex flex-col w-1/2 justify-center h-[509px]] gap-5'>
                <div >
                    {!sign ? (

                     <h6 className='py-2' >Log in</h6>

                    )
                    :
                    (
                                           <h6 className='py-2'  >Create a Account</h6>

                    )

                    }
                    <form className='flex flex-col gap-5' onSubmit={(e)=>{
                        e.preventDefault()
                        sign ? createUser : handleclick
                    }}>
                        {sign ? (
                            <>
                                                        <input type='text' name='name' placeholder='Name' className='border-[1px] border-gray-300 rounded-[3px] px-5 h-10 my-1' value={name} onChange={(e)=>setName(e.target.value)} id="Signup"/>
                                                    <input type='email' name='Email' placeholder='Email' className='border-[1px] border-gray-300 rounded-[3px] px-5 h-10 my-1' value={Email} onChange={(e)=>setemail(e.target.value)}/>
                        <input type='password' name='Password' placeholder='Password' className='border-[1px] border-gray-300 rounded-[3px] px-5 h-10 my-1'value={Password} onChange={(e)=>setpassword(e.target.value)}/>
                                                                            <button className='border-[1px] rounded-full border-gray-300 bg-[#DCE0E4] h-10 text-white font-bold' onClick={createUser}>SIGN UP</button>
                            </>

                        )
                        :(
                            <>
                                                    <input type='email' name='Email' placeholder='Email' className='border-[1px] border-gray-300 rounded-[3px] px-5 h-10 my-1' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type='password' name='Password' placeholder='Password' className='border-[1px] border-gray-300 rounded-[3px] px-5 h-10 my-1'value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                                                            <button className='border-[1px] rounded-full border-gray-300 bg-[#DCE0E4] h-10 text-white font-bold' onClick={handleclick}>LOG IN</button>
                            </>
                        )
                        }
                    </form>
                 </div>
                <div>
                    <p>
                        By logging in and using OnlyFans, you agree to our
                        <span className='text-[#00aff0]'>Terms of Service</span> and 
                        <span className='text-[#00aff0] ' > Privacy Policy</span>, and confirm that you are at least 18 years old. 
                    </p>
                </div>
            </div>
            <div className='flex gap-10 my-4 text-[#00aff0]'>
                {sign  ? (
                    <h6 className='text-black'>Already have an account? <span  className="text-[#00aff0] px-4" onClick={()=>setSignup(false)} >Log in</span></h6>
                )
                :
                (
                    <>
                                                        <h6  onClick={forgotPassword} >Forgot Password?</h6>
                <h6 onClick={signup}>Sign up for Onlyfans</h6>
                    </>
                )

                }

            </div>
            <div className='flex flex-col gap-4 w-[inherit] text-white'>
                      <button className='bg-[#00aff0] px-5 border-none rounded-full h-10 flex items-center gap-4' >
                                                <img src={X} alt='X-sign-in' className='h-[24px] w-[24px] object-contain '/>
                    SIGN IN WITH X
                </button>
                <button className='bg-[#00aff0] px-5 border-none rounded-full h-10 flex items-center gap-4' >
                    <img src={Google} alt='Google-sign-in ' className='h-[24px] w-[24px] object-contain'/>
                    SIGN IN WITH GOOGLE
                </button>
                <button className='bg-[#00aff0] px-5 border-none rounded-full h-10 flex  items-center gap-4'>
                       <img src={finger} alt='Password-sign-in' className='h-[24px] w-[24px] object-contain'/>
                    PASSWORDLESS SIGN IN
                </button>
            </div>
        </div>
        {forgotOpen &&

            <div className='bg-white shadow-2xl shadow-dark-600 w-[500px] z h-70 absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 rounded-[10px] bg-blend-color p-5'>
                <div className='font-bold mb-10'>
                    <h1>RESTORE ACCESS</h1>
                </div>
                <div className='flex flex-col justify-center'>
                    <p>
                        If you have an OnlyFans account, you will receive a password reset link to this e-mail.
                    </p>
                                    <form>
                    <input autoFocus type='email' name='Email' placeholder='Email' className='my-5 w-full border-[1px] border-gray-300 h-[40px] rounded-[5px] px-5' value={foremail} onChange={(e)=>setForEmail(e.target.value)}/>
                </form>
                </div>
                <div className='flex justify-end gap-10 px-10'>
                                    <button onClick={Close}>Close</button>
                <button onClick={forgot}>Send</button>
                </div>

            </div>
        }
    </section>
  )
}

export default LoginComponent