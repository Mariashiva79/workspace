// 6. Crea una función para obtener todos los valores de un set que estén
// entre dos rangos (numéricos)

function values_enter_ranges (set, min, max) {
    const values = Array.from(set);
    return values.filter(value => value >= min && value <= max);
}
console.log(values_enter_ranges(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3, 7));

module.exports = { values_enter_ranges };
