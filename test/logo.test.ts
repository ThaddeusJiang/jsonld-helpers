import { generateLogo } from '../src/data-types/logo';

describe('logo', () => {
  it('basic', () => {
    const data = {
      url: 'http://www.example.com',
      logo: 'http://www.example.com/images/logo.png',
    };

    const jsonld = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'http://www.example.com',
      logo: 'http://www.example.com/images/logo.png',
    };

    expect(generateLogo(data)).toEqual(jsonld);
  });
});
