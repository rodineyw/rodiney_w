import Image from 'next/image'
export default function Projetos() {
 return (
  <div id="projetos" className="flex flex-col h-full items-center m-4 mx-10 mt-8">
   <div className="flex flex-col gap-4 justify-center items-center">
    <p className="text-xl text-slate-400">Alguns dos meus</p>
    <p className="text-3xl text-slate-400 font-bold">Projetos</p>
   </div>

   <div className="flex flex-col w-full mt-8 text-slate-400 justify-center items-center gap-4 bg-black border border-slate-600 bg-opacity-75 rounded-3xl p-4">
    <div className='relative hover:scale-125 transition-all duration-500 ease-out'>
     <Image src="/filmes.png" alt="Tela inicial do site de filmes" width={200} height={100} className='rounded-2xl' />
    </div>

    <div className="grid gap-4 items-center justify-center">
     <h1 className="flex text-xl font-bold justify-start items-center gap-2">Lista de Filmes e Séries</h1>
    </div>

    <div className='flex gap-4'>
     <button className='bg-slate-800 rounded-full px-8 py-2'><a target="_blank" href="https://github.com/rodineyw/top-filme-series">GitHub</a></button>
     <button className='bg-slate-800 rounded-full px-8 py-2'><a target="_blank" href="https://top-filme-series.vercel.app/">Demo</a></button>
    </div>
   </div>

   <div className="flex flex-col w-full mt-8 text-slate-400 justify-center items-center gap-4 bg-black border border-slate-600 bg-opacity-75 rounded-3xl p-4">
    <div className='relative hover:scale-125 transition-all duration-500 ease-out'>
     <Image src="/blog.png" alt="Tela inicial do blog" width={200} height={100} className='rounded-2xl' />
    </div>

    <div className="grid gap-4 items-center justify-center">
     <h1 className="flex text-xl font-bold justify-start items-center gap-2">Blog pessoal</h1>
    </div>

    <div className='flex gap-4'>
     <button className='bg-slate-800 rounded-full px-8 py-2'><a target="_blank" href="https://github.com/rodineyw/blog-artec0der">GitHub</a></button>
     <button className='bg-slate-800 rounded-full px-8 py-2'><a target="_blank" href="https://blog-artec0der.vercel.app/">Demo</a></button>
    </div>
   </div>

   <div className="flex flex-col w-full mt-8 text-slate-400 justify-center items-center gap-4 bg-black border border-slate-600 bg-opacity-75 rounded-3xl p-4">
    <div className='relative hover:scale-125 transition-all duration-500 ease-out'>
     <Image src="/page.png" alt="Tela inicial da Portfolio antigo" width={200} height={100} className='rounded-2xl' />
    </div>

    <div className="grid gap-4 items-center justify-center">
     <h1 className="flex text-xl font-bold justify-start items-center gap-2">Primeiro Portfolio</h1>
    </div>

    <div className='flex gap-4'>
     <button className='bg-slate-800 rounded-full px-8 py-2'><a target="_blank" href="https://github.com/rodineyw/portfolio-rodineyw">GitHub</a></button>
     <button className='bg-slate-800 rounded-full px-8 py-2'><a target="_blank" href="https://portfolio-rodineyw.vercel.app/">Demo</a></button>
    </div>
   </div>

  </div>
 )
}