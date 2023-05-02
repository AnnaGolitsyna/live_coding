// input - arr
// output - arr

// const invertValues = arr => arr.map(n => num * -1);

// console.log(invertValues([1, 2, 3, 4, 5]));
// console.log(invertValues([1, -2, 3, -4, 5]));
// console.log(invertValues([]));

// ------------

// input - num (max memory), arr [list pages]
// output - arr [memory]

function pageReplacement(n, referenceList) {
  const memoryArr = new Array(n).fill(-1);
  let memoryIndex = 0;

  for (let i = 0; i < referenceList.length; i++) {
    const requestedPage = referenceList[i];

    if (!memoryArr.includes(requestedPage)) {
      memoryArr[memoryIndex] = requestedPage;
      memoryIndex = (memoryIndex + 1) % n;
    }
  }

  return memoryArr;
}

// ------------

// const pageReplacement = (n, referenceList) => {

//   const memoryArr = Array(n).fill(-1);
//   let memoryIndex = 0;

//   for (let index = 0; index < referenceList.length; index += 1) {
//     const elem = referenceList[index];
//     if (memoryIndex >= n) memoryIndex = 0;
//     if (!memoryArr.includes(elem)) {
//       memoryArr.splice(memoryIndex, 1, elem);
//       memoryIndex += 1;

//     }
//   }
//   return memoryArr;
// };

// ------------

// const pageReplacement = (n, referenceList) => {
//   const arrMemory = [];
//   arrMemory.length = n;
//   arrMemory.fill(-1);
//   let startPage = -1;
//   let indexMemory = 0;

//   const arrForPages = referenceList.slice();
//   for (let index = 0; index < arrForPages.length; index += 1) {
//     if (index % n === 0) {
//       indexMemory = 0;
//       startPage += 1;
//       index = startPage * n;
//     }
//     if (!arrMemory.includes(arrForPages[index])) {
//       arrMemory.splice(indexMemory, 1, arrForPages[index]);
//       indexMemory += 1;
//     } else {
//       arrForPages.splice(index, 1);
//       index -= 1;
//     }
//   }
//   return arrMemory;
// };

console.log(pageReplacement(4, [1, 2, 3, 3, 4, 5, 1])); // [5,1,3,4]
console.log(pageReplacement(5, [10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 4, 3, 4, 5, 6, 5])); // [5, 4, 3, 7, 6]
console.log(pageReplacement(3, []));
console.log(pageReplacement(3, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(pageReplacement(4, [1, 2, 3, 3, 4, 5, 1]));
console.log(
  pageReplacement(
    12,
    [
      13, 24, 3, 24, 11, 12, 10, 7, 8, 11, 2, 14, 21, 23, 9, 9, 21, 14, 19, 3, 12, 25, 22, 12, 10,
      18, 13, 11, 16, 3, 12, 17, 24, 17, 10, 19, 11, 17, 5, 6, 22,
    ],
  ),
);
// expected [ undefined, 19, 25, 22, 18, 13, 11, 16, 3, 12, 17, 24 ] to deeply equal [ 10, 5, 6, 22, 18, 13, 11, 16, 3, 12, 17, 24 ]
