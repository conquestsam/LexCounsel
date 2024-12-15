// AttorneyCard.tsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import ContactForm from './ContactForm'; // Import the new ContactForm

interface AttorneyProps {
  attorney: {
    name: string;
    position: string;
    image: string;
    bio: string;
  };
}

export const AttorneyCard: React.FC<AttorneyProps> = ({ attorney }) => {
  const [showModal, setShowModal] = useState(false);
  const [isContactForm, setIsContactForm] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsContactForm(false);
  };

  const handleContactClick = () => {
    setIsContactForm(true);
  };

  return (
    <>
      <div
        className="relative h-96 cursor-pointer group"
        onClick={handleCardClick}
        aria-label={`View ${attorney.name}'s details`}
      >
        <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-lg">
          <img
            src={attorney.image}
            alt={attorney.name}
            className="w-full h-3/4 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{attorney.name}</h3>
            <p className="text-gray-600">{attorney.position}</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              aria-label="Close"
            >
              ×
            </button>

            <div className="flex items-center space-x-4 mb-4">
              <img
                src={attorney.image}
                alt={attorney.name}
                className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-semibold">{attorney.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{attorney.position}</p>
              </div>
            </div>

            <div className="mt-4">
              {isContactForm ? (
                <ContactForm />
              ) : (
                <>
                  <p className="text-gray-600">{attorney.bio}</p>
                  <button
                    onClick={handleContactClick}
                    className="mt-4 flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact {attorney.name.split(' ')[0]}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
