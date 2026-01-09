import { useState, useRef, useEffect } from 'react';
import { Send, ChevronDown } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { sendMessageToGroq } from '../services/groqApi';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (showChat) {
      scrollToBottom();
    }
  }, [messages, showChat]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setShowChat(true);

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
      const response = await sendMessageToGroq([
        ...messages,
        { role: 'user' as const, content: userMessage }
      ]);

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
    <div className="w-full flex flex-col gap-6">
      {/* Chat Input Box - Always Visible */}
      <div className="bg-[#1a1a2e]/60 backdrop-blur-lg border border-gray-800 rounded-3xl px-6 py-5 shadow-2xl hover:border-gray-700 transition-all">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="How can I mildly confuse you today?"
          disabled={isLoading}
          className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
        />

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            <span>Uncle Clao - thoughts buffering</span>
            <ChevronDown size={16} />
          </button>

          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all"
            title="Send"
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Chat History - Expandable */}
      {showChat && (
        <div
          ref={chatContainerRef}
          className="max-h-96 overflow-y-auto bg-black/40 backdrop-blur-md border border-gray-800 rounded-2xl p-6 space-y-4"
        >
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              role={msg.role}
              content={msg.content}
              id={msg.id}
            />
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a1a] rounded-2xl px-4 py-3 border border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
}

export default ChatInterface;