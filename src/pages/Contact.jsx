import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCheckCircle } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
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
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              Feel free to contact us through any of these channels, or use the contact form.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-dark-600 border border-dark-500 rounded-2xl hover:border-primary/30 transition-all">
              <div className="bg-primary/10 p-3 rounded-xl">
                <HiPhone className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-100 mb-1">Phone</h3>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
                <p className="text-sm text-gray-400 mt-1">Mon-Fri, 8AM - 6PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-dark-600 border border-dark-500 rounded-2xl hover:border-primary/30 transition-all">
              <div className="bg-primary/10 p-3 rounded-xl">
                <HiMail className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-100 mb-1">Email</h3>
                <a href="mailto:info@aethersmile.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@aethersmile.com
                </a>
                <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-dark-600 border border-dark-500 rounded-2xl hover:border-primary/30 transition-all">
              <div className="bg-primary/10 p-3 rounded-xl">
                <HiLocationMarker className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-100 mb-1">Location</h3>
                <p className="text-gray-300">123 Dental Street</p>
                <p className="text-gray-300">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-dark-600 border border-dark-500 rounded-2xl hover:border-primary/30 transition-all">
              <div className="bg-primary/10 p-3 rounded-xl">
                <HiClock className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-100 mb-1">Office Hours</h3>
                <div className="text-gray-300 space-y-1 text-sm">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 bg-dark-600 border border-dark-500 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476819895207!2d-73.98823492346494!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-dark-600 border border-dark-500 rounded-2xl p-8"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <HiCheckCircle className="mx-auto text-primary text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-300">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

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
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-gray-100 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-dark-900 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
