// 2. Crea una página web que te haga dos preguntas por medio del prompt y
// que en caso de que respondas bien a las dos, te lo haga saber. De la misma
// manera, si fallas en alguna te contestará con una negativa. 
/* eslint-disable camelcase */

const question1 = prompt('What colour is the grass?').toLowerCase();
const question2 = prompt('What colour is the sky?').toLowerCase();

if (question1 === 'green' && question2 === 'blue') {
  alert(`Good job!`);
} else if (question1 !== 'green' && question2 === 'blue') {
  alert(`You failed the first question`);
} else if (question1 === 'green' && question2 !== 'blue') {
  alert(`You failed the second question`);
} else {
  alert(`Are not the answers I was looking for`);
}