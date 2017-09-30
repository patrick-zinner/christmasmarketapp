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

  it('should find the extraordinaryhour', () => {
    let serviceResult = service.getOpeningHoursForTime(market, new Date(2017, 11, 6));
    expect(serviceResult.open).toBeFalsy();
  });

  it('should find the normaopeninghours', () => {
      let serviceResult = service.getOpeningHoursForTime(market, new Date(2017,11,13));
      expect(serviceResult.open).toBeTruthy();
  });

})
