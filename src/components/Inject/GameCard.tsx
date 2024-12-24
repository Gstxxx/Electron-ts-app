import React from 'react';
import { Download, FileText } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  version: string;
  status: 'Online' | 'Offline';
  onDownload: () => void;
}

export function GameCard({ title, image, version, status, onDownload }: GameCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10">
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="w-24 h-24 rounded-lg mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <span className={`text-sm ${status === 'Online' ? 'text-green-400' : 'text-red-400'} mb-1`}>
          {status}
        </span>
        <span className="text-[#9D4EDD] mb-4">{version}</span>
        
        <button
          onClick={onDownload}
          className="w-full py-2.5 bg-[#6C63FF] text-white rounded-lg mb-3 flex items-center justify-center gap-2 hover:bg-[#5A52E3] transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        
        <button className="w-full py-2.5 bg-white/5 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
          <FileText className="w-4 h-4" />
          Documentation
        </button>
      </div>
    </div>
  );
}