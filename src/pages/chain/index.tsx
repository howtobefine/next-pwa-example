import { Button } from "@mui/material"
import Link from "next/link"
import { useAccount, useConnect, useNetwork, useDisconnect } from "wagmi"

const Chain = () => {
  const { connect, connectors } = useConnect()
  const { address } = useAccount()
  const { chain, chains } = useNetwork()
  const { disconnect } = useDisconnect()

  return (
    <div className="flex h-full w-full flex-col pt-10">
      <div className="text-center">
        <p className="text-5xl">Chain Page</p>
        <Button variant="outlined">
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
      <div className="mt-10 text-center">
        {connectors.map(connector => (
          <Button
            key={connector.id}
            disabled={!connector.ready}
            onClick={() => connect({ connector })}
            variant="contained"
          >
            {connector.name}
          </Button>
        ))}
        <Button variant="outlined" onClick={() => disconnect()}>
          Disconnect
        </Button>
        <div className="text-2xl">地址：{address}</div>
        <div className="text-xl text-red-500">目前鏈：{chain?.name}</div>
        {chains.map(chain => (
          <div
            key={chain.id}
            className="flex items-center justify-center text-lg"
          >
            <div>鏈名稱：{chain.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chain
