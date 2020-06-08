const minimumSwaps = require('./minimumSwaps');
describe('minimumSwaps', () => {
  it('should return the min number of swaps required to sort arr', () => {
    expect(minimumSwaps([7, 1, 3, 2, 4, 5, 6])).toEqual(5);
  });
});