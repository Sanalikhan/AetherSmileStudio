import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = ({ onBookingClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-dark-900 border-b border-dark-500 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            Aether Smile Studio
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Book Button */}
          <button
            onClick={onBookingClick}
            className="hidden md:block bg-primary text-dark-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Book a Visit
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-100 text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-rise">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive(item.path) ? 'text-primary' : 'text-gray-200 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onBookingClick();
              }}
              className="w-full bg-primary text-dark-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all"
            >
              Book a Visit
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
