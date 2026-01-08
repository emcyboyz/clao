interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  id?: string;
}

function ChatMessage({ role, content, id }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}
      key={id}
    >
      <div
        className={`
          max-w-2xl rounded-3xl px-6 py-4 shadow-lg transition-all
          ${isUser
            ? 'bg-purple-600 text-white rounded-tr-none'
            : 'bg-[#1a1a1a] text-white border border-gray-800 rounded-tl-none'
          }
        `}
      >
        {/* Label: You or Clao */}
        <div className="text-xs font-medium opacity-70 mb-2">
          {isUser ? 'You' : 'Clao'}
        </div>

        {/* Message Content */}
        <div className="text-base leading-relaxed whitespace-pre-wrap break-words">
          {content}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;