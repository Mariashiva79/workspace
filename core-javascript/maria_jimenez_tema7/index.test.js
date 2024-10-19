const { array_of_multiples } = require("./index");

// hago que prompt devuelva 5 cada vez que se llama en el parseo inicial del programa,
// asi no se bloquea el test
jest.mock("prompt-sync", () => () => jest.fn(() => 5));

describe("ejercicio_7 arrays", () => {
    it("check if the numbers are 5 and 3", () => {
        expect(array_of_multiples(5, 3)).toStrictEqual([3, 6, 9, 12, 15]);
    });

    it("check if the numbers are 8 and 24", () => {
        expect(array_of_multiples(8, 24)).toStrictEqual([
            24, 48, 72, 96, 120, 144, 168, 192,
        ]);
    });

    it("check if the numbers are 0 and 2", () => {
        expect(array_of_multiples(0, 2)).toStrictEqual([]);
    });

    it("check if the numbers are 3 and 0", () => {
        expect(array_of_multiples(3, 0)).toStrictEqual([0, 0, 0]);
    });

    it("check if any argument is not a number", () => {
        expect(() => array_of_multiples("f", 3)).toThrow();
    });

    it("check if any argument is not an integer number", () => {
        expect(() => array_of_multiples(1.5, 4)).toThrow();
    });

    it("check if the second argument is a negative number", () => {
        expect(array_of_multiples(9, -3)).toStrictEqual([
            -3, -6, -9, -12, -15, -18, -21, -24, -27,
        ]);
    });

    it("check if the first argument is a negative number", () => {
        expect(() => array_of_multiples(-3, 6)).toThrow();
    });
});
