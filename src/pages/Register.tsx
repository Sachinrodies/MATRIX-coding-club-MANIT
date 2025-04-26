import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show alert that registration will be open soon
    alert('Registration will be open soon! Stay tuned for updates.');
  };

  return (
    <div className="min-h-screen bg-matrix-dark-900 py-12">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Join Matrix Coding Club</h1>
          <div className="bg-matrix-dark-800 rounded-lg shadow-lg p-8 border border-matrix-dark-700">
            <div className="mb-6 p-4 bg-matrix-green-500/10 border border-matrix-green-500/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-matrix-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-matrix-green-500 mb-1">Registration Coming Soon</h3>
                  <p className="text-gray-300">
                    We're excited to have you join our community! Registration will be opening soon. 
                    Please check back later or follow us on social media for updates.
                  </p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-matrix-dark-700 border border-matrix-dark-600 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-matrix-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  disabled
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-matrix-dark-700 border border-matrix-dark-600 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-matrix-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                  disabled
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-matrix-dark-700 border border-matrix-dark-600 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-matrix-green-500 focus:border-transparent"
                  placeholder="Create a password"
                  disabled
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-matrix-dark-700 border border-matrix-dark-600 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-matrix-green-500 focus:border-transparent"
                  placeholder="Confirm your password"
                  disabled
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-matrix-green-500 hover:bg-matrix-green-600 text-matrix-dark-900 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-matrix-green-500 focus:ring-offset-2 focus:ring-offset-matrix-dark-800"
              >
                Register (Coming Soon)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 