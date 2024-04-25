import moment from 'moment';
import { expect } from 'chai';
import { createBodyWithDates } from '../src/collectionRequestBodyBuilder.js';

describe('createBodyWithDates', () => {
    it('should work for year ending dates', () => {
        const days = 2;
        const currentDate = moment('2030-12-31T00:00:00.000Z');

        const result = createBodyWithDates(currentDate, days);

        expect(result).to.equal('{"dates":["2030-12-31","2031-01-01"]}');
    });

    it('should work for zero days', () => {
        const days = 0;
        const currentDate = moment('2030-01-01T00:00:00.000Z');

        const result = createBodyWithDates(currentDate, days);

        expect(result).to.equal('{"dates":[]}');
    });

    it('should work for one day', () => {
        const days = 1;
        const currentDate = moment('2030-01-01T00:00:00.000Z');

        const result = createBodyWithDates(currentDate, days);

        expect(result).to.equal('{"dates":["2030-01-01"]}');
    });

    it('should work for many days', () => {
        const days = 366;
        const currentDate = moment('2030-01-01T00:00:00.000Z');

        const result = createBodyWithDates(currentDate, days);
        const parsedResult = JSON.parse(result);

        expect(parsedResult.dates).to.have.length(days);
        expect(parsedResult.dates[0]).to.eql('2030-01-01');
        expect(parsedResult.dates[days - 1]).to.eql('2031-01-01');
    });
});