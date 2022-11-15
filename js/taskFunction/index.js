// output 42

function getSenseOfLife() {
  return 42;
}

// option 1
const res = getSenseOfLife();
console.log(res);

// option 2
console.log(getSenseOfLife());

// input - number
// output - number**2

function getSquared(number) {
  return number ** 2;
}
console.log(getSquared(3));
console.log(getSquared(0));
console.log(getSquared(-5));
console.log(getSquared('l'));

//
function sum(first, second) {
    console.log(`I am ${(first + second)} years old`);
    return first + second;
}


console.log(sum(1, 2));
console.log(sum(1, -2));
console.log(sum(1, 'l'));
console.log(sum(30, 4));


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

//
const square = (num) => num**2;

console.log(square(-9));
console.log(square(0));
console.log(square(undefined));
console.log(square(null));
console.log(square(5));


// output 17;
const getMagicNumber = () => 17;

console.log(getMagicNumber());
