import "./messageBubble.css"

export const MessageBubble = ({ text, mine }) => {
  return (
    <div className={`bubble ${mine ? "mine" : "other"}`}>
      <p>{text}</p>
    </div>
  );
};
