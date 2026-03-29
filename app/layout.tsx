import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000"

const ogImage = "/images/AutriFix-logo.png"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'AutriFix - Instant Roadside Assistance. Anywhere.',
  description: 'Your car breaks down. AutriFix connects you instantly to nearby mechanics, tow trucks, and vehicle support—when you need it most.',
  keywords: ['roadside assistance', 'tow truck', 'mechanic', 'car breakdown', 'emergency vehicle service'],
  authors: [{ name: 'AutriFix' }],
  icons: {
    icon: [{ url: ogImage, type: "image/png" }],
    apple: ogImage,
  },
  openGraph: {
    title: 'AutriFix - Instant Roadside Assistance. Anywhere.',
    description: 'Connect instantly to nearby mechanics, tow trucks, and vehicle support when you need it most.',
    type: 'website',
    images: [{ url: ogImage, alt: 'AutriFix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutriFix - Instant Roadside Assistance',
    description: 'Connect instantly to nearby mechanics, tow trucks, and vehicle support.',
    images: [ogImage],
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased gradient-bg min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
