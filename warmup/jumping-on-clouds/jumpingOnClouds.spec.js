const jumpingOnClouds = require('./jumpingOnClouds');

describe('jumpingOnClouds', () => {
  it('should calculate the shortest path from the first cloud to the last', () => {
    expect(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])).toEqual(3);
    expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toEqual(4);
    expect(jumpingOnClouds([0, 0, 0, 0, 1, 0])).toEqual(3);
    expect(jumpingOnClouds([0, 0, 0, 1, 0, 0])).toEqual(3);
  });
});