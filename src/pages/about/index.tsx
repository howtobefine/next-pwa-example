import { Button } from "@mui/material"
import Link from "next/link"

const About = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-5xl">About Page</p>
      <Button variant="outlined">
        <Link href="/">Go to Home</Link>
      </Button>
    </div>
  )
}

export default About
