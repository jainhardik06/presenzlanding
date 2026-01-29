import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PRESENZ - Experience Culture Live',
  description: 'Discover live art, music, fashion, culture happening near you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
