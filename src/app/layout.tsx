import '../styles/global.css'
import { ReactNode } from 'react'
import { Roboto, Black_Han_Sans } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

const blackHanSans = Black_Han_Sans({
  subsets: ['latin'],
  weight: '400',
  // display: 'swap',
  variable: '--font-black-han-sans',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang='en'
      className={`dark ${blackHanSans.variable} ${roboto.variable} font-sans`}
    >
      <head>
        <title>Othneil Drew - Senior Software Engineer | UI/UX Pro</title>
      </head>
      <body className='relative overflow-x-hidden'>{children}</body>
    </html>
  )
}
