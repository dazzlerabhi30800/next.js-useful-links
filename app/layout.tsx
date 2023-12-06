import type { Metadata } from 'next'
import { Playpen_Sans } from 'next/font/google'
import './globals.css'
import ToggleMode from '@/Components/ToggleMode'

const playpen = Playpen_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Link Portfolio App',
  description: 'It is a webstite which is collection of links of all usefull resources.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playpen.className}>
        <ToggleMode />
        {children}
      </body>
    </html>
  )
}
