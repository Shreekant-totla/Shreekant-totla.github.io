import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsPhone } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Resume from "../assets/resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      id="nav-menu"
      className="fixed w-full h-[80px] flex justify-between items-center z-10 px-4 bg-[#030519] text-gray-300"
    >
      <div className="flex justify-center items-center font-extrabold">
        <img
          src={logo}
          alt="Logo Image"
          className="rounded-full"
          style={{ width: "65px" }}
        />
        <div id="user-detail-name">SHREEKANT - TOTLA</div>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="nav-link home">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-link about">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="nav-link skills">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="nav-link projects">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="nav-link contact">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li id="resume-button-1" className="nav-link resume">
          <a id="resume-link-1" href={Resume} download={"Shreekant-totla-Resume"}>
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#030519] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="nav-link resume py-6 text-4xl">
          <a href={Resume} download={"Shreekant-totla-Resume"}>
            Resume
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] right-0">
        <ul>
          <li style={{borderTopLeftRadius:"15px"}} className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/shreekant-totla-9484811a7"
            >
             <FaLinkedin size={30} />Linkedin 
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Shreekant-totla" 
            >
              <FaGithub size={30} />Github 
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:shreekanttotla3@gmail.com"
            >
              <HiOutlineMail size={30} />Email 
            </a>
          </li>
          <li
            id="resume-button-2"
            className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#565f69]"
          >
            <a
            
              id="resume-button-2"
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              download={"Shreekant-totla-Resume"}
            >
              <BsFillPersonLinesFill size={30} />Resume 
            </a>
          </li>
          <li style={{borderBottomLeftRadius:"15px"}} className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#f87171]">
            <a
              id="resume-button-2"
              className="flex justify-between items-center w-full text-gray-300"
              href="tel:9405809305 / 8668447729"
            >
              <BsPhone size={30} />Call 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
