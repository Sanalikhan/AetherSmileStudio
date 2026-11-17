import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiX, HiCheckCircle } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show confirmation message
    setIsSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        treatment: '',
        notes: '',
      });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-dark-700 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-dark-500"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-dark-500">
            <h2 className="text-2xl font-bold text-gray-100">{t('booking.title')}</h2>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              <HiX size={28} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <HiCheckCircle className="mx-auto text-primary text-6xl mb-4" />
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {t('booking.success.title')}
                </h3>
                <p className="text-gray-300">
                  {t('booking.success.message')}
                </p>
                <p className="text-gray-400 mt-4 text-sm">
                  {formData.date} - {formData.time}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    {t('booking.form.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                    placeholder={t('booking.form.namePlaceholder')}
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {t('booking.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                      placeholder={t('booking.form.emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {t('booking.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                      placeholder={t('booking.form.phonePlaceholder')}
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {t('booking.form.date')} *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      {t('booking.form.time')} *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">{t('booking.form.time')}</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Treatment */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    {t('booking.form.treatment')} *
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">{t('booking.form.treatmentPlaceholder')}</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Invisible Aligners">Invisible Aligners</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    {t('booking.form.message')}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder={t('booking.form.messagePlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-dark-900 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  {t('booking.form.submit')}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  {t('booking.form.terms')}
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
