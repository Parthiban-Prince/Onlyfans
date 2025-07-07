import React from 'react';
import X from '../../assets/Icons_Images/x.png';
import Google from '../../assets/Icons_Images/google.png';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col sm:flex-row flex-wrap justify-evenly border-t border-gray-300 bg-white shadow-sm p-6 text-sm text-[#8A96A3]">
      
      {/* Column 1: Branding & Social */}
      <div className="flex flex-col items-center gap-3 mb-6 sm:mb-0">
        <h6>© {year} OnlyFans</h6>
        <h6 className="cursor-pointer hover:text-black">Contact</h6>
        <div className="flex gap-4">
          <img src={X} alt="Twitter/X" className="bg-black w-8 h-8 p-1 rounded-full cursor-pointer" />
          <img src={Google} alt="Google" className="w-8 h-8 p-1 rounded-full cursor-pointer" />
        </div>
        <h6 className="cursor-pointer hover:text-black">English</h6>
      </div>

      {/* Column 2: Links */}
      <div className="flex flex-col items-center gap-1 mb-6 sm:mb-0">
        <ul className="space-y-1 text-center">
          <li className="cursor-pointer hover:text-black">Help</li>
          <li className="cursor-pointer hover:text-black">Store</li>
          <li className="cursor-pointer hover:text-black">Cookie Notice</li>
          <li className="cursor-pointer hover:text-black">OnlyFans Safety & Transparency Center</li>
        </ul>
      </div>

      {/* Column 3: Policies */}
      <div className="flex flex-col items-center gap-1 mb-6 sm:mb-0">
        <ul className="space-y-1 text-center">
          <li className="cursor-pointer hover:text-black">Blog</li>
          <li className="cursor-pointer hover:text-black">Privacy</li>
          <li className="cursor-pointer hover:text-black">USC 2257</li>
          <li className="cursor-pointer hover:text-black">Acceptable Use Policy</li>
        </ul>
      </div>

      {/* Column 4: Legal & Brand */}
      <div className="flex flex-col items-center gap-1">
        <ul className="space-y-1 text-center">
          <li className="cursor-pointer hover:text-black">Branding</li>
          <li className="cursor-pointer hover:text-black">Complaints</li>
          <li className="cursor-pointer hover:text-black">Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
