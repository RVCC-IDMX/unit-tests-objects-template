const { getVolumeOfBox } = require('../src/objects-03');

test('getVolumeOfBox', () => {
  expect(getVolumeOfBox({ width: 2, length: 5, height: 1 })).toBe(10);
  expect(getVolumeOfBox({ width: 3, length: 3, height: 3 })).toBe(27);
});
