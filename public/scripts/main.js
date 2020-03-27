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
      <div class="row justify-content-md-center book" data-rates="${avg}">
        <div class="col col-lg-7" >
          ${title} (${author})
        </div>
    
        <div class="col col-lg-1 ">
          <i class="fas fa-star">${avg}</i>
        </div>
        <div data-bookId="${id}" class="col col-lg-4 ">
        <i class="fas fa-star selectStar" data-value="1" id="s1"></i>
        <i class="fas fa-star selectStar" data-value="2" id="s2"></i>
        <i class="fas fa-star selectStar" data-value="3" id="s3"></i>
        <i class="fas fa-star selectStar" data-value="4" id="s4"></i>
        <i class="fas fa-star selectStar" data-value="5" id="s5"></i>
        <i class="fas fa-star selectStar" data-value="6" id="s6"></i>
        <i class="fas fa-star selectStar" data-value="7" id="s7"></i>
        <i class="fas fa-star selectStar" data-value="8" id="s8"></i>
        <i class="fas fa-star selectStar" data-value="9" id="s9"></i>
        <i class="fas fa-star selectStar" data-value="10" id="s10"></i>

        </div> 
      </div>
    `
    } else {
        bookLine = ` 
      <div class="row justify-content-md-center book"  d >
          <div class="col col-lg-7" >
            ${title} (${author})
          </div>
      
          <div class="col col-lg-1 ">
            <i class="fas fa-star"></i>
          </div>
          <div data-bookId="${id}" class="col col-lg-4">
          <i class="fas fa-star selectStar" data-value="1" id="s11"></i>
          <i class="fas fa-star selectStar" data-value="2" id="s2"></i>
          <i class="fas fa-star selectStar" data-value="3" id="s3"></i>
          <i class="fas fa-star selectStar" data-value="4" id="s4"></i>
          <i class="fas fa-star selectStar" data-value="5" id="s5"></i>
          <i class="fas fa-star selectStar" data-value="6" id="s6"></i>
          <i class="fas fa-star selectStar" data-value="7" id="s7"></i>
          <i class="fas fa-star selectStar" data-value="8" id="s8"></i>
          <i class="fas fa-star selectStar" data-value="9" id="s9"></i>
          <i class="fas fa-star selectStar" data-value="10" id="s10"></i>
          </div> 
      </div>      
      `
    }

    let d1 = document.getElementById('lister');

    d1.insertAdjacentHTML('beforeend', bookLine);
}

function onSuccess(json) {
    // console.log(json)
    json.forEach(element => {
        createElement(element)
        
    });
  
    
    $( ".selectStar" ).on( "click", function() {
      let book = $(this).parent().attr("data-bookId");
      let user = "5e7d934988925f5699be7376"
      console.log( book , " is checked!" );
      let rating = $(this).data("value");
     

       const ratingData = {
         rating,
         book,
         user
       }

    fetch('/api/v1/ratings', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(ratingData),
       })
    .then((stream) => stream.json())
    .then((res) => {
      if (res.status === 200) {
      } else {
        console.log(res);
      }
     })
      .catch((err) => console.log(err));

    });

}

function handleError(err) {
    console.log(err)
}
console.log($("#s1"))
$("#s1").click(function () {
  $("#s1").css("color","yellow")

})

const buttonContainer = document.getElementById('button-group')

const orderFunctions = {
  descendingByRating: (a, b) => b.dataset.rates - a.dataset.rates,
  ascendingByRating: (a, b) => a.dataset.rates - b.dataset.rates,

}

let currentOrder;

buttonContainer.addEventListener('click', (e) => {
  currentOrder = orderFunctions[e.target.dataset.order]
  order()
})

const order = function() {
  const ordered = [...document.getElementsByClassName('book')].sort(currentOrder)
  ordered.forEach((elem, index) => {
    elem.style.order = index
  })
}