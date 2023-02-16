// algo
// create DOMelems - .login-form, .submit-button +++
// submit-button default disabled => reportValidity +++
// create event => click submit-button - PUT request to server +++
// and GET request to alert {} => Object.fromEntries +++
// clear all form fields +++

// const buttonElem = document.querySelector('.submit-button');

// const formElems = document.querySelector('.login-form');

// const formChangeHandler = () => {
//   if (formElems.reportValidity()) {
//     buttonElem.disabled = false;
//   } else {
//     buttonElem.disabled = true;
//   }
// };
// formElems.addEventListener('input', formChangeHandler, false);

// const baseUrl = 'https://639acdd831877e43d676cd31.mockapi.io/logins';

// const saveLoginData = loginData =>
//   fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(loginData),
//   });

// const onFormSubmit = event => {
//   event.preventDefault();
//   const formData = Object.fromEntries(new FormData(formElems));

//   saveLoginData(formData)
//     .then(resp => resp.json())
//     .then(data => {
//       alert(JSON.stringify(data));
//       formElems.reset();
//     });
//   buttonElem.setAttribute('disabled', false);
// };

// formElems.addEventListener('submit', onFormSubmit);

const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Anna',
    password: '123',
  };

  // save to server

  const res = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(resp => {
      if (resp.status === 400) {
        console.log(res.body.message);
      }
      if (resp.status === 500) {
        console.log(res.body.message);
      }
      if (!resp.ok) {
        throw new Error();
      }

      return resp.json();
    })
    .then(body => {
      console.log(body);
      // input - string
      // output - undefined
      alert(JSON.stringify(body));
    })
    .catch(err => {
      alert('connection lost...', err);
    });

  console.log(res);
}

formElem.addEventListener('submit', createUserHandler);

// then
// input - callback fullfiled, callback rejected
// output - promise

// callback
// input - result of promise
// output - promise
