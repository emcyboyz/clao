import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function ContractAddress() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '8F9xClaoToken123DumbAsianAI456XYZ789';

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
    <div className="border-t border-gray-800 bg-[#111] py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <h3 className="text-gray-400 text-sm font-mono mb-2">Contract Address:</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="bg-black border border-gray-700 rounded-lg px-4 py-2 font-mono text-sm text-gray-300 w-full sm:w-auto text-center sm:text-left overflow-x-auto">
            {contractAddress}
          </div>
          <button
            onClick={handleCopy}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 font-mono text-sm whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <p className="text-gray-600 text-xs text-center mt-3 font-mono">
          Send to wrong address and lose money? Not my problem lah! 🤷
        </p>
      </div>
    </div>
  );
}

export default ContractAddress;
