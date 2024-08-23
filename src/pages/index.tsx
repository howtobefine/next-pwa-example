import { lazy } from "react"

const Home = lazy(() => import("@/pages/home"))

const HomePage = () => {
  return <Home />
}

export default HomePage
