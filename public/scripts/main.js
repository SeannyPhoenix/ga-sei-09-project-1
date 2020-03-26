// console.log("Sanity Check")

$.ajax({
    method: 'GET',
    url: '/api/v1/books',
    success: onSuccess,
    error: handleError
});


function createElement(element) {
    let title = element.title;
    let author = element.author;
    let id = element._id;

    let bookLine;
    // Check if there is any rating
    if (element.ratings.length){
         
      let sum = 0;

      //Get average of each rating 
      for (let i=0; i<element.ratings.length; i++) {
        sum += element.ratings[i].rating
      }
      var avg = sum/element.ratings.length
      // Get two digits
      avg = avg.toFixed(1)
     
      bookLine = `
      <div class="row justify-content-md-center book" data-rates="${avg}" id="${id}">
        <div class="col col-lg-8" >
          ${title} (${author})
        </div>
    
        <div class="col col-lg-2 ">
          <i class="fas fa-star">${avg}</i>
        </div>
        <div id="${id}" class="col col-lg-2">
          <i class="fas fa-star"></i>
        </div> 
      </div>
    `
    } else {
        bookLine = ` 
      <div class="row justify-content-md-center book"  data-rates="${avg}" id="${id}">
          <div class="col col-lg-8" >
            ${title} (${author})
          </div>
      
          <div class="col col-lg-2 ">
            <i class="fas fa-star"></i>
          </div>
          <div id=${id} class="col col-lg-2">
            <i class="fas fa-star"></i>
          </div> 
      </div>      
      `
    }

    let d1 = document.getElementById('lister');

    d1.insertAdjacentHTML('beforeend', bookLine);
}

function onSuccess(json) {
    console.log(json)
    json.forEach(element => {
        createElement(element)
    });
    order()
    
}

function handleError(err) {
    console.log(err)
}


//Order list by books rating
let descendingOrder = (a, b) => b.dataset.rates - a.dataset.rates

const order = function() {
  const ordered = [...document.getElementsByClassName('book')].sort(descendingOrder)
  console.log(ordered)
  ordered.forEach((elem, index) => {
    elem.style.order = index
  })
}

