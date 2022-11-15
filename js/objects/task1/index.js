// create obj
// read obj
// modify obj = add/update/mapping => use spred operator

// input => obj, string, value
// output => obj

// v1
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// v2
// Object.assign
// input - target/obj/, sourceObj ...sourceObjN
// output - obj
// algo - add key/value to the obj with assain
function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
// test
// const obj1 = { };
// console.log(addPropertyV2(obj1, 'name', 'Bob'));
// console.log('after', obj1);

// const obj2 = { name: 'Bob' };
// console.log(addPropertyV2(obj2, 'age', 26));
// console.log('after', obj2);

// const obj3 = { name: 'Bob' };
// console.log(addPropertyV2(obj3, 'name', 'Tom'));
// console.log('after', obj3);

// v3
// Object.assign
// input - target/obj/, sourceObj ...sourceObjN
// output - obj
// algo - add key/value to the obj with assain
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}
// test

// const obj1 = { };
// console.log('befor', obj1);
// console.log(addPropertyV3(obj1, 'name', 'Bob'));
// console.log('after', obj1);

// const obj2 = { name: 'Bob' };
// console.log('befor', obj2);
// console.log(addPropertyV3(obj2, 'age', 26));
// console.log('after', obj2);

// const obj3 = { name: 'Bob' };
// console.log('befor', obj3);
// console.log(addPropertyV3(obj3, 'name', 'Tom'));
// console.log('after', obj3);

// v4
// ...spread
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
// test

const obj1 = {};
console.log('befor', obj1);
console.log(addPropertyV4(obj1, 'name', 'Bob'));
console.log('after', obj1);

const obj2 = { name: 'Bob' };
console.log('befor', obj2);
console.log(addPropertyV4(obj2, 'age', 26));
console.log('after', obj2);

const obj3 = { name: 'Bob' };
console.log('befor', obj3);
console.log(addPropertyV4(obj3, 'name', 'Tom'));
console.log('after', obj3);

// rest oprator
function sum(...args) {
  console.log(args);
}
console.log(sum(1, 2, 3));

const userObj = { name: 'Bob', balance: 100, city: 'Kyiv' };

const {name, ...obj} = userObj;
console.log(obj);

const arr = [5,6, 88,99]
const [,, ...newArr] = arr;
console.log(newArr, arr);

// const transaction = {
//   value: 170,
// };

// addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV1(transaction, 'currency', 'USD'));
// console.log(addPropertyV1({ value: 170 }, 'currency', 'USD'));
// console.log(addPropertyV1({ name: 'Bob' }, 'age', 26));
// console.log(addPropertyV1({ name: 'Bob' }, 'name', 'Tom'));
