import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-500 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Aether Smile Studio
            </h3>
            <p className="text-gray-300 text-sm">
              Modern dentistry for confident smiles. Experience gentle care with advanced technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="text-gray-300 hover:text-primary transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="text-gray-300 hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>123 Dental Street</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@aethersmile.com" className="hover:text-primary transition-colors">
                  info@aethersmile.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Monday - Friday: 8AM - 6PM</li>
              <li>Saturday: 9AM - 4PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#"
            className="bg-dark-600 p-3 rounded-full text-gray-200 hover:bg-primary hover:text-dark-900 transition-all"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="bg-dark-600 p-3 rounded-full text-gray-200 hover:bg-primary hover:text-dark-900 transition-all"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="bg-dark-600 p-3 rounded-full text-gray-200 hover:bg-primary hover:text-dark-900 transition-all"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="#"
            className="bg-dark-600 p-3 rounded-full text-gray-200 hover:bg-primary hover:text-dark-900 transition-all"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © {currentYear} Aether Smile Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
