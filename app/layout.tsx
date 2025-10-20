import { Layout } from '@/components/dom/Layout'
import '@/globals.css'
import { Heebo } from 'next/font/google'
import { Ubuntu } from 'next/font/google'
import localFont from 'next/font/local'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { PostHogProvider } from '@/providers/PostHogProvider'

const title = 'Portfolio'
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://mehdi-popal.vercel.app'
const description = 'Portfolio of Mehdi Popal'
const author = 'Mehdi Popal'

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
  authors: [{ name: author, url: 'https://mehdi-popal.vercel.app' }],
  publisher: author,
  keywords: 'Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist',
  robots: 'index,follow',
  metadataBase: url,
  openGraph: {
    title: title,
    type: 'website',
    url: url,
    images: [{ url: '/icons/logo.svg', width: 800, height: 800 }],
    siteName: title,
    description: description,
  },
  manifest: '/manifest.json',
  formatDetection: { email: true, telephone: true },
  icons: {
    icon: [{ url: '/icons/favicon.ico' }, { url: '/icons/favicon.ico', type: 'image/ico' }],
    shortcut: ['/icons/apple-icon.png'],
    apple: [
      { url: '/icons/apple-icon.png' },
      { url: '/icons/favicon.ico', sizes: '32x32', type: 'image/ico' },
      { url: '/icons/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [{ rel: 'mask-icon', url: '/icons/logo.svg' }],
  },
}

const heebo = Heebo({ subsets: ['latin'], variable: '--font-heebo' })

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-ubuntu',
})

const pPMonumentExtendedBlack = localFont({
  src: '../src/fonts/PPMonumentExtendedBlack.woff',
  variable: '--font-pPMonumentExtended-Black',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <body className={`${pPMonumentExtendedBlack.variable} ${ubuntu.variable} ${heebo.variable} bg-black antialiased`}>
        <PostHogProvider>
          <Layout>{children}</Layout>
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
