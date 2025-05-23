import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound; 