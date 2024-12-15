import React from 'react';
import { AttorneyCard } from './ui/AttorneyCard';
import { attorneys } from '../data/attorneys';

const Attorneys = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our People</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney, index) => (
            <AttorneyCard key={index} attorney={attorney} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
