import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        Contact           
      </h1>

      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/mariemhajji" target="_blank" rel="noopener noreferrer" className="text-gray-900">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:mariemhajji099@gmail.com" className="text-gray-900">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
