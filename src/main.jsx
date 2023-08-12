import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
  </ChakraProvider>
)
