import Link from "next/link"

const ErrorBoundary = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-5xl">Error Page</p>
      <Link href="/">Go to Home</Link>
    </div>
  )
}

export default ErrorBoundary
