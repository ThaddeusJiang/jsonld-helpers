import { generateOffer, IOffer } from './base';

type IApplicationCategory =
  | 'GameApplication'
  | 'SocialNetworkingApplication'
  | 'TravelApplication'
  | 'ShoppingApplication'
  | 'SportsApplication'
  | 'LifestyleApplication'
  | 'BusinessApplication'
  | 'DesignApplication'
  | 'DeveloperApplication'
  | 'DriverApplication'
  | 'EducationalApplication'
  | 'HealthApplication'
  | 'FinanceApplication'
  | 'SecurityApplication'
  | 'BrowserApplication'
  | 'CommunicationApplication'
  | 'DesktopEnhancementApplication'
  | 'EntertainmentApplication'
  | 'MultimediaApplication'
  | 'HomeApplication'
  | 'UtilitiesApplication'
  | 'ReferenceApplication';

export const generateSoftwareApp = ({
  name,
  operatingSystem,
  applicationCategory,
  // aggregateRating,
  offer,
}: {
  name: string;
  operatingSystem: string;
  applicationCategory: IApplicationCategory;
  // aggregateRating:
  offer: IOffer;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  operatingSystem,
  applicationCategory,
  // aggregateRating: {
  //   '@type': 'AggregateRating',
  //   ratingValue: '4.6',
  //   ratingCount: '8864',
  // },
  offers: generateOffer(offer),
});
