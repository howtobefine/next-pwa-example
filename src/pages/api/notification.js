const webPush = require("web-push")

webPush.setVapidDetails(
  `mailto:${process.env.NEXT_PUBLIC_WEB_PUSH_EMAIL}`,
  process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_WEB_PUSH_PRIVATE_KEY,
)

const Notification = async (req, res) => {
  if (req.method === "POST") {
    const { subscription, payload } = req.body

    webPush
      .sendNotification(subscription, JSON.stringify(payload))
      .then(response => {
        res.writeHead(response.statusCode, response.headers).end(response.body)
      })
      .catch(error => {
        if ("statusCode" in error) {
          res.writeHead(error.statusCode, error.headers).end(error.body)
        } else {
          console.error(error)
          res.statusCode = 500
          res.end()
        }
      })
  } else {
    res.statusCode = 405
    res.end()
  }
}

export default Notification
