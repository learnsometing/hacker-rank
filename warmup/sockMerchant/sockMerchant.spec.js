const sockMerchant = require('./sockMerchant');

describe('sockMerchant', () => {
  it('should return the correct number of pairs of socks', () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toEqual(3);
  });
});