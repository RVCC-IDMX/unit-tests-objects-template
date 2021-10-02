const getColorValue = require('../src/objects-02');

test('getColorValue', () => {
  expect(getColorValue('red')).toBe('#ff0000');
  expect(getColorValue('green')).toBe('#00ff00');
  expect(getColorValue('blue')).toBe('#0000ff');
  expect(getColorValue('yellow')).toBe('#ffff00');
  expect(getColorValue('magenta')).toBe('#ff00ff');
  expect(getColorValue('cyan')).toBe('#00ffff');
  expect(getColorValue('black')).toBe('#000000');
  expect(getColorValue('white')).toBe('#ffffff');
  expect(getColorValue('purple')).toBe('#800080');
  expect(getColorValue('orange')).toBe('#ffa500');
  expect(getColorValue('brown')).toBe('#a52a2a');
  expect(getColorValue('gray')).toBe('#808080');
  expect(getColorValue('pink')).toBe('#ffc0cb');
  expect(getColorValue('beige')).toBe('#f5f5dc');
  expect(getColorValue('olive')).toBe('#808000');
  expect(getColorValue('maroon')).toBe('#800000');
  expect(getColorValue('teal')).toBe('#008080');
  expect(getColorValue('indigo')).toBe('#4b0082');
  expect(getColorValue('navy')).toBe('#000080');
  expect(getColorValue('violet')).toBe('#ee82ee');
  expect(getColorValue('tan')).toBe('#d2b48c');
  expect(getColorValue('silver')).toBe('#c0c0c0');
  expect(getColorValue('aqua')).toBe('#00ffff');
  expect(getColorValue('lavender')).toBe('#e6e6fa');
  expect(getColorValue('turquoise')).toBe('#40e0d0');
});
