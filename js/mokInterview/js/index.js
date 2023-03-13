/*
	Implement a function to extract query parameters from string to object
  If function parameter is not string type, throw an error with text:
  'Url is expected to be string'
*/

// input: "https://page.com?page=1&text=string"
// output: { page: 1, text: "string" }

// input: "https://page.com"
// output: {}

// input: 123
// output: Error('Url is expected to be string')

const getQueryParams = url => {
  if(typeof url !== 'string') {
    throw new Error('Url is expected to be string');
  }
  const substr = url.split('?')[1]
  const argsArr = substr.split('&');

  return argsArr.reduce((acc, value) => {
    const [key, argVal] = value.split('=');
    acc[key] = argVal;
    return acc;

  }, {})
};

getQueryParams('https://page.com?page=1&text=string');
getQueryParams('https://page.com');
getQueryParams(123);

