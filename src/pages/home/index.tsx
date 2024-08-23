import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { Button } from "@mui/material"
import { useTranslation } from "react-i18next"

const Home = () => {
  const [text, setText] = useState("Test PWA 0822 night")
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="text-center">
        <Button variant="contained" onClick={() => setText("MUI Cool")}>
          MUI Test
        </Button>
        <Button variant="outlined" onClick={() => router.push("/about")}>
          <Link href="/about">Go to About</Link>
        </Button>
        <p className="text-5xl">{text}</p>
        <p className="text-3xl font-medium">中文字</p>
        <p className="text-2xl text-red-500">{t("title")}</p>
      </div>
    </div>
  )
}

export default Home
