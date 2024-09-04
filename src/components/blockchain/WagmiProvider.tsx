import { ReactNode } from "react"
import { WagmiConfig } from "wagmi"
import { polygon, localhost, mainnet, bsc } from "@wagmi/chains"
import { configureChains, createConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { InjectedConnector } from "wagmi/connectors/injected"

export const WagmiProvider = ({ children }: { children: ReactNode }) => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, bsc, localhost],
    [publicProvider()],
  )

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: () => {
      const connectors = [
        new InjectedConnector({
          chains,
          options: {},
        }),
      ]
      return connectors
    },
  })

  return <WagmiConfig config={config}>{children}</WagmiConfig>
}
export default WagmiProvider
