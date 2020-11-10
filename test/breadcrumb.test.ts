import { generateBreadcrumb } from '../src';

describe('breadcrumb', () => {
  it('single breadcrumb', () => {
    const data = [
      {
        position: 1,
        text: 'Books',
        link: 'https://example.com/books',
      },
      {
        position: 2,
        text: 'Science Fiction',
        link: 'https://example.com/books/sciencefiction',
      },
      {
        position: 3,
        text: 'Award Winners',
      },
    ];

    const jsonld = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Books',
          item: 'https://example.com/books',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Science Fiction',
          item: 'https://example.com/books/sciencefiction',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Award Winners',
        },
      ],
    };

    // @ts-ignore
    expect(generateBreadcrumb({ items: data })).toEqual(jsonld);
  });
});
