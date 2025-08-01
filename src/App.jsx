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
      
      <div className="min-h-screen bg-background">
        {/* Database Test Component - Remove this after testing */}
        <div className="p-4">
          <DatabaseTest />
        </div>
        
        <AnimatePresence mode="wait">
          {!user ? (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoginPage onLogin={handleLogin} />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Dashboard user={user} userRole={userRole} onLogout={handleLogout} />
            </motion.div>
          )}
        </AnimatePresence>
        <Toaster />
      </div>
    </>
  );
}

export default App;