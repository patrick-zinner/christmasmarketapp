import {} from 'jasmine';
import { OpeninghoursService } from "./openinghoursservice";
import { Christmasmarket } from "../model/christmasmarket";

describe('OpeninghoursService', () => {

  let service: OpeninghoursService;
  let market: Christmasmarket;

  beforeEach(() => {
    service = new OpeninghoursService();
    market = {
      id: 1,
      name: 'test',
      position: { latitude: 0.0, longitude: 0.0 },
      start: new Date(2017, 11, 5),
      end: new Date(2017, 11, 20),
      openingHours: [{
        dayOfWeek: 3, open: true, start: 600, end: 1200
      }],
      extraordinaryOpeningHours: [{
        date: new Date(2017, 11, 6),
        open: false,
        start: null,
        end: null,
      }]
    };
  });

  it('should find the extraordinary openinghours', () => {
    let serviceResult = service.getOpeningHoursForTime(market, new Date(2017, 11, 6));
    expect(serviceResult.open).toBeFalsy();
  });

  it('should find the normal openinghours', () => {
    let serviceResult = service.getOpeningHoursForTime(market, new Date(2017, 11, 13));
    expect(serviceResult.open).toBeTruthy();
  });

  it('should return false because 2017-12-06 has extraordinary opening hours', () => {
    let serviceResult = service.isOpenAt(market, new Date(2017, 11, 6, 12,0,0));
    expect(serviceResult).toBeFalsy();
  });

  it('should return true because 12pm is within the opening hours', () => {
    let serviceResult = service.isOpenAt(market, new Date(2017, 11, 13,12,0,0));
    expect(serviceResult).toBeTruthy();
  });

  it('should return true because 9am is not within the opening hours', () => {
    let serviceResult = service.isOpenAt(market, new Date(2017, 11, 13,9,0,0));
    expect(serviceResult).toBeFalsy();
  });

  it('should return true because 11pm is not within the opening hours', () => {
    let serviceResult = service.isOpenAt(market, new Date(2017, 11, 13,23,0,0));
    expect(serviceResult).toBeFalsy();
  });
});
