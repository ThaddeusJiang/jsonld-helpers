export const generateLogo = ({ url, logo }: { url: string; logo: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url,
  logo,
});
