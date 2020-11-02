import { generateSimpleReview } from '../src/data-types/review-snippet';

describe('review snippet', () => {
  it('simple review', () => {
    const data = {
      itemReviewed: {
        '@type': 'Restaurant',
        image: 'http://www.example.com/seafood-restaurant.jpg',
        name: 'Legal Seafood',
        servesCuisine: 'Seafood',
        priceRange: '$$$',
        telephone: '1234567',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 William St',
          addressLocality: 'New York',
          addressRegion: 'NY',
          postalCode: '10038',
          addressCountry: 'US',
        },
      },
      ratingValue: 4,
      name: 'A good seafood place.',
      author: {
        '@type': 'Person',
        name: 'Bob Smith',
      },
      reviewBody: 'The seafood is great.',
      publisher: {
        '@type': 'Organization',
        name: 'Washington Times',
      },
    };

    const jsonld = {
      '@context': 'https://schema.org/',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Restaurant',
        image: 'http://www.example.com/seafood-restaurant.jpg',
        name: 'Legal Seafood',
        servesCuisine: 'Seafood',
        priceRange: '$$$',
        telephone: '1234567',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 William St',
          addressLocality: 'New York',
          addressRegion: 'NY',
          postalCode: '10038',
          addressCountry: 'US',
        },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 4,
      },
      name: 'A good seafood place.',
      author: {
        '@type': 'Person',
        name: 'Bob Smith',
      },
      reviewBody: 'The seafood is great.',
      publisher: {
        '@type': 'Organization',
        name: 'Washington Times',
      },
    };
    // @ts-ignore
    expect(generateSimpleReview(data)).toEqual(jsonld);
  });
});
