/**
 * AggregateOffer 是一种 Offer，代表其他优惠的汇总。在商品中标记优惠汇总时
 */
// interface IAggregateOffer {
//   lowPrice: number;
//   priceCurrency: string;
//   highPrice?: number;
//   offerCount?: number;
// }

import { generateOffer, IOffer } from './base';

export const generateSingleProduct = ({
  name,
  description,
  brand,
  images,
  offer,
}: {
  name: string;
  description: string;
  brand: string;
  images: string[]; // 1x1 4x3 16x9
  offer: IOffer;
}) => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name,
  image: images,
  description,
  sku: '0446310786',
  mpn: '925872',
  brand: {
    '@type': 'Brand',
    name: brand,
  },
  // review / aggregateRating / offers
  // review: {
  //   '@type': 'Review',
  //   reviewRating: {
  //     '@type': 'Rating',
  //     ratingValue: '4',
  //     bestRating: '5',
  //   },
  //   author: {
  //     '@type': 'Person',
  //     name: 'Fred Benson',
  //   },
  // },
  // aggregateRating: {
  //   '@type': 'AggregateRating',
  //   ratingValue: '4.4',
  //   reviewCount: '89',
  // },
  offers: generateOffer(offer),
});
