'use client'
import { useEffect, useState } from "react";
import { RxTriangleUp } from "react-icons/rx";

export default function Voltar() {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    setShowButton(window.pageYOffset > 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="container">
      {showButton && (
        <button className="fixed bottom-16 right-10 z-20"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <a href='#home'>
            <RxTriangleUp className="text-slate-200 dark:text-slate-800 bg-slate-800 dark:bg-slate-200 rounded-full w-10 h-10" />
          </a>
        </button>
      )}
    </div >
  )
}