import {
  generateOrganization,
  generatePerson,
  IOrganization,
  IPerson,
} from './base';

export const generateArticle = ({
  headline,
  images,
  datePublished,
  dateModified,
  author,
  publisher,
}: {
  headline: string;
  images: string[];
  datePublished: string;
  dateModified: string;
  author: IPerson | IOrganization;
  publisher: IOrganization;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline,
  image: images,
  datePublished,
  dateModified,
  author: generatePerson(author),
  publisher: generateOrganization(publisher),
});
