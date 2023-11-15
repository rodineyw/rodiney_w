export default function Home() {
 return (
  <div className="relative sm:flex h-full justify-center items-center sm:items-center gap-10 m-10 mt-32">
   <div className="absolute text-center">
    <h1 className="text-2xl sm:text-3xl font-light text-slate-500">Oi, Bem-vindo ao meu</h1>
    <span className="flex text-4xl sm:text-7xl items-end font-extrabold bg-gradient-to-r from-pink-800 via-purple-900 to-blue-500 text-transparent bg-clip-text text-right"> Portfólio.</span>
   </div>

   <div className="absolute gap-8 mt-28 sm:mt-96 text-center">
    <h1 className="text-3xl sm:text4xl font-light text-slate-500">
     Meu nome é <span className="flex text-5xl sm:text-8xl font-extrabold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text text-right">Ródiney Wanderson. </span>
    </h1>
    <h1 className="text-2xl font-light text-slate-500">
     Sou Desenvolvedor Web
    </h1>
   </div>
  </div>
 )
}