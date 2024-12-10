import React from "react";
import i1 from "../assets/profile1.png"
import i2 from "../assets/profile2.png"
import i3 from "../assets/profile3.png"

const Portfolio1 = () => {
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

export default Portfolio1;
