const { values_enter_ranges } = require('./index');

describe('values_enter_ranges', () => {
  it('should return an array with values between 3 and 7', () => {
    const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const min = 3;
    const max = 7;
    const expected = [3, 4, 5, 6, 7];
    expect(values_enter_ranges(set, min, max)).toEqual(expected);
  });

  it('should return an empty array when there are no values between 3 and 7', () => {
    const set = new Set([1, 2, 8, 9, 10]);
    const min = 3;
    const max = 7;
    const expected = [];
    expect(values_enter_ranges(set, min, max)).toEqual(expected);
  });
  it('should return an empty array when the set is empty', () => {
    const set = new Set();
    const min = 3;
    const max = 7;
    const expected = [];
    expect(values_enter_ranges(set, min, max)).toEqual(expected);
  });
});
