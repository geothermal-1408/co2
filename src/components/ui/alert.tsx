// src/components/ui/alert.tsx
import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  type?: 'success' | 'warning' | 'error';
}

export const Alert: React.FC<AlertProps> = ({ children, type = 'success' }) => {
  const alertColors = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  };

  return (
    <div className={`p-4 rounded-lg ${alertColors[type]}`} role="alert">
      <strong className="font-bold">{(type && type.charAt(0).toUpperCase() + type.slice(1)) || 'Success'}!</strong>
      <span className="block sm:inline">{children}</span>
    </div>
  );
};

// Export additional components if needed
export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm">{children}</p>
);

export const AlertTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="text-lg font-semibold">{children}</h4>
);
