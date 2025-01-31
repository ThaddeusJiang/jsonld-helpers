import { generateEvent } from '../src';

describe('Event', () => {
  it('basic event', () => {
    const data = {
      name: 'The Adventures of Kira and Morrison',
      startDate: '2025-07-21T19:00-05:00',
      endDate: '2025-07-21T23:00-05:00',
      eventAttendanceMode: 'OfflineEventAttendanceMode',
      eventStatus: 'EventScheduled',
      location: {
        name: 'Snickerpark Stadium',
        streetAddress: '100 West Snickerpark Dr',
        addressLocality: 'Snickertown',
        postalCode: '19019',
        addressRegion: 'PA',
        addressCountry: 'US',
      },
      images: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      description:
        'The Adventures of Kira and Morrison is coming to Snickertown in a can’t miss performance.',
      offer: {
        url: 'https://www.example.com/event_offer/12345_201803180430',
        price: 30,
        priceCurrency: 'USD',
        availability: 'InStock',
        validFrom: '2024-05-21T12:00',
      },
      performer: {
        '@type': 'PerformingGroup',
        name: 'Kira and Morrison',
      },
      organizer: {
        name: 'Kira and Morrison Music',
        url: 'https://kiraandmorrisonmusic.com',
      },
    };

    const jsonld = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'The Adventures of Kira and Morrison',
      startDate: '2025-07-21T19:00-05:00',
      endDate: '2025-07-21T23:00-05:00',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'Snickerpark Stadium',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '100 West Snickerpark Dr',
          addressLocality: 'Snickertown',
          postalCode: '19019',
          addressRegion: 'PA',
          addressCountry: 'US',
        },
      },
      image: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      description:
        'The Adventures of Kira and Morrison is coming to Snickertown in a can’t miss performance.',
      offers: {
        '@type': 'Offer',
        url: 'https://www.example.com/event_offer/12345_201803180430',
        price: 30,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-05-21T12:00',
      },
      performer: {
        '@type': 'PerformingGroup',
        name: 'Kira and Morrison',
      },
      organizer: {
        '@type': 'Organization',
        name: 'Kira and Morrison Music',
        url: 'https://kiraandmorrisonmusic.com',
      },
    };

    // @ts-ignore
    expect(generateEvent(data)).toEqual(jsonld);
  });
});
