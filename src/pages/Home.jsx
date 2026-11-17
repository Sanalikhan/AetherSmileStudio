import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiStar } from 'react-icons/hi';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { getTranslatedTreatments } from '../utils/translatedData';

const Home = ({ onBookingClick }) => {
  const { t } = useTranslation();
  const treatments = getTranslatedTreatments(t);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-76px)] grid lg:grid-cols-2 gap-12 items-center px-6 lg:px-16 py-20 bg-gradient-radial from-dark-700 via-dark-800 to-dark-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-block border border-primary/30 text-primary px-4 py-2 rounded-full text-sm bg-primary/5">
            ● {t('hero.badge')}
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t('hero.title')}{' '}
            <span className="text-primary">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-lg">
            {t('hero.subtitle')}
          </p>

          <button
            onClick={onBookingClick}
            className="bg-primary text-dark-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            {t('hero.bookButton')}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="relative h-[500px] lg:h-[560px] rounded-3xl overflow-hidden border border-dark-500 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
            alt="Dental care"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-4 lg:left-6 bottom-10 bg-dark-800/90 backdrop-blur-xl border border-dark-500 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-1 text-primary text-3xl font-bold mb-1">
              4.9 <HiStar className="text-2xl" />
            </div>
            <p className="text-sm text-gray-300">{t('hero.rating')}</p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="px-6 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { value: '12k+', label: t('stats.patients') },
            { value: '4.9', label: t('stats.rating') },
            { value: '15 yrs', label: t('stats.experience') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-dark-600 border border-dark-500 rounded-2xl p-10 text-center hover:border-primary/30 transition-all"
            >
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="px-6 lg:px-16 py-20 bg-dark-700">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-100"
        >
          {t('treatments.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.slice(0, 3).map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-dark-600 border border-dark-500 rounded-2xl overflow-hidden hover:border-primary/30 transition-all group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{treatment.title}</h3>
                <p className="text-gray-300">{treatment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-6 lg:mx-16 my-20 p-16 rounded-3xl text-center bg-gradient-to-br from-dark-700 via-dark-600 to-dark-700 border border-dark-500">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
            {t('cta.title')}
          </h2>
          <p className="text-gray-300 text-lg">
            {t('cta.subtitle')}
          </p>
          <button
            onClick={onBookingClick}
            className="bg-primary text-dark-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            {t('cta.button')}
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
