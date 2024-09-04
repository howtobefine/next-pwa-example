import Link from "next/link"
import { Button } from "@mui/material"
import { useTranslation } from "react-i18next"
import PushNotification from "@/components/PushNotification"
import HeadContent from "@/components/head"
// import useLoading from "@/hooks/useLoading"

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <HeadContent />
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="mb-10 text-center">
          <div>目前環境：{process.env.NODE_ENV}</div>
          <p className="text-3xl font-bold">路由測試</p>
          <Button variant="outlined">
            <Link href="/chain">鏈相關測試頁面</Link>
          </Button>
          <Button variant="contained">
            <Link href="/login">登入頁面</Link>
          </Button>
          <p className="text-3xl font-bold">語系測試</p>
          <p className="text-2xl text-red-500">{t("title")}</p>
          <p className="text-xl text-red-500">{t("description")}</p>
        </div>
        <PushNotification />
      </div>
    </>
  )
}

export default Home
