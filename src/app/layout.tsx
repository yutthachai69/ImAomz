// src/app/layout.tsx
import { Lexend, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lexend.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}