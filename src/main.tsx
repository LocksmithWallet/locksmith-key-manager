import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Buffer } from 'buffer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'

// Chakra UI
import theme from './theme.tsx'
import { 
  ChakraProvider,
  ColorModeScript
 } from '@chakra-ui/react'

import KeyManager from './KeyManager.tsx'
import { config } from './wagmi.ts'

import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
			    <KeyManager />
		    </ChakraProvider>	
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
