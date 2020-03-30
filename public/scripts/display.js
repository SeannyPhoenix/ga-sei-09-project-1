elems = {
  header: document.querySelector('header'),
  body: document.querySelector('body'),
  menu: {
    login: document.querySelector('#loginBtn'),
    register: document.querySelector('#registerBtn'),
    logout: document.querySelector('#logoutBtn'),
    search: document.querySelector('.navbar form')
  },
}

function updateMenu(loggedIn) {
  console.log(`Logged in:`, loggedIn);
  if (loggedIn) {
    elems.menu.login.classList.add('d-none');
    elems.menu.register.classList.add('d-none');
    elems.menu.logout.classList.remove('d-none');
  }
  else {
    elems.menu.login.classList.remove('d-none');
    elems.menu.register.classList.remove('d-none');
    elems.menu.logout.classList.add('d-none');
  }
}