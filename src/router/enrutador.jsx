import Login from "../pages/login/Login"
import ChatPage from "../pages/chat/ChatPage"

export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: "/chat-privado",
        element: <ChatPage />
    }
]