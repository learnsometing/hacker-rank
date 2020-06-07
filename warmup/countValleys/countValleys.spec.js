const countValleys = require('./countValleys');

describe('countValleys', () => {
  it('should return the correct number of valleys travelled', () => {
    expect(countValleys(8, 'UDDDUDUU')).toEqual(1);
    expect(countValleys(2, 'DU')).toEqual(1);
  });
});