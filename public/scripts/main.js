
$.ajax({
    method: 'GET',
    url: '/api/v1/books',
    success: onSuccess,
    error: handleError
});

let user = "5e7eb3eb9beb627b50ac44ff"; // needs to get from authorized user



function onSuccess(json) {
    // console.log(json)
    json.forEach(element => {
        createElement(element);

    });

    order();


    $(".selectStar").on("click", function () {
        let book = $(this).parent().attr("data-bookId");
        var attr = $(this).attr('data-ratingid');
        if (!attr) {
            // There is no rating: make one

            let $this = $(this);

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
                    // Get instantly user rating
                    $this.parent().append(`<span class="userRating">${res.rating}</span>`);


                    let ratingId;
                    ratingId = res._id;

                    $(this).attr("data-ratingId", res._id);


                })
                .catch((err) => console.log(err));


        } else {

            // The is a rating: delete it
            if (typeof attr !== typeof undefined && attr !== false) {

                let $this = $(this);



                $.ajax({
                    method: 'DELETE',
                    url: '/api/v1/ratings/' + $(this).attr('data-ratingid'),
                    success: deleteSuccess,
                    error: deleteError
                });

                function deleteSuccess(result) {
                    console.log("itworks");
                    $this.removeAttr("data-ratingid")
                    let makeOrange = 0;
                    makeOrange = $this.data("value")

                    for (let i = 0; i < makeOrange; i++) {
                        $this.parent().children().eq(i).removeClass("clickedOrange")

                    }

                }

                function deleteError(params) {
                    console.log(params)
                }

            }
        }
    });



    function createElement(element) {
        let title = element.title;
        let author = element.author;
        let id = element._id;


        let bookLine;
        // Check if there is any rating
        if (element.ratings.length) {
            // console.log(element.ratings[1].user)


            let sum = 0;

            //Get average of each rating 
            for (let i = 0; i < element.ratings.length; i++) {
                sum += element.ratings[i].rating

                //Get user ratings for each book. 
                if (element.ratings[i].user === user) {

                    var userRating = element.ratings[i].rating;


                }
            }

            var avg = sum / element.ratings.length
            // Get two digits
            avg = avg.toFixed(1)

            bookLine = `
      <div class="row justify-content-md-center book" data-rates="${avg}">
        <div class="col col-lg-6" >
          ${title} (${author})
        </div>
    
        <div class="col col-lg-2 ">
          <i class="fas fa-star">${avg} <span class="ratingLength">(${element.ratings.length} rating)</span> </i>
        </div>
        <div data-bookId="${id}" class="col col-lg-4 rateStar">
        <i class="fas fa-star selectStar" data-value="1" ></i>
        <i class="fas fa-star selectStar" data-value="2" ></i>
        <i class="fas fa-star selectStar" data-value="3" ></i>
        <i class="fas fa-star selectStar" data-value="4" ></i>
        <i class="fas fa-star selectStar" data-value="5" ></i>
        <i class="fas fa-star selectStar" data-value="6" ></i>
        <i class="fas fa-star selectStar" data-value="7" ></i>
        <i class="fas fa-star selectStar" data-value="8" ></i>
        <i class="fas fa-star selectStar" data-value="9" ></i>
        <i class="fas fa-star selectStar" data-value="10"  ></i><span class="userRating">${userRating}</span>


        </div> 
      </div>
    `
        } else {
            bookLine = ` 
      <div class="row justify-content-md-center book" data-rates="0">
          <div class="col col-lg-7" >
            ${title} (${author})
          </div>
      
          <div class="col col-lg-1 ">
            <i class="fas fa-star"></i>
          </div>
          <div data-bookId="${id}" class="col col-lg-4 rateStar">
          <i class="fas fa-star selectStar" data-value="1" "></i>
          <i class="fas fa-star selectStar" data-value="2" ></i>
          <i class="fas fa-star selectStar" data-value="3" ></i>
          <i class="fas fa-star selectStar" data-value="4" ></i>
          <i class="fas fa-star selectStar" data-value="5" ></i>
          <i class="fas fa-star selectStar" data-value="6" ></i>
          <i class="fas fa-star selectStar" data-value="7" ></i>
          <i class="fas fa-star selectStar" data-value="8" ></i>
          <i class="fas fa-star selectStar" data-value="9" ></i>
          <i class="fas fa-star selectStar" data-value="10"  ></i>
          </div> 
      </div>      
      `
        }

        let d1 = document.getElementById('lister');

        d1.insertAdjacentHTML('beforeend', bookLine);

    }

    $(".selectStar").on("click", function (e) {

        let makeOrange = 0;
        makeOrange = $(this).data("value")

        for (let i = 0; i < makeOrange; i++) {
            $(this).parent().children().eq(i).addClass("clickedOrange")

        }


    })

    $(".selectStar").on("mouseover", function (e) {


        let makeOrange = 0;
        makeOrange = $(this).data("value")

        for (let i = 0; i < makeOrange; i++) {
            $(this).parent().children().eq(i).addClass("hoverOrange")

        }

    })
    $(".selectStar").on("mouseout", function (e) {


        let makeOrange = 0;
        makeOrange = $(this).data("value")

        for (let i = 0; i < makeOrange; i++) {
            $(this).parent().children().eq(i).removeClass("hoverOrange")

        }
    })
}

function handleError(err) {
    console.log(err)
}


// const buttonContainer = document.getElementById('button-group')

const orderFunctions = {
    descendingByRating: (a, b) => b.dataset.rates - a.dataset.rates,
    ascendingByRating: (a, b) => a.dataset.rates - b.dataset.rates,
}

let currentOrder = orderFunctions.descendingByRating;


// buttonContainer.addEventListener('click', (e) => {
//     currentOrder = orderFunctions[e.target.dataset.order]
//     order()
// })

const order = function () {
    const ordered = [...document.getElementsByClassName('book')].sort(currentOrder)
    ordered.forEach((elem, index) => {
        elem.style.order = index
    })
}
