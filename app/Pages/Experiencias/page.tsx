import { RxCode } from "react-icons/rx";

export default function Experiencias() {
 return (
  <div id="experiencias" className="relative h-screen justify-center items-center m-10">
   <div className="flex flex-col justify-start">
    <p className="text-xl text-slate-400">Explores minhas</p>
    <h1 className="text-3xl text-slate-400 font-bold">Experiencias</h1>
   </div>

   <div className="flex flex-col justify-center items-center gap-10 m-4 bg-slate-400 rounded-lg p-4">
    <span><RxCode /></span><h1>HTML</h1>
    <span>Intermediário</span>
   </div>
  </div>
 )
}