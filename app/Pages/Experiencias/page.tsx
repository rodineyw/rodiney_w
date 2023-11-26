import { RxCode } from "react-icons/rx";

export default function Experiencias() {
 return (
  <div id="experiencias" className="flex flex-col h-screen items-center m-4 mt-8 sm:mx-20">
   <div className="relative gap-4 justify-center items-center">
    <p className="flex text-xl text-slate-800 dark:text-slate-400">Explore minhas</p>
    <p className="flex text-3xl text-slate-800 dark:text-slate-400 font-bold">Experiências</p>
   </div>

   <div className="grid grid-cols-2 gap-4">
    <div className="relative w-full mt-8 text-slate-800 dark:text-slate-400 justify-center items-center gap-4 bg-purple-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-600 bg-opacity-75 rounded-2xl p-4">

     <div className="grid grid-cols-2 gap-4 items-center justify-center">
      <h1 className="flex text-2xl font-bold justify-start items-center gap-2"><RxCode /> HTML</h1>
      <p className="text-xl text-slate-500">Intermediário</p>
      <h1 className="flex text-2xl font-bold justify-start items-center gap-2"><RxCode /> CSS</h1>
      <p className="text-xl text-slate-500">Intermediário</p>
      <h1 className="flex text-2xl font-bold justify-start items-center gap-2"><RxCode /> SASS</h1>
      <p className="text-xl text-slate-500">Intermediário</p>
      <h1 className="flex text-2xl font-bold justify-start items-center gap-2"><RxCode /> JavaScript</h1>
      <p className="text-xl text-slate-500">Básico</p>
      <h1 className="flex text-2xl font-bold justify-start items-center gap-2"><RxCode /> TypeScript</h1>
      <p className="text-xl text-slate-500">Básico</p>
      <h1 className="flex text-2xl font-bold justify-start items-center gap-2"><RxCode /> Astro</h1>
      <p className="text-xl text-slate-500">Básico</p>
     </div>
    </div>

    <div className="relative w-full mt-8 text-slate-800 dark:text-slate-400 justify-center items-center gap-4 bg-purple-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-600 bg-opacity-75 rounded-2xl p-4">

     <div className="grid grid-cols-2 gap-4 items-center justify-center">
      <h1 className="flex text-2xl font-bold justify-start items-center gap-2"><RxCode /> Node Js</h1>
      <p className="text-xl text-slate-500">Intermediário</p>
      <h1 className="flex text-2xl font-bold justify-start items-center gap-2"><RxCode /> Git</h1>
      <p className="text-xl text-slate-500">Intermediário</p>
     </div>
    </div>
   </div>

  </div>
 )
}