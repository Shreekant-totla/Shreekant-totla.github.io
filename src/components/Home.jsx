import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Resume from "../assets/resume.pdf";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div id="home" name="home" className="w-full  h-screen  bg-transparent ">
      {/* Container */}
      <div
        id="user-detail-intro"
        className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p style={{color:"#E55807"}} >Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          SHREEKANT-TOTLA
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
        <div>
          <Link to="work" smooth={true} duration={1000}>
            <button style={{border:"2px dashed white"}} className="text-white group  px-6 py-3 my-2 flex items-center hover:bg-red-600 hover: border-red-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
