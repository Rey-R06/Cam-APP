import { useState } from "react";
import NavBar from "../../componets/Navbar/NavBar";
import ChatHeader from "../../componets/chatHeader/ChatHeader";
import ChatWindow from "../../componets/chatWindow/ChatWindow";
import MessageInput from "../../componets/menssageInput/MenssageInput";

import "./chatPage.css"

export default function ChatPage() {
  const myUserId = 1; // ID del usuario que está usando esta pantalla (provisional)

  const [messages, setMessages] = useState([
    { text: "Hola, ¿cómo estás?", userId: 2 },
    { text: "Todo bien, ¿y tú?", userId: 1 }
  ]);

  const handleSend = (text) => {
    setMessages([...messages, { text, userId: myUserId }]);
  };

  return (
    <>
    <NavBar />
    <main className="chat-page">
      <ChatHeader name="Camilo" online={true} />
      <ChatWindow messages={messages} myUserId={myUserId} />
      <MessageInput onSend={handleSend} />
    </main>
    </>
  );
};
