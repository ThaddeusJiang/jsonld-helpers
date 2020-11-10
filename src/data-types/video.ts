export const generateVideo = ({
  name,
  description,
  thumbnailUrls,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  regionsAllowed,
}: {
  name: string;
  description: string;
  thumbnailUrls: string[];
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  regionsAllowed?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name,
  description,
  thumbnailUrl: thumbnailUrls,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  // interactionStatistic: {
  //   '@type': 'InteractionCounter',
  //   interactionType: { '@type': 'http://schema.org/WatchAction' },
  //   userInteractionCount: 5647018,
  // },
  regionsAllowed,
});
