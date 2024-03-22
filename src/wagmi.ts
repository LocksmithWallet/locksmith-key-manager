import { http, createConfig } from 'wagmi'
import { baseGoerli } from 'wagmi/chains'
import { coinbaseWallet, injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [baseGoerli],
  connectors: [
    coinbaseWallet({ appName: 'Locksmith Key Manager' }),
    injected({target: 'metaMask'}),
  ],
  transports: {
    [baseGoerli.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
