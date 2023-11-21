import Image from 'next/image';
import { useState } from 'react';
import { RiMenuFill } from "react-icons/ri";

export default function Menu() {
 const [isOpenMenu, setIsOpenMenu] = useState(false);

 const handleToggleMenu = () => {
  setIsOpenMenu(!isOpenMenu);
 };

 return (
  <div id='home' className='relative'>
   <div className="sticky top-0 z-10 w-full">
    <div className="absolute w-full -inset-2 rounded-lg bg-gradient-to-bl from-teal-600 via-purple-600 to-purple-600 opacity-95 blur-2xl"></div>

    <div className="absolute flex w-full h-20 items-center justify-between border-b border-zinc-700 bg-zinc-800 bg-opacity-80 text-slate-300">
     <Image src="/logo.svg" alt="logo" width={200} height={20} className='flex h-10 w-full sm:w-20 justify-center sm:ml-10' />
    </div>

    <div className='relative flex h-20 justify-end items-center z-20'>
     <div className='flex text-slate-500 gap-10 invisible sm:visible mr-10'>
      <span className='text-xl hover:underline hover:text-blue-500 transition-all duration-500 ease-out '><a href="#sobre">Sobre</a></span>
      <span className='text-xl hover:underline hover:text-blue-500 transition-all duration-500 ease-out '><a href="#experiencias">Experiências</a></span>
      <span className='text-xl hover:underline hover:text-blue-500 transition-all duration-500 ease-out '><a href="#projetos">Projetos</a></span>
      <span className='text-xl hover:underline hover:text-blue-500 transition-all duration-500 ease-out '><a href="#contato">Contato</a></span>
     </div>
     <div className='sm:hidden text-slate-500 text-3xl mx-4'>
      <button onClick={handleToggleMenu}><RiMenuFill /></button>
     </div>
    </div>


    {isOpenMenu && (
     <div className='absolute flex flex-col top-20 right-0 border-zinc-700 bg-purple-950 rounded-bl-xl bg-opacity-90 p-4'>
      <span className='text-3xl text-slate-400 hover:text-blue-500 transition-all duration-500 ease-out '><a href="#sobre">Sobre</a></span>
      <span className='text-3xl text-slate-400 hover:text-blue-500 transition-all duration-500 ease-out '><a href="#experiencias">Experiências</a></span>
      <span className='text-3xl text-slate-400 hover:text-blue-500 transition-all duration-500 ease-out '><a href="#projetos">Projetos</a></span>
      <span className='text-3xl text-slate-400 hover:text-blue-500 transition-all duration-500 ease-out '><a href="#contato">Contato</a></span>
     </div>
    )}
   </div>
  </div>
 );
}