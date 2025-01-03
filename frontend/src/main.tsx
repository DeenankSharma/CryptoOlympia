// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import AppRouter from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { NavProvider } from './context/NavBarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <NavProvider>
      <AppRouter />
    </NavProvider>
  </AuthProvider>
)
