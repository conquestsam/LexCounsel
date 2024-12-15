import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IndustryProps {
  industry: {
    icon: LucideIcon;
    name: string;
    description: string;
  };
}

export const IndustryCard: React.FC<IndustryProps> = ({ industry }) => {
  const Icon = industry.icon;
  
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-200">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
      <p className="text-gray-600">{industry.description}</p>
    </div>
  );
};