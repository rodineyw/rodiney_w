import { RxEnvelopeClosed, RxLinkedinLogo } from "react-icons/rx";

export default function Contato() {
 return (
  <div id="contato" className="flex flex-col h-screen items-center justify-center">
   <div className="flex flex-col gap-4 justify-center items-center">
    <p className="text-xl text-slate-400">Entre em</p>
    <h1 className="text-3xl text-slate-400 font-bold">Contato</h1>
   </div>

   <div className="flex flex-col mt-8 text-slate-400 justify-center items-center gap-4">
    <a href="mailto:rodineyw@yahoo.com.br" className="flex text-xl bg-slate-800 items-center justify-center gap-2 rounded-full px-8 py-2"><RxEnvelopeClosed className="text-4xl" /> rodineyw@yahoo.com.br</a>

    <a target="_blank" href="https://www.linkedin.com/in/rodineyw/" className="flex w-48 text-xl bg-slate-800 items-center justify-center gap-2 rounded-full px-4 py-2"><RxLinkedinLogo className="text-4xl" /> LinkedIn</a>
   </div>
  </div>
 )
}