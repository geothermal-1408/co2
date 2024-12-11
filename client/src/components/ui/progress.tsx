// src/components/ui/progress.tsx
import React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div className={`relative pt-1 ${className}`}>
      <div className="flex mb-2 items-center justify-between">
        <span className="text-xs font-semibold inline-block py-1 uppercase">
          Progress
        </span>
        <span className="text-xs font-semibold inline-block py-1 uppercase">
          {value}%
        </span>
      </div>
      <div className="flex mb-2">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
