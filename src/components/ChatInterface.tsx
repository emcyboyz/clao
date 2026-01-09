import { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { sendMessageToGroq } from '../services/groqApi';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      role: 'assistant',
      content: 'Aiyah! Who disturb uncle ah? I am Uncle Clao lah 🧓 Your favorite grumpy Asian uncle. Ask me anything, but young people nowadays ah... better listen properly sia! Go drink kopi first then talk 🧋☕'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    let currentMessages: Message[] = [];

    setMessages(prev => {
      const newMsg = {
        id: Date.now().toString(),
        role: 'user' as const,
        content: userMessage
      };
      currentMessages = [...prev, newMsg];
      return currentMessages;
    });

    setIsLoading(true);

    try {
      const response = await sendMessageToGroq(currentMessages);

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: response
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: 'Wah lao eh! Uncle brain explode already sia! Connection problem lah. Go eat chicken rice wait a while then try again hor 🍗🧓💥'
      }]);
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
    <div className="flex flex-col h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
      {/* Full scrollable chat container */}
      <div 
        className="flex-1 overflow-y-auto px-4 py-8"
      >
        <div className="space-y-6 max-w-4xl mx-auto">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              role={msg.role}
              content={msg.content}
            />
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a1a] rounded-2xl px-5 py-4 max-w-2xl shadow-lg border border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-gray-400 text-sm">Uncle Clao is grumbling lah...</span>
                </div>
              </div>
            </div>
          )}

          {/* No more end ref → no forced scrolling */}
        </div>

        {/* Input box placed INSIDE the scrollable area, right after messages */}
        <div className="max-w-4xl mx-auto mt-6 pb-6">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-lg border border-gray-800 rounded-2xl px-4 py-4 shadow-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask Uncle Clao anything lah... but better be good question hor 🧓"
              disabled={isLoading}
              className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all"
            >
              <Send size={20} />
            </button>
          </div>

          {/* Small disclaimer below input */}
          <p className="text-center text-gray-500 text-xs mt-3">
            Uncle Clao only gives stubborn, outdated advice sia. Last time better one. Don't complain if wrong lah 🧓🍜
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;