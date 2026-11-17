import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiAcademicCap, HiStar } from 'react-icons/hi';
import { teamMembers } from '../data/team';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen px-6 lg:px-16 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t('team.title')} <span className="text-primary">{t('team.titleHighlight')}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('team.subtitle')}
        </p>

        {/* Disclaimer */}
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-sm text-gray-400 italic bg-dark-700/50 border border-dark-500 rounded-lg px-6 py-3 text-center">
            <strong>{t('team.disclaimer')}</strong> {t('team.disclaimerText')}
          </p>
        </div>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-dark-600 border border-dark-500 rounded-2xl overflow-hidden hover:border-primary/30 transition-all group cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <div className="h-80 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-1">{member.name}</h3>
              <p className="text-primary font-semibold mb-2">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-700 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-primary font-semibold text-lg mb-2">
                  {selectedMember.role}
                </p>
                <p className="text-gray-300 mb-6">{selectedMember.specialty}</p>

                <p className="text-gray-300 mb-6">{selectedMember.bio}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-3 flex items-center">
                    <HiAcademicCap className="mr-2 text-primary" />
                    {t('team.education')}
                  </h3>
                  <ul className="space-y-2">
                    {selectedMember.education.map((edu, index) => (
                      <li key={index} className="text-gray-300 text-sm pl-4 border-l-2 border-primary/30">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-3 flex items-center">
                    <HiStar className="mr-2 text-primary" />
                    {t('team.achievements')}
                  </h3>
                  <ul className="space-y-2">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-300 text-sm pl-4 border-l-2 border-primary/30">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-8 pb-8">
              <button
                onClick={() => setSelectedMember(null)}
                className="w-full bg-dark-600 text-gray-100 py-4 rounded-xl font-bold hover:bg-dark-500 transition-all"
              >
                {t('team.close')}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-br from-dark-700 via-dark-600 to-dark-700 border border-dark-500 rounded-3xl p-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">
          {t('team.values.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: t('team.values.patientCare.title'),
              description: t('team.values.patientCare.description')
            },
            {
              title: t('team.values.learning.title'),
              description: t('team.values.learning.description')
            },
            {
              title: t('team.values.integrity.title'),
              description: t('team.values.integrity.description')
            }
          ].map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurTeam;
