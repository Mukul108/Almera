import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import {Wallet} from '../../src/Wallet'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Almera',
  description: 'A Decentralized Platform for publishing work ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header/>
          {children}
          <Footer/>
        </body>
    </html>
  )
}
