import { useTranslation } from 'react-i18next';
import { HiGlobeAlt } from 'react-icons/hi';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-dark-500 hover:border-primary/30 transition-all bg-dark-700 hover:bg-dark-600"
      aria-label="Switch language"
    >
      <HiGlobeAlt className="text-primary text-xl" />
      <span className="text-sm font-medium text-gray-200 uppercase">
        {i18n.language === 'en' ? 'TR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
