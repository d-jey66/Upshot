import React from 'react';
import '../index.css';

const StyleGuide = () => {

  return (
    <div className='ml-[-7%] lg:ml-[18%]'>
      <h1 className="text-[50px] ml-20">Color</h1>
      <div className="flex flex-col pb-20 pl-20">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <h2>#0284c7</h2>
            <div className="w-auto bg-sky-600 h-[8rem] rounded-bl-[25px] rounded-tr-[25px] lg:w-[25rem] mr-12 lg:mr-0"></div>
          </div>
          <div className="flex flex-col lg:ml-10 mt-5 lg:mt-0">
            <h2>#3C2B4A</h2>
            <div className="w-auto bg-[#3C2B4A] h-[8rem] rounded-tl-[25px] rounded-br-[25px] lg:w-[15rem] mr-12 lg:mr-0"></div>
          </div>
          <div className="lg:ml-10 mt-5 lg:mt-0">
            <h2>#5F5F5F</h2>
            <div className="w-auto bg-[#5F5F5F] h-[8rem] rounded-bl-[25px] rounded-tr-[25px] lg:w-[15rem] mr-12 lg:mr-0"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5 lg:mt-0">
          <div className="flex flex-col">
            <h2>#E7F4F5</h2>
            <div className="w-auto bg-[#E7F4F5] h-[8rem] rounded-bl-[25px] rounded-tr-[25px] lg:w-[15rem] mr-12 lg:mr-0"></div>
          </div>
          <div className="flex flex-col lg:ml-10 mt-5 lg:mt-0">
            <h2>#FFD7D7</h2>
            <div className="w-auto bg-[#FFD7D7] h-[8rem] rounded-tl-[25px] rounded-br-[25px] lg:w-[15rem] mr-12 lg:mr-0"></div>
          </div>
          <div className="flex flex-col lg:ml-10 mt-5 lg:mt-0">
            <h2>#FFF8F3</h2>
            <div className="w-auto bg-[#FFF8F3] h-[8rem] rounded-bl-[25px] rounded-tr-[25px] lg:w-[25rem] mr-12 lg:mr-0"></div>
          </div>
        </div>
      </div>

      <h1 className='text-[50px] min-[425px]:ml-[180px] md:ml-[270px] lg:ml-20'>Text</h1>
      <section className="p-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-center items-center ml-14 2xl:ml-[10px]">
            <div className="bg-[#fff8f3] text-black p-4 rounded shadow max-w-md ml-[-25px] mx-auto text-[20px] sm:ml-5 ml-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu elit blandit nulla efficitur lobortis sed eget nisl. Aenean laoreet tortor ligula, eget malesuada mauris accumsan vitae. Cras maximus lacus porta lectus fringilla scelerisque. Quisque et purus ut felis convallis porttitor nec nec tortor. Nam accumsan, dui non porta euismod.
            </div>
            <div className="bg-[#fff8f3] text-black p-4 rounded shadow ml-[-25px] max-w-md mx-auto text-[20px] sm:ml-[-200px] md:ml-[250px] 2xl:ml-[-125px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu elit blandit nulla efficitur lobortis sed eget nisl. Aenean laoreet tortor ligula, eget malesuada mauris accumsan vitae. Cras maximus lacus porta lectus fringilla scelerisque. Quisque et purus ut felis convallis porttitor nec nec tortor. Nam accumsan, dui non porta euismod.
            </div>
          </div>
        </div>
      </section>

      <h1 className='two'>Buttons</h1>
      <div className="flex flex-col items-center space-y-6 ml-[20px] lg:ml-[-920px] py-5">
        <div className="flex space-x-4">
          <button className="px-8 py-3 text-[#3C2B4A] border border-[#3C2B4A] rounded-full bg-white hover:bg-[#3C2B4A] hover:text-white transition duration-300">
            Button text
          </button>
          <button className="px-8 py-3 text-[#3C2B4A] border border-[#3C2B4A] rounded-full bg-white hover:bg-[#3C2B4A] hover:text-white transition duration-300">
            Button text
          </button>
        </div>

        <div className="flex space-x-4">
          <button className="px-8 py-3 text-white bg-[#3C2B4A] border border-[#3C2B4A] rounded-full hover:bg-white hover:text-[#3C2B4A] transition duration-300">
            Button text
          </button>
          <button className="px-8 py-3 text-white bg-[#3C2B4A] border border-[#3C2B4A] rounded-full hover:bg-white hover:text-[#3C2B4A] transition duration-300">
            Button text
          </button>
        </div>

        <div className="flex space-x-4">
          <button className="px-8 py-3 text-white bg-blue-500 border border-blue-500 rounded-full hover:bg-white hover:text-blue-500 transition duration-300">
            Button text
          </button>
          <button className="px-8 py-3 text-white bg-blue-500 border border-blue-500 rounded-full hover:bg-white hover:text-blue-500 transition duration-300">
            Button text
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;