// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import AppRouter from './App.tsx'

createRoot(document.getElementById('root')!).render(
  
    <AppRouter />
  
)
