import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ChatPage from './pages/chat/ChatPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatPage />
  </StrictMode>,
)
