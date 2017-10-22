import {Christmasmarket} from './christmasmarket';

export const MARKETS: Christmasmarket[] = [{
  id: 1,
  name: 'Altwiener Christkindlmarkt',
  position: { latitude: 48.208982, longitude: 16.373213},
  start: new Date(2017, 10, 25),
  end: new Date(2017, 11, 20),
  address: 'Straße 12',
  postalCode: '1010',
  city: 'Wien',
  rating: 4.3,
  numberOfRatings: 13,
  ratingPrice: 3.2,
  openingHours: [
    { dayOfWeek: 0, open: true, start: 600, end: 1200 },
    { dayOfWeek: 1, open: true, start: 600, end: 1200 },
    { dayOfWeek: 2, open: true, start: 600, end: 1200 },
    { dayOfWeek: 3, open: true, start: 600, end: 1200 },
    { dayOfWeek: 4, open: true, start: 600, end: 1200 },
    { dayOfWeek: 5, open: true, start: 600, end: 1200 },
    { dayOfWeek: 6, open: true, start: 600, end: 1200 }
  ],
  extraordinaryOpeningHours: [{
    date: new Date(2017, 11, 6),
    open: false,
    start: null,
    end: null
  },
    {
      date: new Date(2017, 11, 7),
      open: true,
      start: 600,
      end: 720
    }]
},
{
  id: 2,
  name: 'Am Hof oder so',
  position: { latitude: 48.208912, longitude: 16.373293},
  start: new Date(2017, 10, 25),
  end: new Date(2017, 11, 20),
  address: 'Straße 12',
  postalCode: '1010',
  city: 'Wien',
  rating: 4.3,
  numberOfRatings: 13,
  ratingPrice: 3.2,
  openingHours: [
    { dayOfWeek: 0, open: true, start: 600, end: 1200 },
    { dayOfWeek: 1, open: true, start: 600, end: 1200 },
    { dayOfWeek: 2, open: true, start: 600, end: 1200 },
    { dayOfWeek: 3, open: true, start: 600, end: 1200 },
    { dayOfWeek: 4, open: true, start: 600, end: 1200 },
    { dayOfWeek: 5, open: true, start: 600, end: 1200 },
    { dayOfWeek: 6, open: true, start: 600, end: 1200 }
  ],
  extraordinaryOpeningHours: [{
    date: new Date(2017, 11, 6),
    open: false,
    start: null,
    end: null
  },
    {
      date: new Date(2017, 11, 7),
      open: true,
      start: 600,
      end: 720
    }]
}
];
