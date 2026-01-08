'use client';

import { cn } from '@/lib/utils';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={cn('chat-message', role)}>
      <div className="message-bubble">
        {content}
      </div>

      <style jsx>{`
        .chat-message {
          display: flex;
          margin-bottom: var(--spacing-md);
          width: 100%;
        }

        .chat-message.user {
          justify-content: flex-end;
        }

        .chat-message.assistant {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 80%;
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          font-size: 0.9375rem;
          line-height: 1.5;
          white-space: pre-wrap;
        }

        .user .message-bubble {
          background: var(--gradient-primary);
          color: white;
          border-bottom-right-radius: 2px;
        }

        .assistant .message-bubble {
          background-color: var(--color-surface-elevated);
          color: var(--color-text);
          border: 1px solid var(--color-border);
          border-bottom-left-radius: 2px;
        }
      `}</style>
    </div>
  );
}
