import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import AntDesign from "../assets/antdesign.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Typescript from "../assets/typescript.png";
import ChakraUi from "../assets/chakraUi.jfif";
import Redux from "../assets/projects/tech/redux.png";

const Skills = () => {
  return (
    <div
      id="skills"
      name="skills"
      className="w-full  md:h-screen xs:pt-20 sm:pt-10 bg-[#030519] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4 skills-card-name">HTML</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={CSS}
              alt="CSS icon"
            />
            <p className="my-4 skills-card-name">CSS</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT icon"
            />
            <p className="my-4 skills-card-name">JAVASCRIPT</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="w-30 h-20 mx-auto relative">
              <img
                src={Typescript}
                className="skills-card-img w-[100px] h-[100px] mx-auto absolute md:left-10 sx:left-12 xs:-top-3 lg:left-16 xs:left-8"
                alt="TYPESCRIPT icon"
              />
            </div>
            <p className="my-4 skills-card-name">TYPESCRIPT</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={ReactImg}
              alt="REACT JS icon"
            />
            <p className="my-4 skills-card-name">REACT</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={Redux}
              alt="REDUX icon"
            />
            <p className="my-4 skills-card-name">REDUX</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={GitHub}
              alt="GITHUB icon"
            />
            <p className="my-4 skills-card-name">GITHUB</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={Node}
              alt="NODE JS icon"
            />
            <p className="my-4 skills-card-name">NODE JS</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={Mongo}
              alt="MONGO DB icon"
            />
            <p className="my-4 skills-card-name">MONGO DB</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={Tailwind}
              alt="TAILWIND icon"
            />
            <p className="my-4 skills-card-name">TAILWIND</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={ChakraUi}
              alt="CHAKRAUI icon"
            />
            <p className="my-4 skills-card-name">CHAKRAUI</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={AntDesign}
              alt="ANTDESIGN icon"
            />
            <p className="my-4 skills-card-name">ANT DESIGN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
