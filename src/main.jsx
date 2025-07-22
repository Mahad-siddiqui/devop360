import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LogoProvider } from './Context/logoContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogoProvider>
    <App />
     </LogoProvider>
  </StrictMode>,
)
