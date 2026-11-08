"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm Innovate Software Solution's AI assistant. Ask me about our software development and AI services.",
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
        text: "Sorry, we're having trouble connecting right now. Please try again or send us a project inquiry from the Contact page.",
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
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-soft opacity-40 blur-md"
          animate={reduceMotion ? {} : {
            scale: [1, 1.35, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={reduceMotion ? { duration: 0 } : {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.button
          onClick={toggleChat}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-accent to-accent-soft text-background shadow-xl flex items-center justify-center border border-border-token group transition-all duration-300"
          aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
          aria-expanded={isOpen}
          aria-controls="agency-chat-panel"
          whileHover={reduceMotion ? undefined : { scale: 1.08 }}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          initial={reduceMotion ? false : { scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="relative z-10"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faComments}
              className="w-6 h-6 text-background"
            />
          </motion.div>

          <span className="absolute -top-10 right-0 bg-surface text-text-primary text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-border-token shadow-lg pointer-events-none">
            {isOpen ? "Close Assistant" : "Ask AI Assistant"}
          </span>
        </motion.button>

        {/* Chat Window Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="agency-chat-panel"
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.94 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
              className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-background border border-border-token rounded-3xl shadow-card overflow-hidden"
            >
              {/* Header */}
              <div className="bg-surface border-b border-border-token px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-accent to-accent-soft flex items-center justify-center shadow-md">
                    <FontAwesomeIcon icon={faRobot} className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-bold text-sm tracking-wide flex items-center gap-1.5">
                      <span>Innovate AI Assistant</span>
                      <span className="text-xs text-accent bg-surface-raised border border-border-token px-1.5 py-0.5 rounded">AI</span>
                    </h3>
                    <p className="text-text-muted text-xs flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      Project assistant
                    </p>
                  </div>
                </div>

                <button
                  onClick={toggleChat}
                  className="p-1.5 text-text-muted hover:text-text-primary rounded-full hover:bg-surface-raised transition"
                  aria-label="Close AI assistant"
                >
                  <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="h-80 overflow-y-auto p-4 space-y-3.5 bg-background scrollbar-thin" role="log" aria-live="polite" aria-label="Conversation">
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
                          ? "bg-accent text-background"
                          : "bg-surface-raised text-accent border border-border-token"
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
                          ? "bg-accent text-background rounded-tr-none"
                          : "bg-surface text-text-primary border border-border-token rounded-tl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <p
                        className={`text-[10px] mt-1 text-right ${
                          msg.sender === "user"
                            ? "text-background"
                            : "text-text-subtle"
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
                    <div className="w-7 h-7 rounded-xl bg-surface-raised text-accent border border-border-token flex items-center justify-center">
                      <FontAwesomeIcon icon={faRobot} className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-surface px-4 py-3 rounded-2xl rounded-tl-none border border-border-token">
                      <div className="flex gap-1.5 items-center">
                        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-2 h-2 bg-accent-soft rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 border-t border-border-token bg-background">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    aria-label="Message the AI assistant"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about our services..."
                    disabled={isTyping}
                    className="flex-1 px-4 py-2.5 bg-surface border border-border-token rounded-2xl text-text-primary placeholder-text-subtle text-xs sm:text-sm focus:outline-none focus:border-accent transition disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                    className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center text-background hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    {isTyping ? (
                      <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 animate-spin" />
                    ) : (
                      <FontAwesomeIcon icon={faPaperPlane} className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <p className="text-[10px] text-text-subtle mt-2 text-center">
                  Ask us about software and AI solutions
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