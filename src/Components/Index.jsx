// Components
import App from './App.jsx'

// Style
import '../Styles/Index.scss'

// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
