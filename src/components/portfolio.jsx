import React from "react";
import i1 from "../assets/profile1.png"
import i2 from "../assets/profile2.png"
import i3 from "../assets/profile3.png"

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Web Design 1", image: "/images/project1.jpg" },
    { id: 2, title: "Web Design 2", image: "/images/project2.jpg" },
    { id: 3, title: "Web Design 3", image: "/images/project3.jpg" },
    { id: 4, title: "Web Design 4", image: "/images/project4.jpg" },
  ];

  return (
    <section id="portfolio" className="p-8 bg-[#3C2B4A] text-white">
      <center><h1 className="text-[50px]">Web Design</h1></center>
      <div className="flex flex-col gap-5 lg:px-12 py-8 items-center lg:gap-20">

        <img src={i1} alt="" className="h-auto w-[100%] lg:h-[700px] lg:w-auto" />

        <img src={i2} alt="" className="h-auto w-[100%] lg:h-[700px] lg:w-auto" />

        <img src={i3} alt="" className="h-auto w-[100%] lg:h-[700px] lg:w-auto" />

      </div>
    </section>
  );
};

export default Portfolio;
