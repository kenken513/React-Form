import React from 'react'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

import Form from './Componets/Form'

function App() {
  return(
    <ChakraProvider>
    <Text　fontSize="5xl"> お問い合わせフォーム
    </Text>
    <Form />
  </ChakraProvider>
  )
}

export default App;