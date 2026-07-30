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
      text: "Hello! 👋 I'm Ashar's AI assistant. Ask me anything about Ashar's AI Chatbot development, MERN Stack projects, background, or availability!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [clientId] = useState("1");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      const aiResponse = await sendMessageToAPI(messageContent, clientId);

      const botMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting to the AI service right now. Please feel free to send a direct message in the contact form below! 😅",
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
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 opacity-40 blur-md"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.button
          onClick={toggleChat}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-blue-600/30 flex items-center justify-center border border-white/20 group hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faComments}
              className="w-6 h-6 text-white"
            />
          </motion.div>

          <span className="absolute -top-10 right-0 bg-[#111827] text-slate-200 text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-white/10 shadow-lg pointer-events-none">
            {isOpen ? "Close Assistant" : "Ask AI Assistant"}
          </span>
        </motion.button>

        {/* Chat Window Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.94 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-[#09090B]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-violet-600/30 border-b border-white/10 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-500 to-violet-600 flex items-center justify-center shadow-md">
                    <FontAwesomeIcon icon={faRobot} className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5">
                      <span>Ashar's AI Assistant</span>
                      <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded">RAG</span>
                    </h3>
                    <p className="text-slate-400 text-xs flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                      Active • RAG & Gemini Powered
                    </p>
                  </div>
                </div>

                <button
                  onClick={toggleChat}
                  className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition"
                >
                  <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="h-80 overflow-y-auto p-4 space-y-3.5 bg-[#09090B]/80 scrollbar-thin">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      msg.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-white/10 text-blue-400 border border-white/10"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={msg.sender === "user" ? faUser : faRobot}
                        className="w-3.5 h-3.5"
                      />
                    </div>
                    <div
                      className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-blue-500/10"
                          : "bg-[#111827] text-slate-200 border border-white/10 rounded-tl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <p
                        className={`text-[10px] mt-1 text-right ${
                          msg.sender === "user"
                            ? "text-blue-200/70"
                            : "text-slate-500"
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
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-white/10 text-blue-400 border border-white/10 flex items-center justify-center">
                      <FontAwesomeIcon icon={faRobot} className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-[#111827] px-4 py-3 rounded-2xl rounded-tl-none border border-white/10">
                      <div className="flex gap-1.5 items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 border-t border-white/10 bg-[#09090B]">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about AI Chatbots or MERN apps..."
                    disabled={isTyping}
                    className="flex-1 px-4 py-2.5 bg-[#111827] border border-white/10 rounded-2xl text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500/60 transition disabled:opacity-50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-blue-600/20"
                  >
                    {isTyping ? (
                      <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 animate-spin" />
                    ) : (
                      <FontAwesomeIcon icon={faPaperPlane} className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 text-center">
                  Instant answers powered by Ashar's AI knowledge base
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