const minimumBribes = require('./newYearsChaos');

describe('minimumBribes', () => {
  it('should return too chaotic if the line is not possible', () => {
    expect(minimumBribes([2, 5, 1, 3, 4])).toEqual('Too chaotic');
  });

  it('should return the minimum number of bribes required to form the line', () => {
    expect(minimumBribes(2, 1, 5, 3, 4)).toEqual(3);
  })
})
