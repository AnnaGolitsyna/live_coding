// input - obj
// output - arr[{}]

// algo
// 1. create res arr
// 2. get key/value (entries - [])
// 3. add new id key to value => new obj
// 4. push to the arr (map)
// 5. sort obj by age (sort)
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: '22',
  },
};

// DRAFT
// const getCustomersList = obj => {
//   const resArr = [];
//   const entries = Object.entries(obj);
//   for (let index = 0; index < entries.length; index += 1) {
//     resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }
//   resArr.sort((a, b) => a.age - b.age);
//   console.log(resArr);
//   return resArr;
// };

// getCustomersList(customers);

// FINAL
const getCustomersList = obj =>  Object.entries(obj)
    .map(([key, value]) => ({ ...value, id: key }))
    .sort((a, b) => a.age - b.age);

console.log(getCustomersList(customers));
