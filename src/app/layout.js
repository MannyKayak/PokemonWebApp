import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokemon Master',
  description: 'Pokemo app to make your ideal team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Navbar/>
        {children}
        <footer>App produced by BRUH s.r.l. with free PokeApi</footer>
      </body>
      
    </html>
  )
}
