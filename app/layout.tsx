import type { Metadata } from 'next'
import { Reem_Kufi_Fun } from 'next/font/google'
import './globals.css'

const reem_kufi_fun = Reem_Kufi_Fun({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ródiney_W DevW',
  description: 'Developer Web UI/UX Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={reem_kufi_fun.className}>{children}</body>
    </html>
  )
}
