import { useState, useEffect } from "react";
import NavBar from "../../componets/Navbar/NavBar";
import ChatHeader from "../../componets/chatHeader/ChatHeader";
import ChatWindow from "../../componets/chatWindow/ChatWindow";
import MessageInput from "../../componets/menssageInput/MenssageInput";

import { db } from "../../firebase/firebase";
import { ref, onValue, push } from "firebase/database";

import "./chatPage.css";

export default function ChatPage() {
  const myUserId = 1;
  const chatId = "chat1";

  const [messages, setMessages] = useState([]);

  // 🟡 Escuchar mensajes en tiempo real
  useEffect(() => {
    const messagesRef = ref(db, `private/${chatId}`);

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setMessages([]);
        return;
      }

      const loadedMessages = Object.values(data);
      setMessages(loadedMessages);
    });

    return () => unsubscribe();
  }, []);

  // 🟢 Enviar mensaje a Firebase
  const handleSend = (text) => {
    const messagesRef = ref(db, `private/${chatId}`);

    push(messagesRef, {
      text,
      userId: myUserId,
      timestamp: Date.now(),
    });
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
}
