import { treatments } from '../data/treatments';

export const getTranslatedTreatments = (t) => {
  return [
    {
      ...treatments[0],
      title: t('treatments.items.teethWhitening.title'),
      description: t('treatments.items.teethWhitening.description'),
      fullDescription: t('treatments.items.teethWhitening.fullDescription'),
      duration: t('treatments.items.teethWhitening.duration'),
      benefits: t('treatments.items.teethWhitening.benefits', { returnObjects: true })
    },
    {
      ...treatments[1],
      title: t('treatments.items.invisibleAligners.title'),
      description: t('treatments.items.invisibleAligners.description'),
      fullDescription: t('treatments.items.invisibleAligners.fullDescription'),
      duration: t('treatments.items.invisibleAligners.duration'),
      benefits: t('treatments.items.invisibleAligners.benefits', { returnObjects: true })
    },
    {
      ...treatments[2],
      title: t('treatments.items.dentalImplants.title'),
      description: t('treatments.items.dentalImplants.description'),
      fullDescription: t('treatments.items.dentalImplants.fullDescription'),
      duration: t('treatments.items.dentalImplants.duration'),
      benefits: t('treatments.items.dentalImplants.benefits', { returnObjects: true })
    },
    {
      ...treatments[3],
      title: t('treatments.items.teethCleaning.title'),
      description: t('treatments.items.teethCleaning.description'),
      fullDescription: t('treatments.items.teethCleaning.fullDescription'),
      duration: t('treatments.items.teethCleaning.duration'),
      benefits: t('treatments.items.teethCleaning.benefits', { returnObjects: true })
    },
    {
      ...treatments[4],
      title: t('treatments.items.rootCanal.title'),
      description: t('treatments.items.rootCanal.description'),
      fullDescription: t('treatments.items.rootCanal.fullDescription'),
      duration: t('treatments.items.rootCanal.duration'),
      benefits: t('treatments.items.rootCanal.benefits', { returnObjects: true })
    },
    {
      ...treatments[5],
      title: t('treatments.items.cosmetic.title'),
      description: t('treatments.items.cosmetic.description'),
      fullDescription: t('treatments.items.cosmetic.fullDescription'),
      duration: t('treatments.items.cosmetic.duration'),
      benefits: t('treatments.items.cosmetic.benefits', { returnObjects: true })
    }
  ];
};
