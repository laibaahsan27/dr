import './globals.css'
import { Inter } from 'next/font/google'
import Foot from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en" style={{margin:'0', padding: '0', width:'100%'}}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Inter:wght@700&family=Poppins:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Nunito+Sans:opsz@6..12&family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,800&family=Pacifico&family=Poppins&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&family=Pacifico&family=Poppins&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&family=Poppins:wght@200&display=swap" rel="stylesheet"></link>
      </head>
      <body suppressHydrationWarning={true} className={inter.className} style={{margin:'0', backgroundColor:'#FFF5F4',width:'100%'}}>
      {children}
      {/* <Foot/> */}
      </body>
    </html>
  )
}
