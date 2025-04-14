import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_x8vktjc',
      'template_d9zxw28',
      {
        name: formData.name,     
        email: formData.email,    
        message: formData.message
      },
      'VAFCMn9OuKrg3s4nO'
    )
    .then((result) => {
      alert('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Erreur complète :', error);
      alert(`Erreur lors de l'envoi du message : ${error.text || error}`);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-8">
          Contactez-moi
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300">
            Envoyer
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://www.linkedin.com/in/mariemhajji" target="_blank" rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition transform hover:scale-110">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:mariemhajji099@gmail.com" className="text-blue-700 hover:text-blue-900 transition transform hover:scale-110">
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
