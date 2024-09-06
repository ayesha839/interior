import Link from "next/link";
import React from "react";

const NavPage = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#C7B3A6] text-white px-8 py-12 md:py-20 transform transition-transform duration-500 ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-end mb-4">
        <button onClick={onClose} className="text-white text-xl">
          &times;
        </button>
      </div>
      <div className="flex flex-col space-y-6 text-3xl md:text-5xl font-light">
        <Link href="/" className="hover:text-gray-400" onClick={onClose}>
          HOME
        </Link>
        <Link href="/services" className="hover:text-gray-400" onClick={onClose}>
          SERVICES
        </Link>
        <Link href="/projects" className="hover:text-gray-400" onClick={onClose}>
          PROJECTS
        </Link>
        <Link href="/about" className="hover:text-gray-400" onClick={onClose}>
          ABOUT
        </Link>
        <Link href="/news" className="hover:text-gray-400" onClick={onClose}>
          NEWS
        </Link>
        <Link href="/contact" className="hover:text-gray-400" onClick={onClose}>
          CONTACT
        </Link>
      </div>

      <div className="flex flex-col space-y-4 text-sm mt-12">
        <p className="font-semibold">CONTACT DETAILS</p>
        <p>
          EMAIL ADDRESS —{" "}
          <Link href="mailto:info@ubbs.uk" className="hover:underline">
            INFO@UBBS.UK
          </Link>
        </p>
      </div>

      <div className="flex space-x-4 mt-12 justify-center md:justify-start">
        <Link href="#" className="text-white hover:text-gray-400">
          <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-white hover:text-gray-400">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-white hover:text-gray-400">
          <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-white hover:text-gray-400">
          <img src="/icons/pinterest.svg" alt="Pinterest" className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default NavPage;
