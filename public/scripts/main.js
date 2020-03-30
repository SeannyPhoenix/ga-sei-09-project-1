const sortFunctions = {
  orderAvg: (a, b) => b.dataset.average - a.dataset.average,
  orderUser: (a, b) => b.dataset.user - a.dataset.user,
}

const state = {
  user: null,
  bookList: null,
  currentSort: sortFunctions.orderAvg,
}

async function initialize() {
  try {
    // Find out if a user is logged in.
    await verifyUser();

    // Get book list
    let response = await fetch('/api/v1/books', {
      method: 'GET'
    });
    state.bookList = await response.json();
    console.log(`Retreived ${state.bookList.length} books.`);

    buildBookList(state.bookList);

    // Order them by ranking

    elems.sortAvg.addEventListener('click', orderAvg);
    elems.sortUser.addEventListener('click', orderUser);
  }
  catch (err) {
    console.log(err);
  }
}

function orderAvg() {
  state.currentSort = sortFunctions.orderAvg;
  console.log(`Order by Average`);
  orderCurrent();
}

function orderUser() {
  state.currentSort = sortFunctions.orderUser;
  console.log(`Order by User`);
  orderCurrent();
}

function orderCurrent() {
  const ordered = [...document.getElementsByClassName('book')]
    .sort(state.currentSort);
  ordered.forEach((elem, index) => {
    elem.style.order = index
  });
}

async function setRating(book, rating) {
  try {
    let result;
    const ratingData = {
      book,
      user: state.user,
      rating,
    };

    let thisBook = state.bookList
      .filter(aBook => aBook._id === book)[0];

    let currentRating = thisBook.ratings
      .filter(aRating => aRating.user === state.user._id)[0];

    if (!currentRating) {
      // There is no rating: make one
      result = await fetch('/api/v1/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ratingData),
      });
      result = await result.json();
    }
    else {
      // Update the rating
      result = await fetch('/api/v1/ratings/' + currentRating, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ratingData),
      });
      result = await result.json();
    }
    console.log(result);
    buildBookLine(thisBook);
  }
  catch (err) {
    console.log(err);
  }
}

function addGold(userRating, starNumber) {
  for (let i = 0; i < starNumber; i++) {
    // console.log(userRating.childNodes[i].classList);
    userRating.childNodes[i].classList.add("gold-star");
  }
}

function removeGold(userRating, starNumber) {
  for (let i = 0; i < starNumber; i++) {
    userRating.childNodes[i].classList.remove("gold-star");
  }
}

initialize();