import React, { useRef } from 'react';
import Poll from '../../assets/Icons_Images/icons8-poll-horizontal-48.png';
import UploadImage from '../../assets/Icons_Images/icons8-image-24.png';
import Text from '../../assets/Icons_Images/icons8-font-size-16.png';
import Quiz from '../../assets/Icons_Images/icons8-ask-question-16.png';
import { Link, useNavigate } from 'react-router-dom';

function Postcenter() {


  const navigate = useNavigate()

  const Imageref = useRef(null)
  const caption = useRef(null)

  const  postUpload = async ()=>{

    const image = Imageref.current?.files[0]
    const captions =  caption.current?.value
    

    const formData = new FormData()

    formData.append("image",image)
     formData.append("captions",captions)

     console.log(formData)
   
   



    const response  =  await fetch('https://onlyfans-backend-production.up.railway.app/api/create/Posts',{
      method:"POST",
      headers:{
        'Authorization':`Bearer ${localStorage.getItem("token")}`,
      },
      body:formData
    })

    if(response.status == 200){
      
      alert("succefully Make a Post")
      navigate('/dashboard')

    }else(
    alert("error")
  )
}




  return (
    <section className="flex relative border-l border-r border-gray-400">
      <div className="w-[632px] h-full overflow-y-auto">
        {/* Top Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300 h-[56px] sticky w-full z-10 bg-white top-0 rounded-t-md">
          <div className="flex items-center gap-3">
            <Link to="/Dashboard">
              <h1 className="text-[32px] font-light leading-none">&larr;</h1>
            </Link>
            <h1 className="text-lg font-bold tracking-wide">NEW POST</h1>
          </div>
          <div className="bg-gray-300 px-5 py-1 text-white text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-gray-800 transition duration-200">
            <h1 onClick={postUpload} >POST</h1>
          </div>
        </div>

        {/* Post Input */}
        <div className="px-4 pt-4">
          <form>
            <textarea
              placeholder="Compose New Post..."
              rows={4}
              className="w-full border border-gray-300 text-sm px-3 py-2 resize-none outline-none rounded-md"
              name='captions'
              ref={caption}
            />
          </form>
        </div>

        {/* Media Options */}
        <div className="flex items-center gap-6 px-4 py-4 border-t border-b border-gray-300 mt-4 rounded-md">
          <form >
            <label htmlFor='Image-Upload'>
                        <img src={UploadImage} alt="Upload" className="w-6 h-6 object-contain rounded-md hover:scale-105 transition"/>   
            </label>
            <input type='file' id='Image-Upload' name='image' ref={Imageref} accept='image/*' />
          </form>
          <img src={Poll} alt="Poll" className="w-6 h-6 object-contain rounded-md hover:scale-105 transition" />
          <img src={Quiz} alt="Quiz" className="w-6 h-6 object-contain rounded-md hover:scale-105 transition" />
          <img src={Text} alt="Text" className="w-6 h-6 object-contain rounded-md hover:scale-105 transition" />
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
}

export default Postcenter;
