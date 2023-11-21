import { RxCode } from "react-icons/rx";

export default function Experiencias() {
 return (
  <div id="experiencias" className="flex flex-col h-screen justify-center items-center m-4">
   <div className="flex flex-col justify-start">
    <p className="text-xl text-slate-400">Explore minhas</p>
    <h1 className="text-3xl text-slate-400 font-bold">Experiencias</h1>
   </div>

   <div className="relative w-full text-slate-400 justify-center items-center gap-4 m-8 py-8 bg-slate-800 border border-slate-600 bg-opacity-75 rounded-2xl p-4">

    <div className="flex flex-col items-center justify-center">
     <span className=" text-3xl font-bold"><RxCode /></span>
     <h1 className="flex text-2xl font-bold items-center">HTML</h1>
     <p className="text-xl">Intermediário</p>
     <span className=" text-3xl font-bold"><RxCode /></span>
     <h1 className="flex text-2xl font-bold items-center">CSS</h1>
     <p className="text-xl">Intermediário</p>
     <span className=" text-3xl font-bold"><RxCode /></span>
     <h1 className="flex text-2xl font-bold items-center">SASS</h1>
     <p className="text-xl">Intermediário</p>
     <span className=" text-3xl font-bold"><RxCode /></span>
     <h1 className="flex text-2xl font-bold items-center">JavaScript</h1>
     <p className="text-xl">Básico</p>
     <span className=" text-3xl font-bold"><RxCode /></span>
     <h1 className="flex text-2xl font-bold items-center">TypeScript</h1>
     <p className="text-xl">Básico</p>
     <span className=" text-3xl font-bold"><RxCode /></span>
     <h1 className="flex text-2xl font-bold items-center">UI</h1>
     <p className="text-xl">Intermediário</p>
    </div>
   </div>

  </div>
 )
}