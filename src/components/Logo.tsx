import React from 'react';
import { Scale } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Scale className="w-8 h-8 text-blue-600" />
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        LexCounsel
      </span>
    </div>
  );
};

export default Logo;