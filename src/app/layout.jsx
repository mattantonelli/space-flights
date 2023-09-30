import Link from 'next/link'
import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Flights',
  description: 'The latest space flight news and blog posts.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <nav className="navbar navbar-expand bg-light">
            <div className="container">
              <Link href="/" className="navbar-brand">Space Flights</Link>
              <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                  <Link href="/articles" className="nav-link">Articles</Link>
                  <Link href="/blogs" className="nav-link">Blogs</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <main className="container mt-3">{children}</main>
      </body>
    </html>
  )
}
