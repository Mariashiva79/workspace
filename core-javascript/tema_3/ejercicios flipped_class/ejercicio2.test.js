const { found_sign } = require('./ejercicio2');

describe('found_sign', () => {
    it('should return - sign', () => {
        const result = found_sign(3, -7, 2);
        expect(result).toBe('The sign of -42 is -');
    });
    it('should return + sign', () => {
        const result = found_sign(3, 7, 2);
        expect(result).toBe('The sign of 42 is +');
    });
    it('should return Any number is not valid number', () => {
        const result = found_sign('3', 7, 2);
        expect(result).toBe('Any number is not valid number');
    });
});

