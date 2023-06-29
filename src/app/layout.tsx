import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['cyrillic'], weight: '400' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
