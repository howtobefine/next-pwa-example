import { useEffect } from "react"

const Banner = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/banner.js"
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="pointer-events-none relative min-h-screen w-full">
      <div
        id="particles-background"
        className="absolute -left-[51%] -top-[51%] h-[202%] w-[202%] scale-50 text-center after:-mr-1 after:inline-block after:h-full after:align-middle after:content-['']"
      />
      <div
        id="particles-foreground"
        className="absolute -left-[51%] -top-[51%] h-[202%] w-[202%] scale-50 text-center after:-mr-1 after:inline-block after:h-full after:align-middle after:content-['']"
      />
    </div>
  )
}

export default Banner
