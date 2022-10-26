// output 42

function getSenceOfLife() {
  return 42;
}

// option 1
const res = getSenceOfLife();
console.log(res);

// option 2
console.log(getSenceOfLife());

// input - number
// output - number**2

function getSquered(number) {
  return number ** 2;
}
console.log(getSquered(3));
console.log(getSquered(0));
console.log(getSquered(-5));
console.log(getSquered('l'));

//
function sum(first, second) {
  return first + second;
}
console.log(sum(1, 2));
console.log(sum(1, -2));
console.log(sum(1, 'l'));

//
function getMessege (age) {
  if (age < 0 || typeof age !== 'number') {
    return null;
  }
  console.log(`I am ${age} years old`);
  return  age;
}

console.log(getMessege(-9));
console.log(getMessege(0));
console.log(getMessege(undefined));
console.log(getMessege(null));
console.log(getMessege(15));

// arrow function
const mult = (a, b) => a * b;

console.log(mult(2, 3));
console.log(mult(-2, 3));
console.log(mult(0, 3));
console.log(mult(null, 3));
console.log(mult(2, 'l'));

// output 17;
const getMagicNumber = () => 17;

console.log(getMagicNumber());
