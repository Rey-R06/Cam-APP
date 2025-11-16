import { useEffect, useRef } from "react";
import { MessageBubble } from "../menssageBurblee/MenssageBurble";
import "./messageList.css";

export const MessageList = ({ messages }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="contenedor-chat">
      <div className="message-list">
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} mine={msg.mine} />
        ))}

        <div ref={bottomRef}></div>
      </div>
    </main>
  );
};
