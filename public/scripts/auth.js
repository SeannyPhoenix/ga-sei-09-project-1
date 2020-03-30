elems.auth = {
  modal: document.querySelector('#userModal'),
  form: document.querySelector('#userModal form'),
  label: document.querySelector('#userModalLabel'),
  body: document.querySelector('#formBody'),
  nameGroup: document.querySelector('#nameGroup'),
  firstName: document.querySelector('#userFirstName'),
  lastName: document.querySelector('#userLastName'),
  email: document.querySelector('#userEmail'),
  password: document.querySelector('#userPassword'),
  register: document.querySelector('#userRegister'),
  cancel: document.querySelector('#userCancel'),
  submit: document.querySelector('#userSubmit'),
  status: document.querySelector('#actionStatus'),
  action: document.querySelector('#actionText')
};

let submitHandler;

elems.menu.login.addEventListener('click', openLogin);
elems.menu.register.addEventListener('click', openRegister);
elems.menu.logout.addEventListener('click', openLogout);
elems.auth.register.addEventListener('click', openRegister);
elems.auth.submit.addEventListener('click', () => {
  elems.auth.form.requestSubmit();
});
elems.auth.form.onsubmit = () => {
  submitHandler().catch(e => console.log(e));
  return false;
}

function openLogin() {
  elems.auth.label.innerText = `Log In`;
  elems.auth.body.classList.remove('d-none');
  elems.auth.nameGroup.classList.add('d-none');
  elems.auth.register.classList.remove('d-none');
  elems.auth.action.innerText = `Log In`;
  elems.auth.status.classList = `fas fa-sign-in-alt mr-2`;
  submitHandler = login;
}

async function login() {
  console.log(`Logging in...`);
  elems.auth.status.className = 'fas fa-asterisk fa-spin mr-2';

  const loginBody = {
    email: elems.auth.email.value,
    password: elems.auth.password.value
  };

  try {
    let result = await fetch(`/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginBody),
    });
    let success = await result.json();
    if (success.status === 200) {
      elems.auth.status.className = 'fas fa-check mr-2';
    }
    else {
      elems.auth.status.className = 'fas fa-exclamation mr-2';
    }

    setTimeout(() => {
      elems.auth.cancel.click();
    }, 750);
  }
  catch (err) {
    console.log(`Error:`, err);
  }
  verifyUser();
  return false;
}

function openRegister() {
  elems.auth.label.innerText = `Register New User`;
  elems.auth.body.classList.remove('d-none');
  elems.auth.nameGroup.classList.remove('d-none');
  elems.auth.register.classList.add('d-none');
  elems.auth.action.innerText = `Register and Log In`;
  elems.auth.status.classList = `fas fa-plus-square mr-2`;
  submitHandler = register;
}

async function register() {
  console.log(`Registering...`);
  elems.auth.status.className = 'fas fa-asterisk fa-spin mr-2';

  const registerBody = {
    firstName: elems.auth.firstName.value,
    lastName: elems.auth.lastName.value,
    email: elems.auth.email.value,
    password: elems.auth.password.value
  };

  try {
    let result = await fetch('/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerBody),
    });
    let success = await result.json();
    console.log(`Register result:`, success);
    if (success.status === 201) {
      await login();
    }
    else {
      elems.auth.status.className = 'fas fa-exclamation mr-2';
    }
  }
  catch (err) {
    console.log(`Error:`, err);
  }
  verifyUser();
  return false;
}

function openLogout() {
  elems.auth.label.innerText = `Log Out`;
  elems.auth.body.classList.add('d-none');
  elems.auth.register.classList.add('d-none');
  elems.auth.action.innerText = `Log Out`;
  elems.auth.status.classList = `fas fa-sign-out-alt mr-2`;
  submitHandler = logout;
}

async function logout() {
  console.log(`Logging Out...`);

  try {
    let result = await fetch(`/api/v1/logout`, {
      method: 'DELETE',
    });
    let success = await result.json();
    elems.auth.status.className = 'fas fa-check mr-2';
    setTimeout(() => {
      elems.auth.cancel.click();
    }, 750);
  }
  catch (err) {
    console.log(`Error:`, err);
  }
  verifyUser();
  return false;
}

async function verifyUser() {
  try {
    let result = await fetch(`/api/v1/verify`, {
      method: 'GET'
    });
    let data = await result.json();
    if (data.status === 200) {
      updateMenu(true);
      state.user = data.currentUser;
    }
    else {
      updateMenu(false);
      state.user = null;
    }
  }
  catch (err) {
    console.log(`Error:`, err);
    return await data;
  }
}