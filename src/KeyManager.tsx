import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ConnectKitProvider } from "connectkit";
import { useAccount } from 'wagmi'

import {
	Text,
  Button,
  Box,
	useColorModeValue
} from '@chakra-ui/react';

function KeyManager() {
  const account = useAccount();
  return <ConnectKitProvider theme='auto' mode={useColorModeValue('light', 'dark')}
    options={{initialChainId: 0}}>
    <Box height='100vh'>
      { account.isDisconnected && <Button>Connect</Button> }
    </Box>
  </ConnectKitProvider>
}

export default KeyManager 
