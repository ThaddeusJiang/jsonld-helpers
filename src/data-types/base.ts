export interface IPerson {
  name: string;
}

export const generatePerson = ({ name }: IPerson) => ({
  '@type': 'Person',
  name,
});

export interface IOrganization {
  name: string;
  logoUrl?: string;
}

export const generateOrganization = ({ name, logoUrl }: IOrganization) => ({
  '@type': 'Organization',
  name,
  ...(logoUrl
    ? {
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
        },
      }
    : {}),
});
