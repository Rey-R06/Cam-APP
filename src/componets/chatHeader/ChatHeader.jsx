import "./chatHeader.css"

export default function ChatHeader({ name = "Contacto", online = true }) {
  return (
    <div className="chat-header">
      <div className="avatar"></div>

      <div className="info">
        <h3>{name}</h3>
        <p className={online ? "online" : "offline"}>
          {online ? "En línea" : "Desconectado"}
        </p>
      </div>
    </div>
  );
};
