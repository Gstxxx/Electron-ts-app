import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import { InjectPage } from './pages/dashboard/InjectPage';
import { AccountPage } from './pages/dashboard/AccountPage';
import { Navbar } from './components/Layout/Navbar';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <div className="min-h-screen bg-[#1A103F]">
                  <Navbar />
                  <main className="ml-64 p-6">
                    <Routes>
                      <Route path="/inject" element={<InjectPage />} />
                      <Route path="/account" element={<AccountPage />} />
                      <Route path="*" element={<Navigate to="/inject" replace />} />
                    </Routes>
                  </main>
                </div>
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}