// components/Chatbot.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faTimes,
  faPaperPlane,
  faRobot,
  faUser,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  status?: "sending" | "sent" | "error";
}

// API Integration Function
const sendMessageToAPI = async (
  message: string,
  clientId: string = "1",
): Promise<string> => {
  try {
    const response = await fetch(
      "https://ai-chatbot-business-3sd4.onrender.com/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          message: message,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return (
      data.response ||
      data.message ||
      data.reply ||
      "I received your message but couldn't generate a proper response."
    );
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to get response from AI service");
  }
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm Ashar's AI assistant. How can I help you today? Feel free to ask about my skills, projects, or experience!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [clientId] = useState("1");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const messageContent = input.trim();

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageContent,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Call the API with the user's message
      const aiResponse = await sendMessageToAPI(messageContent, clientId);

      const botMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      // Handle error - show error message in chat
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting to the AI service. Please try again later. 😅",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error sending message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button with Attractive Design */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulse Ring Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* Main Button */}
        <motion.button
          onClick={toggleChat}
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/50 flex items-center justify-center transition-all duration-300 group"
          whileHover={{ 
            scale: 1.15,
            boxShadow: "0 0 40px rgba(0, 200, 255, 0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            transition: { 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }
          }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          
          {/* Icon with rotation */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faComments} 
              className="w-7 h-7" 
            />
          </motion.div>

          {/* Hover tooltip */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700">
            {isOpen ? "Close chat" : "Lets Chat"}
          </span>
        </motion.button>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 max-w-full bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-blue-500/20 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faRobot} className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Ashar's AI Assistant
                  </h3>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span>
                    Online • AI Powered
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 bg-gray-900/50 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${
                      msg.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                          : "bg-gradient-to-r from-cyan-500 to-blue-500"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={msg.sender === "user" ? faUser : faRobot}
                        className="w-3.5 h-3.5 text-white"
                      />
                    </div>
                    <div
                      className={`max-w-[75%] px-3 py-2 rounded-xl ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                          : "bg-gray-800 text-gray-200 border border-gray-700"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                      <p
                        className={`text-[10px] mt-1 ${
                          msg.sender === "user"
                            ? "text-white/60"
                            : "text-gray-400"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <FontAwesomeIcon icon={faRobot} className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-gray-800 px-4 py-2 rounded-xl border border-gray-700">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-gray-700 bg-gray-900">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    disabled={isTyping}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 transition disabled:opacity-50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                    className="w-9 h-9 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isTyping ? (
                      <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 animate-spin" />
                    ) : (
                      <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 mt-1.5 text-center">
                  Ask about skills, projects, experience, or anything! 🤖
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Chatbot;