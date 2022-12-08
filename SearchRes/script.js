var data = JSON.parse(localStorage.getItem("obj"));
console.log(data);
var topTrend = document.querySelector(".topTrend")
const api_key = "api_key=78d045651ded8f375d57a9670cfd61da"
var info = document.querySelector(".info")
var infocont = document.querySelector(".infocont")
showMovie(data)
function showMovie(data) {

    data.results.forEach(element => {
        //console.log(element.id);
        // console.log(element);
        var trend = document.createElement("div");
        trend.classList.add("trend");
        if (element.title) {
            trend.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.title}</p>`
        }
        if (element.name) {
            trend.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.name}</p>`
        }
        console.log(element.title);
        topTrend.appendChild(trend);

        console.log(topTrend);
        trend.addEventListener('click', function () {
            getDetails(element);
        })

    })
}
function getDetails(element) {
    infocont.innerHTML = ''
    if (element.title) {
        getImageName(element.poster_path, element.title);
    }
    else {
        getImageName(element.poster_path, element.name);
    }
    getcast(element.id);
    getRating(element.id);

    getOverview(element.overview);
    getReleaseDate(element.release_date);

    getSimilarmovie(element.id)
    info.style.display = "block";

}
function getcast(movie_id) {
            fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?' + api_key + '&language=en-US')
                .then(respone => respone.json())
                .then(data => {

                    var castname = document.createElement("div");
                    castname.classList.add("castname");
                    infocont.appendChild(castname)
                    var p = document.createElement("p");

                    castname.classList.add("castname");
                    castname.innerHTML = "<span>CAST AND CREW: </span></br>"
                    var arr = []
                    data.cast.forEach(element => {
                        if ((element.popularity > 40)) {

                            arr.push(element.name)

                        }


                    });
                    if (arr.length == 0) {
                        data.cast.forEach(element => {
                            if ((element.order < 5)) {

                                arr.push(element.name)
                            }


                        });
                    }

                    castname.innerHTML = castname.innerHTML + arr;

                });


        }
function getRating(movie_id) {
            fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/reviews?' + api_key + '&language=en-US')
                .then(respone => respone.json())

                .then(data => {

                    var n = (data.total_results);
                    var ratingval = 0;
                    data.results.forEach(element => {
                        ratingval += (element.author_details.rating);

                    });
                    ratingval = ratingval / (n * 2)
                    ratingval = ratingval.toFixed(1);

                    if (ratingval != 'NaN' & ratingval != '0.0') {
                        var rating = document.createElement("div");
                        rating.classList.add("rating");
                        rating.innerHTML = "<span>RATING: </span>";
                        infocont.appendChild(rating)

                        var i = []

                        var i = ratingval.split('.')

                        for (let index = 0; index < i[0]; index++) {
                            //console.log(index);
                            rating.innerHTML += `<i class="fa-solid fa-star"></i>`

                        }
                        if (i[1] > 1) {
                            rating.innerHTML += `<i class="fa-solid fa-star-half-stroke"></i>`
                        }


                    }


                })


}
function getImageName(poster_path, title) {
    var movim = document.createElement("div");
    movim.classList.add("movim");
    movim.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${poster_path}" class="movimg"></p>`
    infocont.appendChild(movim)
    var movname = document.createElement("div");
    movname.classList.add("movname");
    movname.innerHTML = "<span>TITLE: </span>" + title;
    infocont.appendChild(movname)
}
function getOverview(overviewText) {
    // console.log(overview);
    var overview = document.createElement("div");
    overview.classList.add("overview");
    overview.innerHTML = "<span>OVERVIEW: </span></br>" + overviewText;

    infocont.appendChild(overview)


}

function getSimilarmovie(movie_id) {
    var infocont = document.querySelector(".infocont")
    var tit = document.createElement("div");
    tit.classList.add("tit");
    infocont.appendChild(tit);
    tit.innerHTML = `<span>SIMILAR MOVIES: </span>`
    var sim = document.createElement("div");
    sim.classList.add("sim");
    infocont.appendChild(sim);
    fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/similar?' + api_key + '&language=en-US&page=1')
        .then(respone => respone.json())
        .then(data => {

            data.results.forEach(element => {
                var simim = document.createElement("div");
                simim.classList.add("simim");
                simim.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="simimg"></p>`

                sim.appendChild(simim)
                var simname = document.createElement("div");
                simname.classList.add("simname");
                simname.innerHTML = element.title;
                //console.log(movname);
                simim.appendChild(simname)
                simim.addEventListener('click',function() {
                    getDetails(element);
                    
                })
            });
        });

}
function getReleaseDate(r_d) {
    var releaseDate = document.createElement("div");
    releaseDate.classList.add("releaseDate");
    var dateAr = r_d.split('-');
    var newDate = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];
    releaseDate.innerHTML = "<span>Release Date : </span>" + newDate;
    infocont.appendChild(releaseDate)

}
