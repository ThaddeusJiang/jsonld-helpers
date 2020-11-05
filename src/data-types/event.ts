import {
  generateOffer,
  generateOrganization,
  IOffer,
  IOrganization,
  IPerson,
} from './base';

interface ILocation {
  name: string;
  addressCountry: string;
  addressRegion: string;
  postalCode: string;
  addressLocality: string;
  streetAddress: string;
}

type IEventStatus =
  | 'EventCancelled'
  | 'EventMovedOnline'
  | 'EventPostponed'
  | 'EventRescheduled';
type IEventAttendanceMode =
  | 'OfflineEventAttendanceMode'
  | 'OnlineEventAttendanceMode'
  | 'OnlineEventAttendanceMode';

export const generateEvent = ({
  name,
  description,
  startDate,
  endDate,
  location,
  images,
  offer,
  organizer,
  eventStatus,
  eventAttendanceMode,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: ILocation;
  images: string[];
  offer: IOffer;
  organizer: IOrganization | IPerson;
  eventStatus: IEventStatus;
  eventAttendanceMode: IEventAttendanceMode;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name,
  description,
  startDate,
  endDate,
  eventAttendanceMode: `https://schema.org/${eventAttendanceMode}`,
  eventStatus: `https://schema.org/${eventStatus}`,
  location: {
    '@type': 'Place',
    name: location.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      postalCode: location.postalCode,
      addressRegion: location.addressRegion,
      addressCountry: location.addressCountry,
    },
  },
  image: images,
  offers: generateOffer(offer),
  performer: {
    '@type': 'PerformingGroup',
    name: 'Kira and Morrison',
  },
  // TODO:
  organizer: generateOrganization(organizer),
});
