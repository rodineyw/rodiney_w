import Image from 'next/image';
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
export default function Home() {
 return (
  <div className="relative h-full justify-center items-center gap-10 m-10 mt-18">
   <Image className='rounded-full items-center'
    src='/perfil.jpeg'
    alt='Foto de perfil de Ródiney Wanderson, criador do site'
    width={200}
    height={200}
   />
   <div className='flex flex-col gap-2 mt-8 items-center w-full'>
    <h1 className="text-xl font-light text-slate-500">Oi, eu sou</h1>
    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">Ródiney Wanderson. </h1>
    <h1 className="text-xl font-light text-slate-500">
     Sou Front-End Developer
    </h1>
   </div>

   <div className='flex gap-10 mt-4 w-full justify-center'>
    <button className='text-base bg-slate-400 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-slate-200 transition-colors duration-500'>Baixar CV</button>
    <button className='text-base text-slate-400 border border-slate-400 px-4 py-2 rounded-full hover:bg-slate-800 hover:text-slate-200 hover:border-none transition-colors duration-500'>Contato</button>
   </div>

   <div className='flex w-full justify-center mt-8'>

    <div className='flex gap-4 items-center'>
     <RxLinkedinLogo className="text-slate-500 text-4xl" />
     <p className='text-slate-500'></p>
    </div>
    <div className='flex gap-4 items-center'>
     <RxGithubLogo className="text-slate-500 text-4xl" />
     <p className='text-slate-500'></p>
    </div>

   </div>
  </div>
 )
}