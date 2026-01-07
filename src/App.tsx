import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import ContractAddress from './components/ContractAddress';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={handleToggleSidebar}
        onClose={handleCloseSidebar}
      />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
        <button
          onClick={handleToggleSidebar}
          className="lg:hidden fixed top-4 left-4 z-30 bg-[#111] p-2 rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <header className="text-center py-8 px-4 border-b border-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Clao - Your Dumb Asian AI Assistant
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-mono">
            What you want now, lah?
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto font-mono">
            <span className="text-purple-500 font-bold">Clao 1.0</span> - Clao is super dumb and confuse everything.
            Please don't trust anything, sia. 🤦
          </p>
          <hr className="max-w-4xl mx-auto mt-6 border-gray-800" />
        </header>

        <main className="flex-1 flex flex-col">
          <ChatInterface />
        </main>

        <ContractAddress />
      </div>
    </div>
  );
}

export default App;
