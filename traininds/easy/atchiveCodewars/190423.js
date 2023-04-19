// const getArr = () => {
//   const websites = [];
//   for (let index = 0; index < 1000; index++) {
//     websites.push('codewars');
//   }
//   return websites;
// };
// console.log(getArr());

// input = arr [sort], val
// output - num (index)

const keepOrder = (ary, val) => {
  //   if (ary.length === 0) {
  //     return 0;
  //   }
  //   //   for (let index = 0; index < ary.length; index += 1) {
  //   //     if (val <= ary[index]) {
  //   //       return index;
  //   //     }
  //   //     if (val > ary[ary.length - 1]) {
  //   //       return ary.length;
  //   //     }
  //   //   }

  //   const index = ary.findIndex(el => val <= el);
  //   return index === -1 ? ary.length : index;

  return ary.filter(el => el < val).length;
};

console.log(keepOrder([1, 2, 3, 4], 5));
console.log(keepOrder([1, 2, 3, 4, 7], -1));
console.log(keepOrder([1, 1, 2, 2, 2], 2));
console.log(keepOrder([], 2));
// keepOrder([1, 2, 3, 4, 7], 0) // => 0
// keepOrder([1, 1, 2, 2, 2], 2) // => 2
