import React, { ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-sm rounded-md px-3 py-2 shadow-md">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rotate-45"></div>
      </div>
    </div>
  );
};

export default Tooltip;
