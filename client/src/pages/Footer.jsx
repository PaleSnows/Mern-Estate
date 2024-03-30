import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" items-center text-center gap-15   pt-12 text-slate-100 bg-black  h-[400px] sm:h-[360px]">

      <div className="mx-[1px] sm:mx-[200px]  sm:gap-1 flex mb-[70px]  flex-row  justify-between ">
        <div className="ml-[5px] sm:ml-[1px]">
          <h1 className="text-base sm:text-lg font-semibold mb-1 text-left">Renzaki Estate</h1>
          <div className="flex text-left flex-col gap-3">
            <Link to={"/"} className="text-sm sm:text-base">Home</Link>
            <Link to={"/about"} className="text-sm sm:text-base">About</Link>
            <Link to={"/profile"} className="text-sm sm:text-base">Profile</Link>
            <Link to={"/search"} className="text-sm sm:text-base">Search</Link>
          </div>
        </div>
        <div className="ml-[7px] sm:ml-[1px]">
          <h1 className="text-base sm:text-lg font-semibold text-left mb-1">Contact </h1>
          <ul className="text-left flex flex-col gap-1 ">
            <li className="text-sm sm:text-base">9898989898</li>
            <li className="text-sm sm:text-base">ren@gmail.com</li>
          </ul>
        </div>
        <div className="ml-[17px] sm:ml-1">
          <h1 className="text-base sm:text-lg text-left font-semibold mb-1">Company</h1>
          <ul className="text-left flex flex-col gap-2">
            <li className="text-sm sm:text-base">Terms & Conditons</li>
            <li className="text-sm sm:text-base">Privacy Policy</li>
            <li className="text-sm sm:text-base">Disclaimer</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 mr-[5px] sm:mr-[1px] ">
          <h1 className="text-base sm:text-lg text-right font-semibold mb-1">
            Get In Touch
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 ml-[53px] sm:ml-[1px] sm:text-right cursor-pointer ">
            <FaFacebook  />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
      </div>
      <hr className="text-white ml-[1px] sm:ml-[200px] w-[1160px]" />
      <div className="mt-5">
        <p>Copyright @2024 Renzaki, All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
