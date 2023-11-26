import Image from 'next/image'
export default function Projetos() {
 return (
  <div id="projetos" className="grid grid-cols-1 h-full items-center m-4 mx-10 mt-8 sm:mx-20">

   <div className="flex flex-col gap-4 justify-center items-center">
    <p className="text-xl sm:text-3xl text-slate-800 dark:text-slate-400">Alguns dos meus</p>
    <p className="text-3xl sm:text-5xl md:text-6xl text-slate-800 dark:text-slate-400 font-bold">Projetos</p>
   </div>

   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:w-full gap-4'>

    <div className="flex flex-col w-full mt-8 text-slate-800 dark:text-slate-400 justify-center items-center gap-4 bg-purple-200 dark:bg-black border border-slate-400 dark:border-slate-700 bg-opacity-75 rounded-3xl p-4">
     <div className='relative hover:scale-125 transition-all duration-500 ease-out'>
      <Image src="/filmes.png" alt="Tela inicial do site de filmes" width={200} height={100} className='rounded-2xl' />
     </div>

     <div className="grid gap-4 items-center justify-center">
      <h1 className="flex text-xl font-bold justify-start items-center gap-2">Lista de Filmes e Séries</h1>
     </div>

     <div className='flex gap-4'>
      <button className='bg-purple-300 dark:bg-slate-800 hover:bg-blue-500 hover:text-slate-300 transition duration-500 ease-out rounded-full px-8 py-2'><a target="_blank" href="https://github.com/rodineyw/top-filme-series">GitHub</a></button>
      <button className='bg-purple-300 dark:bg-slate-800 hover:bg-blue-500 hover:text-slate-300 transition duration-500 ease-out rounded-full px-8 py-2'><a target="_blank" href="https://top-filme-series.vercel.app/">Demo</a></button>
     </div>
    </div>

    <div className="flex flex-col w-full mt-8 text-slate-800 dark:text-slate-400 justify-center items-center gap-4 bg-purple-200 dark:bg-black border border-slate-400 dark:border-slate-700 bg-opacity-75 rounded-3xl p-4">
     <div className='relative h-full hover:scale-125 transition-all duration-500 ease-out'>
      <Image src="/blog.png" alt="Tela inicial do blog" width={200} height={100} className='rounded-2xl' />
     </div>

     <div className="grid gap-4 items-center justify-center">
      <h1 className="flex text-xl font-bold justify-start items-center gap-2">Blog pessoal</h1>
     </div>

     <div className='flex gap-4'>
      <button className='bg-purple-300 dark:bg-slate-800 hover:bg-blue-500 hover:text-slate-300 transition duration-500 ease-out rounded-full px-8 py-2'><a target="_blank" href="https://github.com/rodineyw/blog-artec0der">GitHub</a></button>
      <button className='bg-purple-300 dark:bg-slate-800 hover:bg-blue-500 hover:text-slate-300 transition duration-500 ease-out rounded-full px-8 py-2'><a target="_blank" href="https://blog-artec0der.vercel.app/">Demo</a></button>
     </div>
    </div>

    <div className="flex flex-col sm:col-span-2 lg:col-span-1 w-full mt-8 text-slate-800 dark:text-slate-400 justify-center items-center gap-4 bg-purple-200 dark:bg-black border border-slate-400 dark:border-slate-700 bg-opacity-75 rounded-3xl p-4">
     <div className='relative hover:scale-125 transition-all duration-500 ease-out'>
      <Image src="/page.png" alt="Tela inicial da Portfolio antigo" width={200} height={100} className='rounded-2xl sm:w-auto' />
     </div>

     <div className="grid gap-4 items-center justify-center">
      <h1 className="flex text-xl font-bold justify-start items-center gap-2">Primeiro Portfolio</h1>
     </div>

     <div className='flex gap-4'>
      <button className='bg-purple-300 dark:bg-slate-800 hover:bg-blue-500 hover:text-slate-300 transition duration-500 ease-out rounded-full px-8 py-2'><a target="_blank" href="https://github.com/rodineyw/portfolio-rodineyw">GitHub</a></button>
      <button className='bg-purple-300 dark:bg-slate-800 hover:bg-blue-500 hover:text-slate-300 transition duration-500 ease-out rounded-full px-8 py-2'><a target="_blank" href="https://portfolio-rodineyw.vercel.app/">Demo</a></button>
     </div>
    </div>

   </div>
  </div>
 )
}