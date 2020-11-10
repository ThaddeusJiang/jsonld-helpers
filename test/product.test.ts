import { generateSingleProduct } from '../src';

describe('product', () => {
  it('single product', () => {
    const data = {
      name: 'Executive Anvil',
      images: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      description:
        "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      sku: '0446310786',
      mpn: '925872',
      brand: 'ACME',
      // review: {
      //   '@type': 'Review',
      //   reviewRating: {
      //     '@type': 'Rating',
      //     ratingValue: '4',
      //     bestRating: '5',
      //   },
      //   author: {
      //     '@type': 'Person',
      //     name: 'Fred Benson',
      //   },
      // },
      // aggregateRating: {
      //   '@type': 'AggregateRating',
      //   ratingValue: '4.4',
      //   reviewCount: '89',
      // },
      offer: {
        url: 'https://example.com/anvil',
        price: 119.99,
        priceCurrency: 'USD',
        priceValidUntil: '2020-11-20',
        availability: 'InStock',
      },
    };

    const jsonld = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: 'Executive Anvil',
      image: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      description:
        "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      sku: '0446310786',
      mpn: '925872',
      brand: {
        '@type': 'Brand',
        name: 'ACME',
      },
      // review: {
      //   '@type': 'Review',
      //   reviewRating: {
      //     '@type': 'Rating',
      //     ratingValue: '4',
      //     bestRating: '5',
      //   },
      //   author: {
      //     '@type': 'Person',
      //     name: 'Fred Benson',
      //   },
      // },
      // aggregateRating: {
      //   '@type': 'AggregateRating',
      //   ratingValue: '4.4',
      //   reviewCount: '89',
      // },
      offers: {
        '@type': 'Offer',
        url: 'https://example.com/anvil',
        price: 119.99,
        priceCurrency: 'USD',
        priceValidUntil: '2020-11-20',
        availability: 'https://schema.org/InStock',
      },
    };
    // @ts-ignore
    expect(generateSingleProduct(data)).toEqual(jsonld);
  });
});
