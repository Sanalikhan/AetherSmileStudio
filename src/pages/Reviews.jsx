import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiCheckCircle } from 'react-icons/hi';
import { reviews, stats } from '../data/reviews';

const Reviews = () => {
  const [filter, setFilter] = useState('all');

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter(review => review.treatment === filter);

  const treatments = ['all', ...new Set(reviews.map(r => r.treatment))];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <HiStar
        key={index}
        className={index < rating ? 'text-primary' : 'text-gray-600'}
      />
    ));
  };

  return (
    <div className="min-h-screen px-6 lg:px-16 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Patient <span className="text-primary">Reviews</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our patients have to say
          about their experience at Aether Smile Studio.
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {[
          { label: 'Average Rating', value: stats.averageRating, icon: '⭐' },
          { label: 'Total Reviews', value: stats.totalReviews.toLocaleString(), icon: '💬' },
          { label: '5-Star Reviews', value: `${stats.fiveStarPercentage}%`, icon: '🌟' },
          { label: 'Would Recommend', value: `${stats.recommendation}%`, icon: '👍' }
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-dark-600 border border-dark-500 rounded-2xl p-6 text-center hover:border-primary/30 transition-all"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {treatments.map((treatment) => (
          <button
            key={treatment}
            onClick={() => setFilter(treatment)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === treatment
                ? 'bg-primary text-dark-900'
                : 'bg-dark-600 text-gray-300 hover:bg-dark-500'
            }`}
          >
            {treatment === 'all' ? 'All Reviews' : treatment}
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="bg-dark-600 border border-dark-500 rounded-2xl p-6 hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-100">{review.name}</h3>
                  {review.verified && (
                    <HiCheckCircle className="text-primary" title="Verified Patient" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm mb-1">
                  {renderStars(review.rating)}
                </div>
                <p className="text-xs text-gray-400">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30">
                {review.treatment}
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{review.review}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-br from-dark-700 via-dark-600 to-dark-700 border border-dark-500 rounded-3xl p-16 mt-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          Ready to join our happy patients?
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Experience the care that has earned us thousands of 5-star reviews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-primary text-dark-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Book Your Visit
          </a>
          <a
            href="/treatments"
            className="bg-dark-600 text-gray-100 px-10 py-4 rounded-full font-bold text-lg hover:bg-dark-500 transition-all"
          >
            View Treatments
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Reviews;
