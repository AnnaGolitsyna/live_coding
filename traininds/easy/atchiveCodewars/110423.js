// input - string
// output - string with '.'

const dotCalculator = equation => {
  const [firstEl, operand, secondEl] = equation.split(' ');

  switch (operand) {
    case '+':
      return '.'.repeat(firstEl.length + secondEl.length);
    case '-':
      return '.'.repeat(firstEl.length - secondEl.length);
    case '*':
      return '.'.repeat(firstEl.length * secondEl.length);
    case '//':
      return '.'.repeat(firstEl.length / secondEl.length);
    default:
      return equation;
  }

  // if(equation.includes(' + ')) {
  //      const test = equation.split(' + ');
  //      return '.'.repeat(test[0].length + test[1].length);
  // }

  //  if (equation.includes(' - ')) {
  //    const test = equation.split(' - ');
  //    return '.'.repeat(test[0].length - test[1].length);
  //  }

  //   if (equation.includes(' * ')) {
  //     const test = equation.split(' * ');
  //     return '.'.repeat(test[0].length * test[1].length);
  //   }

  //   if (equation.includes(' // ')) {
  //     const test = equation.split(' // ');
  //     return '.'.repeat(test[0].length / test[1].length);
  //   }
};

console.log(dotCalculator('... + ..')); // '.....'
console.log(dotCalculator('... - ..')); // ''
console.log(dotCalculator('... * ...')); // '.........'
console.log(dotCalculator('..... // ..')); //
