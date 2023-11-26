'use client'
import { RevealWrapper } from 'next-reveal'
import Contato from './Pages/Contato/page'
import Experiencias from './Pages/Experiencias/page'
import Home from './Pages/Home/page'
import Projetos from './Pages/Projetos/page'
import Sobre from './Pages/Sobre/page'
import Menu from './assets/Menu/page'
import Rodape from './assets/Rodape/page'
import Voltar from './assets/Voltar/page'

export default function App() {
  return (
    <RevealWrapper>
      <div className='grid  grid-cols-1 gap-4'>
        <Menu />
        <Home />
        <Sobre />
        <Experiencias />
        <Projetos />
        <Contato />
      </div>
      <Rodape />
      <Voltar />
    </RevealWrapper>
  )
}
