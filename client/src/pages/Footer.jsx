import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" items-center text-center gap-15   pt-12 text-slate-100 bg-black  h-[760px] sm:h-[360px]">
      <div className="mx-[1px] sm:mx-[200px]  sm:gap-1 flex mb-[70px]  flex-row  justify-between ">
        <div className="ml-[9px] sm:ml-[1px]">
          <h1 className="text-lg font-semibold mb-1 text-left">Renzaki Estate</h1>
          <div className="flex text-left flex-col gap-3">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/search"}>Search</Link>
          </div>
        </div>
        <div className="">
          <h1 className="text-lg font-semibold text-left mb-1">Contact </h1>
          <ul className="text-left flex flex-col gap-1 ">
            <li className="">9898989898</li>
            <li>estateeg@gmail.com</li>
          </ul>
        </div>
        <div className="ml-[17px] sm:ml-1">
          <h1 className="text-lg text-left font-semibold mb-1">Company</h1>
          <ul className="text-left flex flex-col gap-2">
            <li>Terms & Conditons</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-lg text-right font-semibold mb-1">
            Get In Touch
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 ml-[70px] sm:ml-[1px] sm:text-right cursor-pointer ">
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
