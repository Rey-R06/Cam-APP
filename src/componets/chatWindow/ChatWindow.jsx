import { MessageBubble } from "../menssageBurblee/MenssageBurble";
import "./chatWindow.css"

export default function ChatWindow({ messages, myUserId }) {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          text={msg.text}
          mine={msg.userId === myUserId}
        />
      ))}
    </div>
  );
};
