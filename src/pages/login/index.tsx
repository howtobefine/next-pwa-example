import Image from "@/components/image"
import GoogleIcon from "@/assets/icon/google.svg"
import { Button } from "@mui/material"
import Banner from "@/pages/login/banner"

const Login = () => {
  const handleLogin = () => {
    console.log("login")
  }

  return (
    <section className="banner flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden overflow-y-hidden bg-gradient-to-t from-[#002659] via-[#004080] to-[#002659]">
      <Banner />

      <div className="container absolute z-10 flex h-screen w-full flex-col py-16">
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/images/logo.png"
            width="181px"
            height="53px"
            alt="logo"
            className="mx-auto"
          />
        </div>
        <div className="mt-auto flex justify-center">
          <Button
            variant="outlined"
            color="info"
            className="w-full max-w-[328px] self-center rounded-full"
            onClick={handleLogin}
          >
            <GoogleIcon className="mr-2" width="32px" height="32px" />
            Login with Google
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Login
