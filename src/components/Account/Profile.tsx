import React, { useState } from 'react';
import { Camera, Key, Trash2, Shield } from 'lucide-react';

interface ProfileData {
  username: string;
  email: string;
  role: string;
  createdAt: string;
  lastModified: string;
  avatar: string;
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileData>({
    username: "Gstxxxx",
    email: "user@example.com",
    role: "Master",
    createdAt: "2 years ago",
    lastModified: "2 years ago",
    avatar: "https://i.gifer.com/Orga.gif"
  });

  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-white">Profile {profile.username}</h2>
          <div className="space-x-3">
            <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
              Ban
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Delete
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="relative">
              <img 
                src={profile.avatar} 
                alt="Profile" 
                className="w-32 h-32 rounded-full object-cover object-center"
              />
              <button className="mt-4 w-full py-2 bg-[#6C63FF] text-white rounded-lg flex items-center justify-center gap-2">
                <Camera className="w-4 h-4" />
                Change photo
              </button>
              <button className="mt-2 w-full py-2 text-red-400 bg-transparent hover:bg-red-500/10 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Trash2 className="w-4 h-4" />
                Remove photo
              </button>
            </div>
          </div>

          <div className="col-span-8 space-y-4">
            <div>
              <label className="block text-sm text-[#9D4EDD] mb-1">Username</label>
              <input
                type="text"
                value={profile.username}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#FF00FF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-[#9D4EDD] mb-1">Email</label>
              <input
                type="email"
                value={profile.email}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#FF00FF] transition-colors"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-2 bg-[#6C63FF] text-white rounded-lg flex items-center justify-center gap-2">
                <Key className="w-4 h-4" />
                Change password
              </button>
              <button className="flex-1 py-2 bg-white/5 text-white rounded-lg flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Remove 2FA
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Keys</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-white/10">
                <th className="pb-3 text-[#9D4EDD]">Game</th>
                <th className="pb-3 text-[#9D4EDD]">Credits</th>
                <th className="pb-3 text-[#9D4EDD]">Key</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 text-white">Counter-Strike 2</td>
                <td className="py-3 text-white">10001</td>
                <td className="py-3 text-white font-mono text-sm">nw-cs2-9999-0eb00218-40ff-4ed9</td>
              </tr>
              <tr>
                <td className="py-3 text-white">Red Dead Redemption 2</td>
                <td className="py-3 text-white">9957</td>
                <td className="py-3 text-white font-mono text-sm">a-rdr2-9999-843da383-9352-4037-892d</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}