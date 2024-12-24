import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Layout/Navbar';
import { InjectPage } from './InjectPage';
import { AccountPage } from './AccountPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1A103F]">
        <Navbar />
        <main className="ml-64 p-8">
          <Routes>
            <Route path="/inject" element={<InjectPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/" element={<Navigate to="/inject" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}