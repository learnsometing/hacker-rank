const hourglassSum = require('./2d-array');

describe('hourglassSum', () => {
  it('should return the largest of all the hourglass sums', () => {
    let arr = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0],
               [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]];
    expect(hourglassSum(arr)).toEqual(19);
  });
});