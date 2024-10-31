import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthenticationContextProvider } from './components/services/authentication/authentication.context.jsx'
import { TranslateContextProvider } from './components/services/authentication/translation.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationContextProvider>
      <TranslateContextProvider>
        <App />
      </TranslateContextProvider>
    </AuthenticationContextProvider>
  </StrictMode>,
)
