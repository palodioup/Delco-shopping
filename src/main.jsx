import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContaxtProvider from "./code/ContaxtProvider" 

createRoot(document.getElementById('root')).render(
  <ContaxtProvider>
    <App />
  </ContaxtProvider>,
)
