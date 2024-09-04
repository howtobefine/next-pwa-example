import { useState, useEffect, useRef, ReactNode } from "react"
import { useRouter } from "next/router"
import { Inter, Noto_Sans_TC } from "next/font/google"
import Header from "@/components/layout/header/header"
import Footer from "@/components/layout/footer"
import "@/middleware"
import { languageList } from "@/global"
import { useTranslation } from "react-i18next"
import useStore from "@/store"

interface LayoutProps {
  children: ReactNode
}

const inter = Inter({ subsets: ["latin"] })

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
})

const Layout = ({ children }: LayoutProps) => {
  const [isClient, setIsClient] = useState(false)
  const { i18n } = useTranslation()
  const router = useRouter()
  const isLoginPage = router.pathname === "/login"

  const isInit = useRef(true)

  const { language, changeLanguage } = useStore()

  useEffect(() => {
    const initLanguage = localStorage.getItem(
      "i18nextLng" || language,
    ) as Language
    const langList = languageList.map(item => item.value)
    if (initLanguage) {
      changeLanguage(langList.includes(language) ? initLanguage : "zh-TW")
      i18n.changeLanguage(langList.includes(language) ? initLanguage : "zh-TW")
    }
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isInit.current) {
      localStorage.setItem("i18nextLng", language)
    }
  }, [language])

  if (isLoginPage) {
    return (
      <div className="min-h-screen w-full">
        <main className="w-full">{isClient && children}</main>
      </div>
    )
  }

  if (!isLoginPage) {
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
}

export default Layout
