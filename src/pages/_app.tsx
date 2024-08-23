import Head from "next/head"
import type { AppProps } from "next/app"
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter"
import { ThemeProvider } from "@mui/material/styles"
import Layout from "@/components/layout"
import theme from "@/theme/theme"
import "@/styles/globals.css"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  )
}
