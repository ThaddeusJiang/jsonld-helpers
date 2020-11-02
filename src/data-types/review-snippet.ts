// interface IAggregateRating {
//   '@type': 'AggregateRating';
//   ratingValue: number;
//   ratingCount?: number;
//   reviewCount?: number;
//   bestRating?: number;
//   worstRating?: number;
// }
import {
  generateOrganization,
  generatePerson,
  IOrganization,
  IPerson,
} from './base';

// interface IReviewRating {
//   '@type': 'Rating';
//   ratingValue: number;
// }

interface IAddress {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface IRestaurant {
  '@type': 'Restaurant';
  image: string;
  name: string;
  servesCuisine: string;
  priceRange: string;
  telephone: string;
  address: IAddress;
}

export const generateSimpleReview = ({
  itemReviewed,
  ratingValue,
  name,
  reviewBody,
  author,
  publisher,
}: {
  itemReviewed: IRestaurant | Object;
  ratingValue: number;
  name: string;
  reviewBody: string;
  author: IPerson | IOrganization;
  publisher: IOrganization;
}) => ({
  '@context': 'https://schema.org/',
  '@type': 'Review',
  itemReviewed,
  reviewRating: {
    '@type': 'Rating',
    ratingValue,
  },
  name,
  reviewBody,
  author: generatePerson(author),
  publisher: generateOrganization(publisher),
});
