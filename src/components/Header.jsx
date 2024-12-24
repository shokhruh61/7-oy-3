import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-neutral-700 shadow-lg container mx-auto w-[1280px]  text-white py-4">
      <div className="flex justify-between px-10">
        <Link
          to="/"
          className="w-[130px] h-[40px] flex items-center justify-center rounded-lg transform hover:scale-105 transition-transform duration-300 text-base font-bold bg-green-900"
        >
          Clock
        </Link>
        <Link
          to="/count-timer"
          className="w-[130px] h-[40px] flex items-center justify-center rounded-lg transform hover:scale-105 transition-transform duration-300 text-base font-bold bg-green-900"
        >
          Count Timer
        </Link>
        <Link
          to="/local-time"
          className="w-[130px] h-[40px] flex items-center justify-center rounded-lg transform hover:scale-105 transition-transform duration-300 text-base font-bold bg-green-900"
        >
          Local Time
        </Link>
      </div>
    </div>
  );
}

export default Header;
