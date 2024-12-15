import React from 'react';
import { Building2, Briefcase, Building, Factory, Plane, Heart, Globe, ShoppingBag } from 'lucide-react';
import { IndustryCard } from './ui/IndustryCard';

const industries = [
  { icon: Building2, name: 'Corporate Law', description: 'Comprehensive legal solutions for businesses' },
  { icon: Building, name: 'Banking & Finance', description: 'Expert guidance in financial regulations' },
  { icon: Factory, name: 'Manufacturing', description: 'Legal support for industrial operations' },
  { icon: Plane, name: 'Aviation', description: 'Specialized aviation law services' },
  { icon: Heart, name: 'Healthcare', description: 'Legal compliance for healthcare providers' },
  { icon: Globe, name: 'International Trade', description: 'Cross-border legal expertise' },
  { icon: ShoppingBag, name: 'Retail', description: 'Legal solutions for retail businesses' },
  { icon: Briefcase, name: 'Insurance', description: 'Insurance law and litigation' },
];

const Industries = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Industries Served</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;