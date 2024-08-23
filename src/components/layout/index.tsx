import { useState, useEffect } from "react"
import { Inter, Noto_Sans_TC } from "next/font/google"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import "@/middleware"

interface LayoutProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ["latin"] })

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
})

const Layout = ({ children }: LayoutProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main
        className={`w-full flex-1 pt-14 ${inter.className} ${notoSansTC.className}`}
      >
        {isClient && children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
