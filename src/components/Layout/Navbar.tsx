import React from 'react';
import { Syringe, User, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="h-screen w-64 bg-[#1A103F] border-r border-white/10 p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 px-4 py-6 border-b border-white/10">
        <LogIn className="w-6 h-6 text-[#FF00FF]" />
        <span className="text-white font-bold text-xl">Dashboard</span>
      </div>
      
      <div className="mt-8 space-y-2">
        <Link
          to="/inject"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/inject') 
              ? 'bg-[#FF00FF]/20 text-[#FF00FF]' 
              : 'text-white/70 hover:bg-white/5'
          }`}
        >
          <Syringe className="w-5 h-5" />
          <span>Inject</span>
        </Link>
        
        <Link
          to="/account"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/account') 
              ? 'bg-[#FF00FF]/20 text-[#FF00FF]' 
              : 'text-white/70 hover:bg-white/5'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Account</span>
        </Link>
      </div>
    </nav>
  );
}