'use client'
import { RevealWrapper } from 'next-reveal'
import Home from './Pages/Home/page'
import Sobre from './Pages/Sobre/page'
import Menu from './assets/Menu/page'

export default function App() {
  return (
    <RevealWrapper>
      <Menu />
      <Home />
      <Sobre />
    </RevealWrapper>
  )
}
