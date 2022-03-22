import React from 'react'
import AppRouter from './components/AppRouter'
import AuthContextProvider from './contexts/AuthContext'
import { Box } from "@chakra-ui/react"
import logo from './logo7.jpg'

function App(props) {
  return (

    <Box backgroundImage={logo} width="100%" height="115vh">
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
    </Box>
  )
}

export default App
