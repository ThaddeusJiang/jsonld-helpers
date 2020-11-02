// interface IAggregateRating {
//   '@type': 'AggregateRating';
//   ratingValue: number;
//   ratingCount?: number;
//   reviewCount?: number;
//   bestRating?: number;
//   worstRating?: number;
// }

interface IReviewRating {
  '@type': 'Rating';
  ratingValue: number;
}

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

interface IAuthor {
  '@type': 'Organization' | 'Person';
  name: string;
}

interface ISimpleReview {
  '@context': 'https://schema.org/';
  '@type': 'Review';
  itemReviewed: IRestaurant | Object;
  reviewRating: IReviewRating;
  name: string;
  author: IAuthor;
  reviewBody: string;
  publisher: IAuthor;
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
  author: IAuthor;
  publisher: IAuthor;
}): ISimpleReview => ({
  '@context': 'https://schema.org/',
  '@type': 'Review',
  itemReviewed,
  reviewRating: {
    '@type': 'Rating',
    ratingValue,
  },
  name,
  reviewBody,
  author,
  publisher,
});
