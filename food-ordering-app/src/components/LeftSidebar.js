import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const LeftSidebar = ({ setChoice }) => {
  return (
    <div className="h-[calc(100vh-2rem)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-red-500 hover:text-white hover:cursor-pointer rounded-full'>
        <IoMdHome size="36px" className="ml-2"/>
        <div className="ml-4 text-2xl font-serif tracking-wider hover:text-white">Home</div>
      </Link>
      <Link to="/feed" onClick={() => setChoice('Dine-in')} className='flex items-center my-2 px-4 py-2 hover:bg-red-500 hover:text-white hover:cursor-pointer rounded-full'>
        <IoRestaurantSharp size="36px" className="ml-2"/>
        <div className="ml-4 text-2xl font-serif tracking-wider hover:text-white">Dine-in</div>
      </Link>
      <Link to="/feed" onClick={() => setChoice('Takeaway')} className='flex items-center my-2 px-4 py-2 hover:bg-red-500 hover:text-white hover:cursor-pointer rounded-full'>
        <MdDeliveryDining size="36px" className="ml-2"/>
        <div className="ml-4 text-2xl font-serif tracking-wider hover:text-white">Takeaway</div>
      </Link>
    </div>
  );
};

export default LeftSidebar;
