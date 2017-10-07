import {Christmasmarket} from './christmasmarket';

export const MARKETS: Christmasmarket[] = [{
  id: 1,
  name: 'Altwiener Christkindlmarkt',
  position: { latitude: 0.0, longitude: 0.0 },
  start: new Date(2017, 10, 25),
  end: new Date(2017, 11, 20),
  address: 'Straße 12',
  zipcode: '1010',
  city: 'Wien',
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
