import React from 'react';
import { Clock } from 'lucide-react';

interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export function ChangelogCard() {
  const changelog: ChangelogEntry[] = [
    {
      version: "4.3.1",
      date: "2024-03-15",
      changes: [
        "Fixed stability issues",
        "Improved injection success rate",
        "Added new game support"
      ]
    },
    {
      version: "4.3.0",
      date: "2024-03-01",
      changes: [
        "Major performance improvements",
        "New user interface",
        "Extended compatibility"
      ]
    }
  ];

  return (
    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-[#FF00FF]" />
        Changelog
      </h3>
      
      <div className="space-y-6">
        {changelog.map((entry) => (
          <div key={entry.version} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#FF00FF] font-semibold">Version {entry.version}</span>
              <span className="text-sm text-[#9D4EDD]">{entry.date}</span>
            </div>
            <ul className="space-y-1">
              {entry.changes.map((change, index) => (
                <li key={index} className="text-white/70 text-sm">• {change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}