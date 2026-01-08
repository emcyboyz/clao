function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-black/90 border-r border-gray-800 flex flex-col items-center py-8 space-y-8 z-40">
      {/* Custom Logo - REPLACE THE URL BELOW WITH YOUR IMAGE LINK */}
      <a href="/clao/src/clao.png" className="block group">
        <img 
          src="/clao.png"  // ← PASTE YOUR IMAGE URL HERE
          alt="Clao Logo"
          className="w-12 h-12 object-cover rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200 border border-purple-700"
        />
      </a>

      {/* Optional Small Icons - Keep or remove as you like */}
      <div className="flex flex-col space-y-6 text-gray-500">
        <button className="p-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors" title="New Chat">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <button className="p-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors" title="History">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        <button className="p-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors" title="Settings">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* Join Community Button Near Bottom */}
      <div className="mt-auto mb-8">
        <a
          href="https://your-community-link.com"  // ← Replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 bg-purple-600 hover:bg-purple-700 rounded-xl shadow-lg transition-all duration-300 hover:scale-110"
          title="Join Community"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;