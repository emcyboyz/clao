import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import ContractAddress from './components/ContractAddress';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Thin Sidebar */}
      <Sidebar />

      {/* Main Content Area - Offset by sidebar width */}
      <div className="ml-20 flex flex-col min-h-screen">
          {/* Compact Top Bar - Logo + Title */}
          <header className="border-b border-gray-800 bg-black px-8 py-6">
            <div className="flex items-center justify-center gap-4">
              <img
                src="/clao.png"
                alt="Uncle Clao"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Uncle Clao
              </h1>
            </div>
          </header>

          {/* Welcome Section */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
            <div className="text-center max-w-3xl">
              {/* Greeting with Icon */}
              <div className="mb-6 text-6xl">
                🧓
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Hey there, young person!
              </h2>

              <p className="text-gray-400 text-lg md:text-xl mb-8">
                Uncle Clao brain currently under construction, please lower your expectations lah.
              </p>

              {/* Chat Input Section */}
              <div className="w-full max-w-2xl">
                <ChatInterface />
              </div>
            </div>
          </div>

          {/* Contract Address at Bottom */}
          <ContractAddress />
      </div>
    </div>
  );
}

export default App;