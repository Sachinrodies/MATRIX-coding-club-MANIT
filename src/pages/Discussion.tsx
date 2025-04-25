import React from 'react';
import { useParams } from 'react-router-dom';

const Discussion: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Discussion #{id}</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Discussion content will go here</p>
      </div>
    </div>
  );
};

export default Discussion; 