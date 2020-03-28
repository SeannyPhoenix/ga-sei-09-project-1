const elems = {
  header: document.querySelector('header'),
  body: document.querySelector('body'),
  loginForm: document.querySelector('#loginForm'),
  logInSubmit: document.querySelector('#loginSubmit')
}

elems.logInSubmit.addEventListener('click', logIn);

async function logIn() {
  console.log(`Logging In...`);

  const loginBody = {
    email: 'seannyphoenix@gmail.com',
    password: 'Testing123'
  };

  try {
    let result = await fetch(`/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginBody),
    });
    console.log(result);
    let success = await result.json();
    console.log(success);
  }
  catch (err) {
    console.log(`Error:`, err);
  }
}