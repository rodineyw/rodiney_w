import Image from 'next/image';
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export default function Home() {
  return (
    <div className="relative h-screen justify-center items-center m-4 p-4">

      <div className='flex w-full rounded-full justify-center items-center '>
        <Image className='rounded-full w-48 sm:w-64'
          src='/perfil.jpeg'
          alt='Foto de perfil de Ródiney Wanderson, criador do site'
          width={100}
          height={100}
          quality={100}
        /></div>

      <div className='flex flex-col gap-2 mt-8 items-center w-full'>
        <h1 className="text-2xl sm:text-3xl font-light text-slate-800 dark:text-slate-500">Oi, eu sou</h1>
        <h1 className="text-4xl sm:text-5xl text-center font-extrabold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">Ródiney Wanderson.</h1>
        <h1 className="text-2xl sm:text-3xl font-light text-slate-800 dark:text-slate-500">
          Front-End Developer
        </h1>
      </div>


      <div className='flex w-full gap-4 justify-center mt-4'>

        <div className='flex'>
          <a target="_blank" href="https://www.linkedin.com/in/rodineyw/">
            <RxLinkedinLogo className="text-slate-800 dark:text-slate-500 text-4xl sm:text-5xl" /></a>
        </div>
        <div className='flex'>
          <a target="_blank" href="https://github.com/rodineyw">
            <RxGithubLogo className="text-slate-800 dark:text-slate-500 text-4xl sm:text-5xl" /></a>
        </div>
      </div>

      <div className='flex justify-center items-center py-10'>
        <button className='text-lg sm:text-2xl dark:text-slate-900 hover:text-slate-200 hover:underline transition-all duration-500 ease-out bg-slate-400 dark:bg-slate-500 hover:bg-blue-600 p-4 rounded-full font-bold'>
          <a href="#contato">Informações de Contato</a></button>
      </div>
    </div>
  )
}