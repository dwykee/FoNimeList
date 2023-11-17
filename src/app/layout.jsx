import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Utilities/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'FosilAnimeList',
  description: 'Website Anime Untuk Para Sepuh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className}`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
