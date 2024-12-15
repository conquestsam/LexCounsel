import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const images = [
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
  ];

  // Function to handle button click and navigate to the contact page
  const handleClick = () => {
    navigate('/contact'); // Navigates to the /contact path
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Expert Legal Solutions for Complex Challenges
            </h1>
            <p className="text-xl text-gray-600">
              With decades of experience and a commitment to excellence, we provide
              comprehensive legal services tailored to your needs.
            </p>
            <button
              onClick={handleClick} // Add onClick to handle the button click
              className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[600px] overflow-hidden rounded-xl">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Law firm ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 ease-in-out animate-slide"
                style={{
                  animationDelay: `${index * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
