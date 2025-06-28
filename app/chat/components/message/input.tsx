"use client";
import { useState } from "react";
import { FaBrain } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

interface InputProps {
  onSendMessage: (message: string, sender: string) => void;
}

const Input = ({ onSendMessage }: InputProps) => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (message.trim()) {
      // Send user message
      onSendMessage(message, "User");
      setMessage("");

      // Simulate AI typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        // Simulate AI response
        onSendMessage("This is a simulated AI response to: " + message, "AI");
      }, 1500);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bottom-0 fixed">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2">
          {/* AI Brain Icon */}
          <div className="flex-shrink-0 p-3">
            <FaBrain size={24} className="text-blue-400" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What's in your mind?..."
            className="flex-1 bg-transparent text-white placeholder-white/50 px-4 py-3 focus:outline-none text-base"
            disabled={isTyping}
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={!message.trim() || isTyping}
            className={`flex-shrink-0 p-3 rounded-full transition-all duration-200 ${
              message.trim() && !isTyping
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:scale-105 active:scale-95"
                : "bg-white/10 text-white/40 cursor-not-allowed"
            }`}
          >
            <FiSend size={20} />
          </button>
        </div>

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 mt-3 px-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
            <span className="text-white/70 text-sm">AI is thinking...</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Input;
