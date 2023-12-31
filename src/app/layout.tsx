import '../styles/global.css'
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
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`dark ${blackHanSans.variable} ${roboto.variable} font-sans`}
    >
      <body className='relative'>{children}</body>
    </html>
  )
}
