import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function ContractAddress() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '8F9xClaoToken123DumbAsianAI456XYZ789';  // ← Replace if needed

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="border-t border-gray-800 bg-black/80 backdrop-blur-lg py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-center text-gray-400 text-sm font-medium mb-4 tracking-wider">
          Contract Address
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="bg-[#111111] border border-gray-700 rounded-2xl px-6 py-4 font-mono text-purple-300 text-sm tracking-wider break-all text-center sm:text-left shadow-inner">
            {contractAddress}
          </div>

          <button
            onClick={handleCopy}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-2xl font-medium flex items-center gap-2 shadow-lg hover:shadow-purple-600/50 transition-all duration-300"
          >
            {copied ? (
              <>
                <Check size={18} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <p className="text-center text-gray-600 text-xs mt-5 font-medium">
          Send to wrong address? Not my problem lah! Own risk hor 🧋🤷
        </p>
      </div>
    </div>
  );
}

export default ContractAddress;