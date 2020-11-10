import { generateVideo } from '../src';

describe('video', () => {
  it('basic', () => {
    const data = {
      name: 'Introducing the self-driving bicycle in the Netherlands',
      description:
        'This spring, Google is introducing the self-driving bicycle in Amsterdam, the world’s premier cycling city. The Dutch cycle more than any other nation in the world, almost 900 kilometres per year per person, amounting to over 15 billion kilometres annually. The self-driving bicycle enables safe navigation through the city for Amsterdam residents, and furthers Google’s ambition to improve urban mobility with technology. Google Netherlands takes enormous pride in the fact that a Dutch team worked on this innovation that will have great impact in their home country.',
      thumbnailUrls: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      uploadDate: '2016-03-31T08:00:00+08:00',
      duration: 'PT1M54S',
      contentUrl: 'https://www.example.com/video/123/file.mp4',
      embedUrl: 'https://www.example.com/embed/123',
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'http://schema.org/WatchAction' },
        userInteractionCount: 5647018,
      },
      regionsAllowed: 'NL',
    };

    const jsonld = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Introducing the self-driving bicycle in the Netherlands',
      description:
        'This spring, Google is introducing the self-driving bicycle in Amsterdam, the world’s premier cycling city. The Dutch cycle more than any other nation in the world, almost 900 kilometres per year per person, amounting to over 15 billion kilometres annually. The self-driving bicycle enables safe navigation through the city for Amsterdam residents, and furthers Google’s ambition to improve urban mobility with technology. Google Netherlands takes enormous pride in the fact that a Dutch team worked on this innovation that will have great impact in their home country.',
      thumbnailUrl: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      uploadDate: '2016-03-31T08:00:00+08:00',
      duration: 'PT1M54S',
      contentUrl: 'https://www.example.com/video/123/file.mp4',
      embedUrl: 'https://www.example.com/embed/123',
      // interactionStatistic: {
      //   '@type': 'InteractionCounter',
      //   interactionType: { '@type': 'http://schema.org/WatchAction' },
      //   userInteractionCount: 5647018,
      // },
      regionsAllowed: 'NL',
    };

    expect(generateVideo(data)).toEqual(jsonld);
  });
});
