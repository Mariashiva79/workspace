const diameter = parseFloat(
  prompt('Please, enter the diameter of your whell, in meters'),
  10,
);
const width = parseFloat(
  prompt('Please, enter the width of your whell, in meters'),
  10,
);
let wheel_size;
if (diameter > 1.4) {
  wheel_size = 'big';
  alert('The wheel is for a big car');
} else if (diameter <= 1.4 && diameter > 0.8) {
  wheel_size = 'medium';
  alert('The wheel is for a medium car');
} else {
  wheel_size = 'small';
  alert('The wheel is for a small car');
}
if (
  (wheel_size === 'big' && width < 0.4) ||
  (wheel_size === 'medium' && width < 0.25)
) {
  alert('The width for this wheel is less than recommended');
}
