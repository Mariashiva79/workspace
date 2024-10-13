// 17. Define a function capitalize_last_name() that accepts as argument
// a string with a (single) first and a (single) last name, and returns a
// string in which only the first letter of the first name is uppercase,
// whereas all letters of the last name are uppercase; in otherwords,
// 'marisa tomei' becomes 'Marisa TOMEI'. (Tip: use str.split() to split
// a str into separate words.) If something other than a str object is
// passed as an argument, the function should raise a TypeError. (Tip:
// you can use isistance() to check whether an object is of a particular
// type.) If the str does not consist of exactly two words, the function
// should raise a ValueError.

function capitalize_last_name(full_name) {
  if (typeof full_name !== 'string') {
    throw new TypeError('Argument must be a string');
  }

  let words_array = full_name.split(' ');
  if (words_array.length !== 2) {
    throw new Error('String must contain exactly two words');
  }
  // console.log(words_array);

  const first_name =
    words_array[0].charAt(0).toUpperCase() +
    words_array[0].slice(1).toLowerCase();
  // console.log(first_name);

  const last_name = words_array[1].toUpperCase();
  // console.log(last_name);

  const final_string = first_name + ' ' + last_name;
  // console.log(final_string);

  return final_string;
}

module.exports = { capitalize_last_name };
