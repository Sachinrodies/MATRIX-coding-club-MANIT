import React from 'react';
import TechNewsComponent from '../components/TechNews';

const TechNews: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tech News</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <TechNewsComponent />
      </div>
    </div>
  );
};

export default TechNews; 