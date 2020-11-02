import { generateArticle } from '../src/data-types/article';

describe('Article', () => {
  it('AMP', () => {
    const data = {
      headline: 'Article headline',
      images: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      datePublished: '2015-02-05T08:00:00+08:00',
      dateModified: '2015-02-05T09:20:00+08:00',
      author: {
        name: 'John Doe',
      },
      publisher: {
        name: 'Google',
        logoUrl: 'https://google.com/logo.jpg',
      },
    };

    const jsonld = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: 'Article headline',
      image: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      datePublished: '2015-02-05T08:00:00+08:00',
      dateModified: '2015-02-05T09:20:00+08:00',
      author: {
        '@type': 'Person',
        name: 'John Doe',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Google',
        logo: {
          '@type': 'ImageObject',
          url: 'https://google.com/logo.jpg',
        },
      },
    };

    expect(generateArticle(data)).toEqual(jsonld);
  });
});
