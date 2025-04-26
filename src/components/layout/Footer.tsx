import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import MatrixLogo from '../shared/MatrixLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-matrix-dark-900 border-t border-matrix-dark-700 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MatrixLogo className="h-10 w-10" />
              <span className="text-2xl font-display font-bold text-white">
                MATRIX
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              The Coding Club of MANIT Bhopal, driven by MCA students. Building a community of passionate coders and tech enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/matrix-coding-club" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-matrix-green-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/matrixthetechnicalclub/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-matrix-green-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:matrix@manit.ac.in" 
                className="text-gray-400 hover:text-matrix-green-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://instagram.com/matrix_coding_club" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-matrix-green-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-matrix-green-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/contests" className="text-gray-400 hover:text-matrix-green-500 transition-colors">Contests</Link>
              </li>
              <li>
                <Link to="/tech-news" className="text-gray-400 hover:text-matrix-green-500 transition-colors">Tech News</Link>
              </li>
              <li>
                <Link to="/project-ideas" className="text-gray-400 hover:text-matrix-green-500 transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/members" className="text-gray-400 hover:text-matrix-green-500 transition-colors">Members</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-matrix-green-500 transition-colors">GeeksforGeeks</a>
              </li>
              <li>
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-matrix-green-500 transition-colors">LeetCode</a>
              </li>
              <li>
                <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-matrix-green-500 transition-colors">HackerRank</a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-matrix-green-500 transition-colors">GitHub</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">MANIT Bhopal</h4>
            <address className="text-gray-400 not-italic">
              Department of MCA<br />
              Maulana Azad National Institute of Technology<br />
              Bhopal, Madhya Pradesh - 462003<br />
              India
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-matrix-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Matrix Coding Club. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with <span className="text-matrix-green-500">♥</span> by Sachin Jha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;