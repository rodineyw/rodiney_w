import Image from 'next/image';
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
export default function Home() {
 return (
  <div className="relative h-full justify-center items-center gap-10 m-10 my-18">
   <Image className='flex w-full rounded-full items-center'
    src='/perfil.jpeg'
    alt='Foto de perfil de Ródiney Wanderson, criador do site'
    width={200}
    height={200}
   />
   <div className='flex flex-col gap-2 mt-8 items-center w-full'>
    <h1 className="text-xl font-light text-slate-500">Oi, eu sou</h1>
    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">Ródiney Wanderson. </h1>
    <h1 className="text-xl font-light text-slate-500">
     Front-End Developer
    </h1>
   </div>


   <div className='flex w-full gap-4 justify-center mt-4'>

    <div className='flex'>
     <RxLinkedinLogo className="text-slate-500 text-4xl" />
     <p className='text-slate-500'></p>
    </div>
    <div className='flex'>
     <RxGithubLogo className="text-slate-500 text-4xl" />
     <p className='text-slate-500'></p>
    </div>

   </div>
  </div>
 )
}