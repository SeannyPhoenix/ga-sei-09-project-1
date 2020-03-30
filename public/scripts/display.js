elems = {
  header: document.querySelector('header'),
  body: document.querySelector('body'),
  menu: {
    login: document.querySelector('#loginBtn'),
    register: document.querySelector('#registerBtn'),
    logout: document.querySelector('#logoutBtn'),
    search: document.querySelector('.navbar form')
  },
  bookList: document.querySelector('#book-list'),
  sortAvg: document.querySelector('#sort-avg'),
  sortUser: document.querySelector('#sort-user')
}

function updateMenu() {
  if (state.user) {
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

function buildBookList() {
  // Check if we've loaded the books yet.
  if (!state.bookList) return;

  // Build the list one book at a time
  state.bookList.forEach(book => {
    buildBookLine(book);
  });
  orderCurrent();
}

function buildBookLine(book) {
  // Check if there is any rating
  if (book.ratings.length) {

    //Get average of each rating
    let sum = 0;
    for (let i = 0; i < book.ratings.length; i++) {
      sum += book.ratings[i].rating;

      //Get user ratings for each book
      if (state.user && book.ratings[i].user === state.user._id) {
        book.userRating = book.ratings[i].rating;
      }
      else {
        book.userRating = 0;
      }
    }
    book.averageRating = sum / book.ratings.length;
    book.averageRating = book.averageRating.toFixed(1);
  }
  else {
    book.averageRating = 0;
    book.userRating = 0;
  }

  let bookLine = document.createElement('div');
  bookLine.classList = `row justify-content-md-center book`;
  bookLine.setAttribute('data-book-id', book._id);
  bookLine.setAttribute('data-average', book.averageRating);
  bookLine.setAttribute('data-user', book.userRating);

  let bookInfo = document.createElement('div');
  bookInfo.classList = `col col-lg-6`;
  bookInfo.innerText = `${book.title} (${book.author})`;
  bookLine.appendChild(bookInfo);

  let bookRating = document.createElement('div');
  bookRating.classList = `col col-lg-3`;
  bookLine.appendChild(bookRating);

  for (let i = 1; i <= 5; i++) {
    let star = document.createElement('i');
    star.classList = `fas fa-star star`;
    if (i <= book.averageRating) {
      star.classList.add('gold-star');
    }
    bookRating.appendChild(star);
  }
  if (book.averageRating != 0) {
    let label = document.createElement('span');
    label.innerText = `${book.averageRating} (${book.ratings.length} ratings)`;
    bookRating.appendChild(label);
  }
  bookLine.appendChild(bookRating);

  let userRating = document.createElement('div');
  userRating.classList = `col col-lg-3 rateStar`;
  userRating.setAttribute('data-book-id', book._id);
  if (state.user) {
    for (let i = 1; i <= 5; i++) {
      let star = document.createElement('i');
      star.classList = `fas fa-star star`;
      if (i <= book.userRating) {
        star.classList.add('gold-star');
      }
      star.addEventListener('click', () => {
        setRating(book._id, i);
      });
      star.addEventListener('mouseover', () => {
        addGold(userRating, i)
      });
      star.addEventListener('mouseout', () => {
        removeGold(userRating, i)
      });
      userRating.appendChild(star);
    }
    label = document.createElement('span');
    userRating.appendChild(label);
  }

  bookLine.appendChild(userRating);

  let currentBookLine = document.querySelectorAll(`#book-list>[data-book-id='${book._id}']`)[0];
  if (currentBookLine) {
    currentBookLine.replaceWith(bookLine);
  }
  else {
    elems.bookList.appendChild(bookLine);
  }
}