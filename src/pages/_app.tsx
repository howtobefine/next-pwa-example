import Head from "next/head"
import type { AppProps } from "next/app"
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter"
import { ThemeProvider } from "@mui/material/styles"
import WagmiProvider from "@/components/blockchain/WagmiProvider"
import Layout from "@/components/layout"
import theme from "@/theme/theme"
import Loading from "@/context/loading"
import "@/styles/globals.css"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <AppCacheProvider {...props}>
      <WagmiProvider>
        <ThemeProvider theme={theme}>
          <Loading.Provider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Loading.Provider>
        </ThemeProvider>
      </WagmiProvider>
    </AppCacheProvider>
  )
}
