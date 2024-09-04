import { useState, useEffect } from "react"
import { Button } from "@mui/material"

const PushNotification = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  )
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null)

  const base64ToUint8Array = (base64: string): Uint8Array => {
    const padding = "=".repeat((4 - (base64.length % 4)) % 4)
    const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/")

    const rawData = window.atob(b64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }
  // console.log(typeof window !== "undefined", "This is window")
  // console.log("serviceWorker" in navigator, "This is navigator")
  // console.log(window.workbox !== undefined, "This is workbox")

  // 訂閱狀態
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      navigator.serviceWorker.ready.then(reg => {
        reg.pushManager.getSubscription().then(sub => {
          if (
            sub &&
            !(
              sub.expirationTime &&
              Date.now() > sub.expirationTime - 5 * 60 * 1000
            )
          ) {
            setIsSubscribed(true)
            setSubscription(sub)
          }
        })
        setRegistration(reg)
      })
    }
  }, [])

  // 訂閱通知按鈕
  const subscribeButtonOnClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
    if (!registration) return

    if (registration) {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64ToUint8Array(
          process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY!,
        ),
      })
      setSubscription(sub)
      setIsSubscribed(true)
      console.log("Subscribed!!!")
      console.log(sub)
    }
  }

  // 取消訂閱按鈕
  const unsubscribeButtonOnClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
    if (!subscription) return

    await subscription.unsubscribe()
    setIsSubscribed(false)
    setSubscription(null)
    console.log("Unsubscribed!!!")
  }

  // 發送通知按鈕
  const sendNotificationButtonOnClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
    if (!subscription) {
      console.error("No subscription")
      return
    }

    await fetch("/api/notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscription,
        payload: {
          title: "Push Notification Title From Client",
          message: "This is a push notification",
        },
      }),
    })
  }

  return (
    <div className="flex flex-col text-center">
      <p className="text-3xl font-bold">推播測試</p>
      <Button
        onClick={subscribeButtonOnClick}
        disabled={isSubscribed}
        variant="contained"
      >
        Subscribe
      </Button>
      <Button
        onClick={unsubscribeButtonOnClick}
        disabled={!isSubscribed}
        variant="text"
      >
        UnSubscribe
      </Button>
      <Button
        onClick={sendNotificationButtonOnClick}
        disabled={!isSubscribed}
        variant="outlined"
      >
        Send Notification
      </Button>
    </div>
  )
}

export default PushNotification
