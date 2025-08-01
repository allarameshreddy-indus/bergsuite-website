import React, { useState, useEffect } from 'react';

const DatabaseTest = () => {
  const [connectionStatus, setConnectionStatus] = useState('Testing...');
  const [testResult, setTestResult] = useState(null);
  const [serverStatus, setServerStatus] = useState('Testing...');

  useEffect(() => {
    testServerConnection();
    testDatabaseConnection();
  }, []);

  const testServerConnection = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/health');
      if (response.ok) {
        setServerStatus('Server Running ✅');
      } else {
        setServerStatus('Server Error ❌');
      }
    } catch (error) {
      setServerStatus('Server Not Found ❌');
    }
  };

  const testDatabaseConnection = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/test-connection');
      const data = await response.json();
      
      if (data.success) {
        setConnectionStatus('Connected ✅');
        setTestResult(data.data);
      } else {
        setConnectionStatus('Connection Failed ❌');
        setTestResult({ error: data.message });
      }
    } catch (error) {
      setConnectionStatus('Connection Error ❌');
      console.error('Database connection error:', error);
    }
  };

  const retestConnections = () => {
    setConnectionStatus('Testing...');
    setServerStatus('Testing...');
    setTestResult(null);
    testServerConnection();
    testDatabaseConnection();
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Database Connection Test</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Server:</span>
          <span className={`text-sm font-semibold ${
            serverStatus.includes('Running') ? 'text-green-600' : 'text-red-600'
          }`}>
            {serverStatus}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Database:</span>
          <span className={`text-sm font-semibold ${
            connectionStatus.includes('Connected') ? 'text-green-600' : 'text-red-600'
          }`}>
            {connectionStatus}
          </span>
        </div>

        {testResult && (
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Test Query Result:</h3>
            {testResult.error ? (
              <p className="text-red-600 text-sm">{testResult.error}</p>
            ) : (
              <p className="text-green-600 text-sm">
                Current time: {testResult.current_time}
              </p>
            )}
          </div>
        )}

        <button
          onClick={retestConnections}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Test Connections Again
        </button>
      </div>
    </div>
  );
};

export default DatabaseTest; 