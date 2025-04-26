import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Code, User, Users } from 'lucide-react';
import MatrixLogo from '../shared/MatrixLogo';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const headerClass = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-matrix-dark-900/95 backdrop-blur-sm shadow-lg shadow-matrix-green-500/10' : 'bg-transparent'
  }`;

  return (
    <header className={headerClass}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MatrixLogo className="h-10 w-10" />
            <span className="text-2xl font-display font-bold text-white">
              MATRIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/contests" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Contests
            </NavLink>
            <NavLink 
              to="/tech-news" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Tech News
            </NavLink>
            <NavLink 
              to="/project-ideas" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Project Ideas
            </NavLink>
            <NavLink 
              to="/members" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Members
            </NavLink>
          </nav>

          {/* Auth buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-1 text-matrix-green-400 hover:text-matrix-green-300 transition-colors"
                >
                  <User size={18} />
                  <span>{user.username}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="btn-outline text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/register" className="btn-primary text-sm">
                Register
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white hover:text-matrix-green-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-matrix-dark-800/95 backdrop-blur-sm animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-2">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/contests" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Contests
            </NavLink>
            <NavLink 
              to="/tech-news" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Tech News
            </NavLink>
            <NavLink 
              to="/project-ideas" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Project Ideas
            </NavLink>
            <NavLink 
              to="/members" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Members
            </NavLink>
            
            <div className="pt-2 mt-2 border-t border-matrix-dark-700 flex flex-col space-y-2">
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    className="nav-link flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={18} />
                    <span>{user.username}</span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="btn-outline text-sm w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/register" 
                  className="btn-primary text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;