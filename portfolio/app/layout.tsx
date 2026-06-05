import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mazhar Ali - Portfolio | Cybersecurity & Design',
  description: 'Premium portfolio of Mazhar Ali (Alee GFX) - Cybersecurity Student, Graphic Designer, and Freelancer.',
  keywords: 'Cybersecurity, Graphic Design, Portfolio, Security Testing, OSINT, Freelancer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-dark text-white overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
