import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    name: string;
    company: string;
    image: string;
    text: string;
    rating: number;
  };
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.company}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">{testimonial.text}</p>
    </div>
  );
};