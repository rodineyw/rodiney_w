'use client'
import { RevealWrapper } from 'next-reveal'
import Experiencias from './Pages/Experiencias/page'
import Home from './Pages/Home/page'
import Sobre from './Pages/Sobre/page'
import Menu from './assets/Menu/page'
import Voltar from './assets/Voltar/page'

export default function App() {
  return (
    <RevealWrapper>
      <Menu />
      <Home />
      <Sobre />
      <Experiencias />
      <Voltar />
    </RevealWrapper>
  )
}
