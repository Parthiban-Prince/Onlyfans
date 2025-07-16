import React from 'react';
import search from '../../assets/Icons_Images/icons8-search-50.png';
import plus from '../../assets/Icons_Images/icons8-plus-24.png';
import { Link } from 'react-router-dom';


function MessageRight() {
  return (
    <section className="flex relative border-x border-gray-300 bg-white h-dvh">
      <div className="w-full md:w-[632px] h-full overflow-y-auto">
        {/* Header */}
        <div className="fixed top-0 z-10 flex justify-between items-center p-4 border-b border-gray-300 bg-white w-[inherit]">
          <div className="flex items-center gap-3">
            <Link to="/Dashboard">
              <span className="text-[30px] font-light hover:text-blue-500 transition">&larr;</span>
            </Link>
            <h1 className="text-lg font-semibold">Messages</h1>
          </div>
          <div className="flex items-center gap-4">
            <img src={search} alt="Search" className="w-5 h-5 cursor-pointer" />
            <img src={plus} alt="New" className="w-6 h-6 cursor-pointer hover:brightness-75" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default MessageRight;
