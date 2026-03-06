import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Character Sheet',
  description: 'Your true self — not who you play, but who you are.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
