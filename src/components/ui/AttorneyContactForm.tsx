import React, { useState } from 'react';
import { Mail, User, AtSign, MessageSquare } from 'lucide-react';

interface AttorneyContactFormProps {
  attorneyName: string;
  onClose: () => void;
}

const AttorneyContactForm: React.FC<AttorneyContactFormProps> = ({
  attorneyName,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
          subject: `Legal Consultation Request for ${attorneyName}`,
          attorney: attorneyName,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close"
        >
          ×
        </button>

        <div className="text-center mb-6">
          <Mail className="w-12 h-12 text-blue-600 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Contact {attorneyName}</h3>
          <p className="text-gray-600 mt-2">Fill out the form below to schedule a consultation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                required
                rows={4}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className={`w-full py-2 rounded-md text-white ${
                status === 'submitting' ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Submitting...' : 'Send Message'}
            </button>
          </div>

          {status === 'success' && (
            <div className="text-center text-green-500 mt-4">Message sent successfully!</div>
          )}
          {status === 'error' && (
            <div className="text-center text-red-500 mt-4">Error sending message. Please try again later.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AttorneyContactForm;
