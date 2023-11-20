import Image from 'next/image'

export default function Menu() {
 return (
  <div className='relative'>
   <div className="sticky top-0 z-10 w-full">
    <div
     className="absolute w-full -inset-2 rounded-lg bg-gradient-to-bl from-teal-600 via-purple-600 to-purple-600 opacity-95 blur-2xl"
    ></div>

    <div className="absolute flex w-full h-20 items-center justify-between border-b border-zinc-700 bg-zinc-800 bg-opacity-80 text-slate-300">
     <Image src="/logo.svg" alt="logo" width={200} height={20} className='flex h-10 w-full sm:w-20 justify-center sm:ml-10' /></div>

    <div className='relative flex h-20 justify-end items-center z-20'>
     <div className='flex text-slate-500 gap-10 invisible sm:visible mr-10'>
      <p className='text-xl hover:underline hover:text-blue-500 transition-all duration-500 ease-in-out '><a href="/app/Pages/Sobre/page">Sobre</a></p>
      <p className='text-xl hover:underline hover:text-blue-500 transition-all duration-500 ease-in-out '><a href="#">Experiências</a></p>
      <p className='text-xl hover:underline hover:text-blue-500 transition-all duration-500 ease-in-out '><a href="#">Projetos</a></p>
      <p className='text-xl hover:underline hover:text-blue-500 transition-all duration-500 ease-in-out '><a href="#">Contato</a></p>
     </div>
    </div>

   </div>
  </div >
 )
}