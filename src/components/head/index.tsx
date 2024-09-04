import Head from "next/head"

interface HeadContentProps {
  title?: string
  description?: string
}

const HeadContent = ({
  title = "",
  description = "THE MAIO WALLET",
}: HeadContentProps) => {
  return (
    <Head>
      <title>{`${title ? title + " | " : ""}`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  )
}

export default HeadContent
