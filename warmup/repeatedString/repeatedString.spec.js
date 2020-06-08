const repeatedString = require('./repeatedString');

describe('repeatedString', () => {
  it('should return the correct number of occurences of the letter a in the string', () => {
    expect(repeatedString('aba', 10)).toEqual(7)
  });
});