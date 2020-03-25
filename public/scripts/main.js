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
    let ratingId = element.ratings;

    let d1 = document.getElementById('lister');
    d1.insertAdjacentHTML('beforeend', 
    
 ` 
    <div class="col col-lg-8">
      ${title} (${author})
    </div>
  
    <div class="col col-lg-2">
       <i class="fas fa-star">${rating}</i>
    </div>
    <div class="col col-lg-2">
      <i class="fas fa-star"></i>
    </div>
 
  `);


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