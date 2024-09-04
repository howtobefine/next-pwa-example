import { useState } from "react"

const useLoading = () => {
  const [loading, setLoading] = useState(false)
  const load = () => setLoading(true)
  const unload = () => setLoading(false)

  return { loading, load, unload }
}

export default useLoading
