interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-lg px-4 py-3 ${
          isUser
            ? 'bg-[#333] text-white'
            : 'bg-[#222] text-gray-100 border border-gray-700'
        }`}
      >
        <div className="text-xs font-mono text-gray-400 mb-1">
          {isUser ? 'You' : 'Clao'}
        </div>
        <div className="whitespace-pre-wrap break-words">{content}</div>
      </div>
    </div>
  );
}

export default ChatMessage;
