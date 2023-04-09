// input - str
// output str (only number) or not

const getPhoneNumbers = str => {
  const phoneNumbers = str.replace(/\D/g, '');

  return phoneNumbers[0] === '0' && phoneNumbers.length === 11
    ? phoneNumbers
    : 'Not a phone number';
};

console.log(getPhoneNumbers('efRFS:)0207ERGQREG88349F82!'));
console.log(getPhoneNumbers('2222lll'));
console.log(getPhoneNumbers('ghj'));
console.log(getPhoneNumbers('012345678912'));
