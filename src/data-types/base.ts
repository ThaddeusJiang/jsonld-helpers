export interface IPerson {
  name: string;
}

export const generatePerson = ({ name }: IPerson) => ({
  '@type': 'Person',
  name,
});

export interface IOrganization {
  name: string;
  url?: string;
  logoUrl?: string;
}

export const generateOrganization = ({
  name,
  logoUrl,
  url,
}: IOrganization) => ({
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
  url,
});

export interface IOffer {
  url?: string;
  price: number;
  priceCurrency: string; // 用于描述商品价格的货币，采用由三个字母表示的 ISO 4217 格式。
  priceValidUntil?: string;
  availability?:
    | 'Discontinued'
    | 'InStock'
    | 'InStoreOnly'
    | 'LimitedAvailability'
    | 'OnlineOnly'
    | 'OutOfStock'
    | 'PreOrder'
    | 'PreSale'
    | 'SoldOut';
  validFrom?: string;
}

export const generateOffer = (data: IOffer) => ({
  ...data,
  '@type': 'Offer',
  availability: `https://schema.org/${data?.availability ?? ''}`,
});
