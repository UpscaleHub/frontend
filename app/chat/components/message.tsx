"use client";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import Input from "./message/input";
import MessageList from "./message/messageList";

const Message = () => {
  interface MessageType {
    text: string;
    sender: string;
  }

  interface HandleSendMessage {
    (text: string, sender: string): void;
  }

  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleSendMessage: HandleSendMessage = (text, sender) => {
    const newMessage: MessageType = { text, sender };
    setMessages((prev: MessageType[]) => [...prev, newMessage]);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="w-[786px] pt-6 h-screen header flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      <div className=" flex items-center justify-between px-6 border-b border-white/10 pb-4">
        <span className=" bg-gradient-to-r from-cyan-400 to-blue-800 text-transparent bg-clip-text text-2xl font-bold ">
          Scale AI{" "}
        </span>
        <span
          onClick={handleClearChat}
          className=" w-fit flex items-center gap-2 text-sm text-white p-1.5 px-2 rounded-full bg-red-700/10 border border-red-700 transition-all duration-200 cursor-pointer hover:bg-red-700/20"
        >
          <FiTrash />
          <span>Clear Chat</span>
        </span>
      </div>

      <div className="">
        <MessageList messages={messages} />
        <Input onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Message;
