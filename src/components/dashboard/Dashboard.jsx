import {
  IoMedicalOutline,
  IoMenu,
  IoAccessibilityOutline,
  IoClose,
  IoNotificationsOutline,
} from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { CiApple, CiLogout, CiSearch } from "react-icons/ci";
import React, { useState } from "react";
import { FaWeight } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import { dietlogoblack } from "../../assets";

function Dashboard() {
  const [Sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!Sidebar);
  };
  return (
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-6 '>
      {/* Sidebar */}
      <div
        className={`fixed   lg:static w-[80%] md:w-[50%] lg:w-full top-0 z-50 bg-white transition-all ${
          Sidebar ? "-left-0" : "-left-full"
        } w-full h-full overflow-y-scroll col-span-1 p-8 border-r`}
      >
        {/* Logo */}
        <div className='text-center p-8 '>
          <img className='object-fit: contain' src={dietlogoblack} alt='logo' />
        </div>

        <div className='flex flex-col justify-between h-[700px]'>
          {/* Menu */}
          <nav>
            <ul>
              <li>
                <a
                  href='@'
                  className='flex items-center gap-4 hover:bg-[#5BB132] py-4 px-5 hover:text-white rounded-lg transition-colors font-semibold '
                >
                  <IoAccessibilityOutline />
                  General
                </a>
              </li>
              <li>
                <a
                  href='@'
                  className='flex items-center gap-4 hover:bg-[#5BB132] py-4 px-5 hover:text-white rounded-lg transition-colors font-semibold'
                >
                  <IoMedicalOutline />
                  Citas
                </a>
              </li>
              <li>
                <a
                  href='@'
                  className='flex items-center gap-4 hover:bg-[#5BB132] py-4 px-5 hover:text-white rounded-lg transition-colors font-semibold'
                >
                  <CiApple />
                  Dietas
                </a>
              </li>
            </ul>
          </nav>
          {/*Logout y img */}
          <div className='flex flex-col gap-4 '>
            <img src='welcome.svg' alt='welcome' />
            {/*Get started */}
            <div className='p-8 flex flex-col gap-4 bg-green-50 rounded-3xl'>
              <h3 className='font-bold text-xl'>Empieza ahora</h3>
              <p>¡Crea tu primera dieta!</p>
              <button className='flex items-center gap-4 hover:bg-[#5BB132] py-4 px-5 hover:text-white rounded-lg transition-colors font-semibold text-center '>
                Empezar
              </button>
            </div>
            <a
              href='@'
              className='flex items-center gap-4 hover:bg-[#5BB132] py-4 px-5 hover:text-white rounded-lg transition-colors font-semibold'
            >
              <CiLogout />
              LogOut
            </a>
          </div>
        </div>
      </div>
      {/* boton menu movil */}
      <button
        onClick={handleSidebar}
        className='block lg:hidden absolute bottom-4 p-2 right-4 bg-[#5BB132] text-white rounded full text-2xl'
      >
        {Sidebar ? <IoClose /> : <IoMenu />}
      </button>
      {/* Content */}
      <div className='col-span-5'>
        {/*Header*/}
        <header className='flex flex-col md:flex-row gap-4 items-center justify-between p-4 lg:pl-12 w-full'>
          {/* Search */}
          <form className=' w-full md:w-[70%] lg:w-[30%] -order-1 md:order-none'>
            <div className='relative'>
              <CiSearch className='absolute left-2 top-3' />
              <input
                type='text'
                className='bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full'
                placeholder='Buscar'
              ></input>
            </div>
          </form>
          {/*Notifi*/}
          <nav className='w-full  md:[60%] lg:w-[70%] flex justify-center md:justify-end'>
            <ul className='flex items-center gap-4'>
              <li>
                <a href='@' className='relative'>
                  <IoNotificationsOutline />
                  <FaCircle className='absolute -right-1 -top-1 text-[8px] text-red-600' />
                </a>
              </li>
              <li>
                <a href='@' className='flex items-center gap-1 font-bold'>
                  Rogelio JS{" "}
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* General */}
        {/* nombre, peso, edad, estatura, genero, Comidas prohibidas, alergias,peso objetivo*/}
        <div className='p-4 lg:p-12 bg-gray-100 '>
          <div>
            <h1 className='text-3xl font-semibold top-1'>General</h1>
            {/* Nombre*/}
            <h2 className='font-semibold gap-10 text-2xl'>¡Hola, Rogelio!</h2>
            {/* Informacion General*/}

            <div>
              <div className='col-span-1 md:col-span-2 flex flex-col justify-between'>
                <h1 className='flex justify-center text-xl font-bold mb-8'>
                  Información General
                </h1>
                <div className='bg-white p-8 rounded-xl shadow-2xl'>
                  {/* Nombre */}
                  <div className='flex items-center gap-4 mb-8'>
                    <BsFillPersonVcardFill className='text-3xl' />
                    <div>
                      <h3 className='font-bold'>Nombre</h3>
                      <p className='text-gray-500'>Rogelio JS Montañez yañez</p>
                    </div>
                  </div>
                  {/* Edad */}
                  <div className='flex items-center gap-4 mb-4'>
                    <FaWeight className='text-3xl' />
                    <div>
                      <h3 className='font-bold'>Edad</h3>
                      <p className='text-gray-500'>20</p>
                    </div>
                  </div>

                  {/* Peso */}
                  <div className='flex items-center gap-4 mb-4'>
                    <FaWeight className='text-3xl' />
                    <div>
                      <h3 className='font-bold'>Peso</h3>
                      <p className='text-gray-500'>50 kg</p>
                    </div>
                  </div>
                  {/* Estatura */}
                  <div className='flex items-center gap-4 mb-4'>
                    <GiBodyHeight className='text-3xl' />
                    <div>
                      <h3 className='font-bold'>Estatura</h3>
                      <p className='text-gray-500'>170 cm</p>
                    </div>
                  </div>
                  {/* Genero */}
                  <div className='flex items-center gap-4 mb-4'>
                    <BsGenderAmbiguous className='text-3xl' />
                    <div>
                      <h3 className='font-bold'>Género</h3>
                      <p className='text-gray-500'>Masculino</p>
                    </div>
                  </div>
                  {/* Comidas prohibidas */}
                  <div className='flex items-center gap-4 mb-4'>
                    <img
                      src='https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg'
                      className='w-14 h-14 object-cover rounded-full'
                    />
                    <div>
                      <h3 className='font-bold'>Comidas prohibidas</h3>
                      <p className='text-gray-500'>Coca-Cola </p>
                    </div>
                  </div>
                  {/* Peso Objetivo */}
                  <div className='flex items-center gap-4 mb-4'>
                    <img
                      src='https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg'
                      className='w-14 h-14 object-cover rounded-full'
                    />
                    <div>
                      <h3 className='font-bold'>Peso objetivo</h3>
                      <p className='text-gray-500'>Coca-Cola </p>
                    </div>
                  </div>

                  <div className='flex justify-end'>
                    <a
                      href='#'
                      className='hover:text-primary-100 transition-colors hover:underline'
                    >
                      See all projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
