const { capitalize_last_name, ValueError } = require('./index');

describe('capitalize_last_name', () => {
  it('should capitalize the first letter of the first name and capitalize the last name', () => {
    expect(capitalize_last_name('marisa tomei')).toBe('Marisa TOMEI');
  });

  it('should raise a TypeError if the argument is not a string', () => {
    expect(() => capitalize_last_name(42)).toThrow(TypeError);
  });

  it('should raise a ValueError if the string does not contain exactly two words', () => {
    expect(() => capitalize_last_name('marisa tomei actress')).toThrow(
      ValueError,
    );
    expect(() => capitalize_last_name('marisa')).toThrow(ValueError);
  });
  it('should capitalize the first letter of the first name and capitalize the last name', () => {
    expect(capitalize_last_name('MARISA TOMEI')).toBe('Marisa TOMEI');
  });
  it('should raise a ValueError if the string is empty', () => {
    expect(() => capitalize_last_name('')).toThrow(ValueError);
  });
  it("should return the same string if the name or surname is one character", () => {
    expect(capitalize_last_name('m t')).toBe('M T');
  });
});
