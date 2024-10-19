// 7. Crea un programa que pida un valor de tamaño de array por input y
// después el número del cuál se van a obtener múltiplos y devuelva un
// array con el tamaño puesto de múltiplos de ese número (2, 4 => [4, 8])

const { number } = require("@inquirer/prompts");

async function get_user_input() {
    const user_inquirer_size = await number({ message: "input array size: " });
    const user_inquirer_multiple = await number({
        message: "number to calculate multiples: ",
    });
    return [user_inquirer_size, user_inquirer_multiple];
}

async function array_of_multiples() {
    const user_input = await get_user_input();

    const new_array = new Array(user_input[0]);
    const number_to_multiples = user_input[1];

    for (let i = 0; i < new_array.length; i++) {
        new_array[i] = number_to_multiples * (i + 1);
    }
    console.log(new_array); // if called outside the function, only logs the promise.
}

array_of_multiples();

module.exports = {
    array_of_multiples,
};
