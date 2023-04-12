import React from "react";
import { diet, blockchain, groceries } from "../assets";
import GetStarted from "./GetStarted";
import Stats from "./Stats";

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col sm:py-8 py-6`}>
    <div
      className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={blockchain} alt='blockchain' className='w-[32px] h-[32px]' />
        <p className='font-poppins font-normal text-[#E1D9D1] text-[18px] leading-[30.8px] ml-2'>
          <span className='text-white'>Utilizando </span>
          la tecnología
          <span className='text-white'> Blockchain</span>
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Cuida tu cuerpo, <br className='sm:block hidden' />{" "}
          <span className='text-gradient'>alimenta tu </span> salud
        </h1>
        <div className='sm:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <p className='font-poppins font-normal text-[#E1D9D1] text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        DietTracker ofrece un servicio de nutrición en línea que sea confiable,
        eficiente y seguro para los usuarios. Utilizando la tecnología
        blockchain para garantizar la privacidad y seguridad del usuario
      </p>
    </div>

    <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
      <img
        src={groceries}
        alt='grocieres'
        className='w-[95%] h-[95%] relative z-[5] left-6 top-5'
      />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 green__gradient'></div>
    </div>

    <div className='sm:hidden flex justify-center items-center p-9'>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
