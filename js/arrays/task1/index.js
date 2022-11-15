const numbersList1 = [1, 2, 3, 4, 5];
// const numbersList2 = new Array();

console.log(numbersList1);

// input - none
// output - number /удаленный элемент/
console.log('arr befor POP', numbersList1);
const popRes = numbersList1.pop();
console.log(popRes);
console.log('arr after POP', numbersList1);

// input - number /any element/
// output - number /new length array/
const numbersList2 = [1, 2, 3, 4, 5];

console.log('arr befor PUSH', numbersList2);
const pushRes = numbersList2.push(100);
console.log(pushRes);
console.log('arr after PUSH', numbersList2);

// input - number /any element/
// output - number /new length array/
const numbersList3 = [1, 2, 3, 4, 5];

console.log('arr befor UNSHIFT', numbersList3);
const unshiftRes = numbersList3.unshift(55);
console.log(unshiftRes);
console.log('arr after UNSHIFT', numbersList3);


