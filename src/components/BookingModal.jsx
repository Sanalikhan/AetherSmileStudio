import { useState } from 'react';
import { HiX, HiCheckCircle } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl font-bold text-gray-100">Book Your Appointment</h2>
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
                  Booking Confirmed!
                </h3>
                <p className="text-gray-300">
                  Thank you, {formData.name}! We'll send a confirmation email to {formData.email}.
                </p>
                <p className="text-gray-400 mt-4 text-sm">
                  Your appointment is scheduled for {formData.date} at {formData.time}.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Preferred Date *
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
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a time</option>
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
                    Treatment Type *
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a treatment</option>
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
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Any special requirements or concerns..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-dark-900 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Confirm Booking
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our terms and privacy policy.
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
