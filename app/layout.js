import './globals.css'


export const metadata = {
  title: 'Shortly',
  description: 'shorten links using a 3rd party api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
