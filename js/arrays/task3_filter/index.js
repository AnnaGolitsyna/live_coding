const numbers = [2, 5, 6, 7, 8, -6];

// input - call back f
// output - new arr

// function filterCallback(el) {
//   return el > 5;
// }
// const filterCallback = el =>  el > 5;
//


const filterRes = numbers.filter(el => el > 5);
console.log(filterRes);