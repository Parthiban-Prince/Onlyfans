import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCenterPost from '../Homecenterpost/Homecenterpost';
import HomeImagePost from '../Homecenterpost/HomeImagePost';
import { IoEllipsisVertical,IoImageOutline,IoTextOutline,IoPencilOutline } from 'react-icons/io5';
import { MdOutlinePoll,MdOutlineQuiz } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi2";

function CenterContent() {
  const [orderedPosts, setOrderedPosts] = useState([]);


  useEffect(() => {
    const image = <HomeImagePost key="image" />;
    const center = <HomeCenterPost key="center" />;

    const flip = Math.random() < 0.5;
    const result = flip ? [image, center] : [center, image];

    setOrderedPosts(result);
  }, []);


  return (
    <section className="flex relative  border-l-gray-300 border-b-white border-r-gray-300 border-1 w-full h-dvh md:w-[632px]  bg-white overflow-auto no-scrollbar">
      <div className=" relative w-full h-dvh">
        {/* Header */}
        <div className="flex justify-between items-center p-3 h-[56px] fixed md:w-[632px]  bg-white top-0 w-full z-50">
          <h1 className="text-xl font-bold">Home</h1>
          <IoEllipsisVertical className='w-6 h-6' />
        </div>

        {/* Compose New Post */}
        <div className="w-full z-10 mt-14 shadow-sm shadow-light-900">
          <form className="flex items-center w-full overflow-hidden">
            <Link to="posts/create" className="w-full h-[76px] flex items-center">
              <input
                type="textarea"
                placeholder="Compose New Post..."
                className="w-full h-[76px] px-3"
              />
            </Link>
          </form>

          {/* Icon Row */}
          <div className="flex p-2 object-contain gap-5">
            <Link to='posts/create' ><IoImageOutline  className="w-[30px] h-[30px]" /></Link>
            <MdOutlinePoll className="w-[30px] h-[30px] rotate-90" />
            <MdOutlineQuiz className="w-[30px] h-[30px]" />
            <IoTextOutline className="w-[30px] h-[30px]" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-5 items-center px-5 mt-5 shadow-gray-300 bg-white py-2">
          <h3 className="px-5 text-center rounded-full h-[25px]">All</h3>
          <h3 className="">
            <HiOutlinePencil className="w-[25px] h-[25px]" />
          </h3>
        </div>

        {/* Render One Image + One Center Post in Random Order */}
        <div>{orderedPosts}</div>
      </div>
    </section>
  );
}

export default CenterContent;
