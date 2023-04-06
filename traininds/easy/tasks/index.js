// input - start, end => number
// output - minJumps => number
// jump => only i+1, i+3

// const countJumps = (start, end) => {
//   const stepThree = Math.floor((end - start) / 3);
//   const stepOne = end - start - stepThree * 3;
//   return Math.round((end - start) / 3) + stepOne;
// };

// console.log(countJumps(1, 5));
// console.log(countJumps(1, 9));
// console.log(countJumps(1, 10));
// console.log(countJumps(1, 12));

// input - parenString => ()
// output - boolean

const isValidParenthese = parenStr => {
  const stack = [];

  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') {
      stack.push(parenStr[i]);
    } else if (parenStr[i] === ')') {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }
  return stack.length === 0;
};

//   const test = parenStr.split('');

//   if (test.length % 2 === 1) {
//     return false;
//   }

//   for (let index = 0; index < test.length; index += 1) {
//     if (test[0] === ')') {
//       return false;
//     }
//     if (test[index] === '(' && test[index + 1] === ')') {
//       test.splice(index, 2);
//       index -= 2;
//     }
//     if (test[index] === '(') {
//       test.splice(test.indexOf(')', index));
//       test.splice(index, 1);
//       index -= 1;
//     }
//   }
//   console.log(test);
//   return !test.length;

console.log(isValidParenthese('()')); // =>  true
console.log(isValidParenthese(')(()))')); // =>  false
console.log(isValidParenthese('(')); // =>  false
console.log(isValidParenthese('(())((()())())')); // =>  true
console.log(isValidParenthese('())(()'));
