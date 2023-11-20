import Image from 'next/image';
import { RxArchive, RxBackpack } from "react-icons/rx";

export default function Sobre() {
 return (
  <div className="relative h-full justify-center items-center gap-10 mt-24 m-10 text-slate-400">
   <p className=" text-xl">Conheça mais</p>
   <p className=" text-3xl font-bold">Sobre mim</p>
   <Image className=' w-36 mt-4 rounded-2xl justify-center grayscale'
    src='/perfil.jpeg'
    alt='Foto de perfil de Ródiney Wanderson, criador do site'
    width={200}
    height={200}
   />
   <div className='grid grid-cols-2 gap-2'>
    <div className='w-full gap-2 mt-8 border border-slate-400 rounded-lg p-4 bg-slate-800 opacity-75'>
     <RxBackpack className="text-slate-400 text-xl" />
     <p className='text-xl font-bold'>Experiência</p>
     <p className='text-base'>+1 ano de experiência</p>
    </div>

    <div className='gap-2 mt-8 border border-slate-400 rounded-lg p-4 bg-slate-800 opacity-75'>
     <RxArchive className="text-slate-400 text-xl" />
     <p className='text-xl font-bold'>Educação</p>
     <p className='text-base'>Curso em Video.</p>
    </div>
   </div>

   <div className='flex w-full gap-4 justify-center mt-4'>
    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum ullam assumenda fugit mollitia totam ab perferendis reiciendis quam quidem repellendus explicabo, iure autem modi labore et voluptas temporibus at.</p>
   </div>

  </div>
 )
}