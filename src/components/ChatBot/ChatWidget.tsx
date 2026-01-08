'use client';

import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m Bader\'s AI assistant. How can I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];

    setInput('');
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget-container">
      {!isOpen && (
        <button
          className="chat-toggle-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="status-dot" />
              <span className="chat-title">AI Assistant</span>
            </div>
            <button
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} role={msg.role} content={msg.content} />
            ))}
            {isLoading && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="chat-input"
              disabled={isLoading}
            />
            <button type="submit" className="chat-send-btn" disabled={isLoading || !input.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        .chat-widget-container {
          position: fixed;
          bottom: var(--spacing-xl);
          right: var(--spacing-xl);
          z-index: 1000;
        }

        .chat-toggle-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          border: none;
          box-shadow: var(--shadow-lg);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast);
        }

        .chat-toggle-btn:hover {
          transform: scale(1.1);
        }

        .chat-window {
          width: 350px;
          height: 500px;
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chat-header {
          padding: var(--spacing-md);
          background-color: var(--color-surface-elevated);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10b981;
        }

        .chat-title {
          font-weight: 600;
          font-size: 0.9375rem;
        }

        .chat-close-btn {
          background: none;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          display: flex;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: var(--spacing-md);
          display: flex;
          flex-direction: column;
        }

        .chat-input-form {
          padding: var(--spacing-md);
          border-top: 1px solid var(--color-border);
          display: flex;
          gap: var(--spacing-sm);
        }

        .chat-input {
          flex: 1;
          background-color: var(--color-surface-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: var(--spacing-sm) var(--spacing-md);
          font-size: 0.875rem;
          color: var(--color-text);
        }

        .chat-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .chat-send-btn {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity var(--transition-fast);
        }

        .chat-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: var(--spacing-sm) var(--spacing-md);
          background-color: var(--color-surface-elevated);
          border-radius: var(--radius-md);
          width: fit-content;
          margin-bottom: var(--spacing-md);
        }

        .typing-indicator span {
          width: 6px;
          height: 6px;
          background-color: var(--color-text-tertiary);
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 40px);
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
