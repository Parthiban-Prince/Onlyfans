import React from 'react';
import Poll from '../../assets/Icons_Images/icons8-poll-horizontal-48.png';
import UploadImage from '../../assets/Icons_Images/icons8-image-24.png';
import Text from '../../assets/Icons_Images/icons8-font-size-16.png';
import Quiz from '../../assets/Icons_Images/icons8-ask-question-16.png';
import { Link } from 'react-router-dom';

function Postcenter() {
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
            Post
          </div>
        </div>

        {/* Post Input */}
        <div className="px-4 pt-4">
          <form>
            <textarea
              placeholder="Compose New Post..."
              rows={4}
              className="w-full border border-gray-300 text-sm px-3 py-2 resize-none outline-none rounded-md"
            />
          </form>
        </div>

        {/* Media Options */}
        <div className="flex items-center gap-6 px-4 py-4 border-t border-b border-gray-300 mt-4 rounded-md">
          <img src={UploadImage} alt="Upload" className="w-6 h-6 object-contain rounded-md hover:scale-105 transition" />
          <img src={Poll} alt="Poll" className="w-6 h-6 object-contain rounded-md hover:scale-105 transition" />
          <img src={Quiz} alt="Quiz" className="w-6 h-6 object-contain rounded-md hover:scale-105 transition" />
          <img src={Text} alt="Text" className="w-6 h-6 object-contain rounded-md hover:scale-105 transition" />
        </div>
      </div>
    </section>
  );
}

export default Postcenter;
