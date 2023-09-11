import './globals.css'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Shortly',
  description: 'shorten links using a 3rd party api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
