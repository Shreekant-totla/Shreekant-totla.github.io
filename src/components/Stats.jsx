import React from "react";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <div className="max-w-[1000px] mx-auto  p-4 w-full h-screen xs:h-full xs:pt-[100px] md:pt-[200px] lg:pt-40 lg:pb-40 xl:pt-0 bg-[#030519] lg:flex flex-col justify-center items-center ">
      <div className="flex xs:gap-16 xs:flex-col md:flex-row md:gap-6">
        <div
        // src="https://github-readme-streak-stats.herokuapp.com/?user=Shreekant-totla&"

        // src="https://streak-stats.demolab.com?user=Shreekant-totla&theme=nord"
        >
          <a href="https://github.com/Shreekant-totla">
            <img
              id="github-streak-stats"
              className="w-[100%] "
              // src="https://github-readme-streak-stats.herokuapp.com/?user=Shreekant-totla&" //UNCOMMENT
              alt="GaganBN"
              src="https://streak-stats.demolab.com?user=Shreekant-totla&theme=nord" //COMMENT THIS
            />
          </a>
        </div>
        <div src="shreekant-totla/github-readme-stats.vercel.app/api">
          <picture
            // id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api?username=Shreekant-totla&show_icons=true&theme=nord"
          >
            <source
              srcSet="https://github-readme-stats.vercel.app/api?username=Shreekant-totla&show_icons=true&theme=nord"
              media="(prefers-color-scheme: transparent)"
            />

            <img
              // id="github-stats-card"
              id="github-top-langs"
              className="w-[100%]"
              // src="https://github-readme-stats.vercel.app/api/top-langs?username=Shreekant-totla&show_icons=true&locale=en&layout=compact" //UNCOMMENT THIS
              alt="top_languages"
              src="https://github-readme-stats.vercel.app/api?username=Shreekant-totla&show_icons=true&theme=nord" //COMMENT THIS
            />
          </picture>
        </div>
        {/* UNCOMMENT BELOW */}
        {/* <div>
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Shreekant-totla&show_icons=true&locale=en"
            alt="GaganBN"
          />
        </div> */}
      </div>

      <div>
        <GitHubCalendar
          className="react-activity-calendar"
          style={{
            color: "white",
            marginTop: "4rem",
            padding: "0 1rem 0 1rem",
          }}
          year={"last"}
          showWeekdayLabels={true}
          hideColorLegend
          hideTotalCount
          username="Shreekant-totla"
        />
      </div>

      <div className="mt-16">
        <a href="http://www.github.com/Shreekant-totla">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Shreekant-totla&bg_color=000000&color=0aa4b8&line=eac510&point=ce1c1c&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph"
            alt="GitHub Commits Graph"
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
