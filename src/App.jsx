import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import LoginPage from '@/components/LoginPage';
import Dashboard from '@/components/Dashboard';
import DatabaseTest from '@/components/DatabaseTest';

function App() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (userData, role) => {
    setUser(userData);
    setUserRole(role);
  };

  const handleLogout = () => {
    setUser(null);
    setUserRole(null);
  };

  return (
    <>
      <Helmet>
        <title>Vidyarambh - Preschool & Afterschool Platform</title>
        <meta name="description" content="The official platform for Vidyarambh Preschool & Afterschool. Track attendance, academics, and communicate seamlessly." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🚀 Horizons Visual Editor
            </h1>
            <p className="text-lg text-gray-600">
              React-based visual editor with inline editing capabilities
            </p>
            <p className="text-sm text-green-600 mt-2">
              ✅ Connected to GitHub & Hostinger - Auto-deploy enabled!
            </p>
          </header>
          
          <main className="space-y-8">
            <Dashboard />
            <DatabaseTest />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;