import Language from "@/components/layout/header/language"
import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white py-2 text-center shadow-md">
      <div className="flex items-center justify-between px-8">
        <Link href="/">Maio Wallet</Link>
        <Language />
      </div>
    </header>
  )
}

export default Header
