import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 text-gray-800 px-[2.5%]">
      <div className="flex justify-between items-start mb-10">
        {/* Address and Contact Info */}
        <div className="flex space-x-10">
          <div>
            <h4 className="font-semibold text-lg">Vilnius</h4>
            <div>Kalinauko 24-7</div>
            <div>Vilnius 03107</div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Contact</h4>
            <div>info@ubbs.uk</div>
          </div>
        </div>

        {/* Request a Call Section */}
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg">Request a call</h4>
          <form className="flex items-center space-x-3 mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-gray-300 focus:outline-none p-2 flex-grow"
            />
            <button className="text-black text-center tracking-widest font-extralight uppercase bg-transparent border border-[rgba(181,171,161,0.6)] rounded-full px-5 py-2 text-[0.625rem] leading-tight hover:bg-[#0d0d0d8c]">
              Submit
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-3">
            UBBS London is an architecture and interior design firm based in
            London. <br /> Our services include Architecture, Interior Design,
            Construction, <br /> and Administration and Specification.
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-5 py-5">
        <Link href="#">
          <FaInstagram
            className="text-black border rounded-full border-gray-500 p-[6px] hover:border-white"
            size={30}
          />
        </Link>
        <Link href="#">
          <FaLinkedinIn
            className="text-black border rounded-full border-gray-500 p-[6px] hover:border-white"
            size={30}
          />
        </Link>
        <Link href="#">
          <FaFacebookF
            className="text-black border rounded-full border-gray-500 p-[6px] hover:border-white"
            size={30}
          />
        </Link>
        <Link href="#">
          <FaPinterestP
            className="text-black border rounded-full border-gray-500 p-[6px] hover:border-white"
            size={30}
          />
        </Link>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-10 pt-5 text-gray-500 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex space-x-12">
            <span>&copy; Copyright UBBS London</span>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms and Conditions
            </Link>
          </div>
          <span>Website by Rattlesnake Group</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
