import React from 'react';
import { Award, Users, Scale, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '25+' },
    { icon: Users, label: 'Satisfied Clients', value: '1000+' },
    { icon: Scale, label: 'Cases Won', value: '95%' },
    { icon: Briefcase, label: 'Expert Attorneys', value: '50+' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Firm</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over two decades of excellence in legal practice, we've established
            ourselves as one of the most trusted law firms in the region.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-lg transition-shadow duration-200"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;