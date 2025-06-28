import React from "react";

interface Message {
  text: string;
  sender: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list flex flex-col p-4 overflow-y-auto h-[calc(100vh-120px)]">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message my-2 py-4 text-white bg-white/5 backdrop-blur-xl border border-white/10  px-10 ${
            message.sender === "User"
              ? "bg-primaryHover  self-end rounded-full rounded-br-none"
              : "  self-start rounded-full rounded-bl-none"
          }`}
        >
          <div className="message-text">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
