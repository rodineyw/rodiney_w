'use client'

import { useEffect, useState } from "react";
import { RxTriangleUp } from "react-icons/rx";

export default function Voltar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsVisible(scrollTop > 100);
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`relative ${isVisible ? "visible" : "invisible"
      }`}>
      <button className="fixed bottom-16 right-10 z-10" onClick={scrollTop}>
        <a href='#home'>
          <RxTriangleUp className="text-slate-800 bg-slate-500 rounded-full w-10 h-10" />
        </a></button>
    </div>
  )
}