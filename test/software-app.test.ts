import { generateSoftwareApp } from '../src';

describe('software-app', () => {
  it('basic', () => {
    const data = {
      name: 'Angry Birds',
      operatingSystem: 'ANDROID',
      applicationCategory: 'GameApplication',
      offer: {
        price: 1.0,
        priceCurrency: 'USD',
      },
    };

    const jsonld = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Angry Birds',
      operatingSystem: 'ANDROID',
      applicationCategory: 'GameApplication',
      // aggregateRating: {
      //   '@type': 'AggregateRating',
      //   ratingValue: '4.6',
      //   ratingCount: '8864',
      // },
      offers: {
        '@type': 'Offer',
        price: 1.0,
        priceCurrency: 'USD',
      },
    };

    // @ts-ignore FIXME: IOffer
    expect(generateSoftwareApp(data)).toEqual(jsonld);
  });
});
