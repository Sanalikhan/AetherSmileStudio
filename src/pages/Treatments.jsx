import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiCheckCircle, HiClock } from 'react-icons/hi';
import { getTranslatedTreatments } from '../utils/translatedData';

const Treatments = ({ onBookingClick }) => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const { t } = useTranslation();
  const treatments = getTranslatedTreatments(t);

  return (
    <div className="min-h-screen px-6 lg:px-16 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t('nav.treatments')} <span className="text-primary"></span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('treatments.pageSubtitle')}
        </p>
      </motion.div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {treatments.map((treatment, index) => (
          <motion.div
            key={treatment.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-dark-600 border border-dark-500 rounded-2xl overflow-hidden hover:border-primary/30 transition-all group cursor-pointer"
            onClick={() => setSelectedTreatment(treatment)}
          >
            <div className="h-56 overflow-hidden">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-2">{treatment.title}</h3>
              <p className="text-gray-300 mb-4">{treatment.description}</p>
              <div className="flex items-center text-primary text-sm">
                <HiClock className="mr-2" />
                <span>{treatment.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Modal */}
      {selectedTreatment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedTreatment(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-700 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-80 overflow-hidden">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-100 mb-4">
                {selectedTreatment.title}
              </h2>
              <div className="flex items-center text-primary mb-6">
                <HiClock className="mr-2 text-xl" />
                <span className="text-lg">{selectedTreatment.duration}</span>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                {selectedTreatment.fullDescription}
              </p>

              <h3 className="text-2xl font-bold text-gray-100 mb-4">{t('treatments.benefits')}</h3>
              <ul className="space-y-3 mb-8">
                {selectedTreatment.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <HiCheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedTreatment(null);
                    onBookingClick();
                  }}
                  className="flex-1 bg-primary text-dark-900 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all"
                >
                  {t('treatments.bookTreatment')}
                </button>
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="px-8 bg-dark-600 text-gray-100 py-4 rounded-xl font-bold hover:bg-dark-500 transition-all"
                >
                  {t('treatments.close')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-br from-dark-700 via-dark-600 to-dark-700 border border-dark-500 rounded-3xl p-16 mt-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          {t('treatments.consultation.title')}
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          {t('treatments.consultation.subtitle')}
        </p>
        <button
          onClick={onBookingClick}
          className="bg-primary text-dark-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          {t('treatments.consultation.button')}
        </button>
      </motion.div>
    </div>
  );
};

export default Treatments;
