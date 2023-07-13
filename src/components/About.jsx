import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full xl:h-screen md:h-30   bg-[#030519] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              id="about"
              className="about section text-4xl font-bold inline border-b-4 border-red-600"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Shreekant , nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p id="user-detail-intro">
              Solution-driven web developer with 1200+ hours of
              experience in <b style={{color:"pink"}}>HTML, CSS, JavaScript, ReactJs, TypeScript, Redux, Node Js, Express, MongoDB + Atlas, Chakra UI,
              React-BootStrap, Cypress-testing, Tailwind and Git.</b> Proven ability to work
              independently and as part of a team to deliver high-
              quality results on time. Excellent problem-solving and
              debugging skills. Passionate about web development and
              always looking for new ways to improve the user
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
