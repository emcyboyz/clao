import { ChevronLeft } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function Sidebar({ isOpen, onToggle, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-[#111] border-r border-gray-800 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${!isOpen && 'lg:-translate-x-full'}`}
      >
        <div className="flex flex-col items-center p-6 space-y-6 h-full">
          <div className="flex items-center justify-between w-full">
            <div></div>
            <button
              onClick={onToggle}
              className="hidden lg:block text-gray-400 hover:text-white transition-colors p-1"
              title="Collapse sidebar"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <a href="/#" className="block">
            <div className="w-[150px] h-[150px] bg-gray-700 rounded-lg flex items-center justify-center text-6xl hover:bg-gray-600 transition-colors">
              🥟
            </div>
          </a>

          <a
            href="https://your-community-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
          >
            Join Community
          </a>

          <div className="text-gray-500 text-xs text-center mt-auto pt-8 pb-4">
            <p>Clao v1.0</p>
            <p className="mt-2">Built for laughs lah</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
