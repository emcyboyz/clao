import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import ContractAddress from './components/ContractAddress';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Thin Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-20">  {/* ml-20 = width of sidebar */}

        {/* Beautiful Header with Uncle Clao Image */}
        <header className="text-center py-12 px-6 border-b border-gray-800 bg-gradient-to-b from-black to-gray-950">
          {/* Uncle Clao Image */}
          <div className="mb-8">
            <img 
              src="/clao.png"  // Your image from public folder
              alt="Uncle Clao"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover shadow-2xl border-4 border-purple-600/50 glow-purple"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Uncle Clao
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-gray-300 mb-6 font-medium">
            Your Favorite Grumpy Asian Uncle lah 🧓🧋
          </p>

          {/* Subtitle / Disclaimer */}
          <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            <span className="text-purple-400 font-bold">Clao v1.0</span> — 
            Uncle Clao give only outdated, stubborn, super dumb advice sia. 
            Last time better one. Young people nowadays ah... don't listen too serious hor! 🤷🍜
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
          </div>
        </header>

        {/* Chat Area */}
        <main className="flex-1 flex flex-col">
          <ChatInterface />
        </main>

        {/* Footer with Contract */}
        <ContractAddress />
      </div>
    </div>
  );
}

export default App;