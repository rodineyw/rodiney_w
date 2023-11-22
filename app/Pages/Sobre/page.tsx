import Image from 'next/image';
import { RxArchive, RxBackpack } from "react-icons/rx";

export default function Sobre() {
  return (
    <div id='sobre' className="relative h-screen justify-center items-center my-8 mx-4 text-slate-800 dark:text-slate-400">
      <div className='flex items-center gap-4'>
        <Image className=' w-36 mt-4 rounded-2xl justify-center'
          src='/perfil.jpeg'
          alt='Foto de perfil de Ródiney Wanderson, criador do site'
          width={200}
          height={200}
        />
        <div>
          <p className=" text-xl font-light">Conheça mais</p>
          <p className=" text-3xl font-bold">Sobre mim</p>
        </div>
      </div>

      <div className='bg-purple-200 dark:bg-slate-800 mt-4 p-2 bg-opacity-75 rounded-2xl'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='w-full gap-2 border border-slate-400 rounded-2xl p-4 bg-purple-300 dark:bg-slate-600 opacity-75'>
            <RxBackpack className="text-slate-800 dark:text-slate-100 text-xl" />
            <p className='text-xl font-bold text-slate-800 dark:text-blue-200'>Experiência</p>
            <p className='text-base text-slate-800 dark:text-slate-300'>+1 ano Front-End Developer</p>
          </div>

          <div className='gap-2 border border-slate-400 rounded-2xl p-4 bg-purple-300 dark:bg-slate-600 opacity-75'>
            <RxArchive className="text-slate-800 dark:text-slate-100 text-xl" />
            <p className='text-xl font-bold text-slate-800 dark:text-blue-200'>Educação</p>
            <p className='text-base text-slate-800 dark:text-slate-300'>Cursando Internet das Coisas.</p>
          </div>
        </div>

        <div className='flex flex-col w-full gap-4 justify-center mt-2'>
          <p className='text-xl'>
            Pode me chamar de <span className='text-orange-400'>Ród</span>. Estou Graduando em IoT <span className='text-orange-400'>(Internet of Things)</span>, amo tecnologia e pretendo me desenvolver nessa área.
            Sou curioso e gosto de aprender um pouco de tudo.
          </p>
          <p className='text-xl'>Sempre procuro evoluir em conhecimento, quero me especializar em <span className='text-orange-400'>Código Aberto e Inteligência Artificial</span>.</p>
        </div></div>

    </div >
  )
}