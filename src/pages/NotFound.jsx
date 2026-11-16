import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiHome } from 'react-icons/hi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-100 mb-4">Page Not Found</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-dark-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          <HiHome />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
