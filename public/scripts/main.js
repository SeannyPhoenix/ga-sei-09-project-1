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
    if (element.ratings.length){
      let ratingEl = element.ratings[0].rating;
      bookLine = ` 
      <div class="col col-lg-8">
        ${title} (${author})
      </div>
    
      <div class="col col-lg-2">
         <i class="fas fa-star">${ratingEl}</i>
      </div>
      <div class="col col-lg-2">
        <i class="fas fa-star"></i>
      </div>
   
    `
    } else {
        bookLine = ` 
        <div class="col col-lg-8">
          ${title} (${author})
        </div>
      
        <div class="col col-lg-2">
           <i class="fas fa-star"></i>
        </div>
        <div class="col col-lg-2">
          <i class="fas fa-star"></i>
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
}

function handleError(err) {
    console.log(err)
}