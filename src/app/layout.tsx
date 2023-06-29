import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['cyrillic'], weight: '400' })

export const metadata = {
  title: 'Perceptron Demo: Understanding the Basics of Artificial Neural Networks',
  description:
    'A perceptron is a basic unit in artificial neural networks. It takes multiple inputs, calculates a weighted sum, and applies an activation function to produce an output. By adjusting its weights and biases through training, a perceptron can make predictions or classify input data. It is used in supervised learning and forms the building blocks of more complex neural networks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
