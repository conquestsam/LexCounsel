import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle redirection

// TypeScript type definition for form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const navigate = useNavigate(); // To navigate programmatically

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Access Web3Forms API key from environment variables (Vite-friendly way)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error('Web3Forms access key is missing');
      alert('Missing Web3Forms access key!');
      return;
    }

    // Perform the fetch request to the Web3Forms API
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData, // Pass form data as part of the request body
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setModalMessage('Thanks for contacting us, we will get in touch shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        setIsModalOpen(true);

        // Redirect to home after 5 seconds
        setTimeout(() => {
          navigate('/'); // Adjust this path if needed for your home route
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Error from Web3Forms:', errorData);
        setIsSuccess(false);
        setModalMessage('Failed to send message. Please try again later.');
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSuccess(false);
      setModalMessage('Error submitting the form. Please try again later.');
      setIsModalOpen(true);
    }
  };

  return (
    <div className="relative">
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-lg">
            <h3 className={`text-2xl font-semibold text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
              {isSuccess ? 'Success' : 'Error'}
            </h3>
            <p className="text-center mt-4">{modalMessage}</p>
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
