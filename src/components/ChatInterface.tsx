import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { sendMessageToGroq } from '../services/groqApi';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Aiyah hello! I am Clao lah! Your dumb Asian AI assistant. Ask me anything and I give you super confuse answer sia! 😵‍💫'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await sendMessageToGroq([
        ...messages,
        { role: 'user', content: userMessage }
      ]);

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Aiyah! My brain explode lah! Error happen sia! Maybe try again later? Or maybe I just too dumb to answer your question. Go drink bubble tea and come back leh! 🧋'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
        style={{ maxHeight: 'calc(100vh - 300px)' }}
      >
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} role={msg.role} content={msg.content} />
        ))}

        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-[#222] text-gray-100 border border-gray-700 rounded-lg px-4 py-3">
              <div className="text-xs font-mono text-gray-400 mb-1">Clao</div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-800 p-4 bg-black">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me something dumb lah..."
            disabled={isLoading}
            className="flex-1 bg-[#111] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
