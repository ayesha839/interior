import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header
      className=" text-white fixed z-50 justify-between items-center pt-[15px] pr-[2.5%] pb-[15px] pl-[2.5%] flex top-0 bottom-auto left-0 right-0 overflow-hidden"
      style={{
        background: "linear-gradient(rgba(15, 15, 15, 0.7), rgba(0, 0, 0, 0))",
      }}
    >
      <div className="hidden lg:flex space-x-8 tracking-widest">
        <Link href="#" className="relative hover-underline">
          PROJECTS
        </Link>
        <Link href="#" className="relative hover-underline">
          CONTACT
        </Link>
      </div>
      <div className="text-center flex flex-col justify-center">
        <h1 className="text-4xl tracking-widest font-light">UBBS</h1>
        <p className="text-xs tracking-widest">LONDON</p>
      </div>
      <div className="space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          fill="white"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Navbar;
