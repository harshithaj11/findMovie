
const api_key = "api_key=78d045651ded8f375d57a9670cfd61da"
const base_url = 'https://api.themoviedb.org/3/'
var info = document.querySelector(".info")
var infocont = document.querySelector(".infocont")
var topTrend = document.querySelector(".topTrend")
var upcoming = document.querySelector(".upcoming")
var topRated = document.querySelector(".topRated")
var popular = document.querySelector(".popular")
var nowplaying = document.querySelector(".nowplaying")
var adv = document.querySelector(".adv")
const search = document.querySelector(".search")

const form = document.querySelector(".form")
getTopTrend();
getUpcoming();
getTopRated();
getPopular();
getNowPlaying();
choosebg();

function choosebg() {
    var myPix = new Array("movie1.jpg", "movie2.webp", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg");
    var randomNum = Math.floor(Math.random() * myPix.length);
    console.log(myPix[randomNum])
    document.querySelector('.home').innerHTML = `<img src="` + myPix[randomNum] + `" alt="" class="bg"></img>`;

}

function getTopTrend() {
    fetch('https://api.themoviedb.org/3/trending/movie/day?' + api_key)
        .then((respone) => (respone.json()))
        .then(data => showMovie(data.results))
}

function showMovie(data) {
    data.forEach(element => {
        var trend = document.createElement("div");
        trend.classList.add("trend");
        if (element.title) {
            trend.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.title}</p>`
        }
        else {
            trend.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.name}</p>`
        }
        topTrend.appendChild(trend);

        trend.addEventListener('click', function () {
            getDetails(element);
        })

    });
}
function getNowPlaying() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?' + api_key + '&language=en-US&page=1')
        .then((respone) => (respone.json()))
        .then(data => showNowPlaying(data.results))
}
function showNowPlaying(data) {
    data.forEach(element => {
        var np = document.createElement("div");
        np.classList.add("trend");
        np.classList.add("np");
        if (element.title) {
            np.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.title}</p>`
        }
        else {
            np.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.name}</p>`
        }
        nowplaying.appendChild(np);

        np.addEventListener('click', function () {
            getDetails(element);
        })

    });
}

function getUpcoming() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?' + api_key + '&language=en-US&page=1')
        .then((respone) => (respone.json()))
        .then(data => showUpcomingMovie(data.results))
}

function showUpcomingMovie(data) {

    data.forEach(element => {
        //console.log(element.id);
        // console.log(element);
        var upc = document.createElement("div");
        upc.classList.add("trend");
        upc.classList.add("upc");
        if (element.title) {
            upc.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.title}</p>`
        }
        else {
            upc.innerHTML = `${element.name}`
        }
        upcoming.appendChild(upc);
        // console.log(topTrend);
        upc.addEventListener('click', function () {
            getDetails(element);
        })

    });
}

function getTopRated() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?' + api_key + '&language=en-US&page=1')
        .then((respone) => (respone.json()))
        .then(data => showTopRatedMovie(data.results))
}
function showTopRatedMovie(data) {
    //console.log(data);
    data.forEach(element => {
        //console.log(element);
        var topr = document.createElement("div");
        topr.classList.add("trend");
        topr.classList.add("topr");
        if (element.title) {
            topr.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.title}</p>`
        }
        else {
            topr.innerHTML = `${element.name}`
        }
        topRated.appendChild(topr);

        // console.log(topTrend);
        topr.addEventListener('click', function () {
            getDetails(element)
        })

    });
}
function getPopular() {
    fetch('https://api.themoviedb.org/3/movie/popular?' + api_key + '&language=en-US&page=1')
        .then((respone) => (respone.json()))
        .then(data => showPopular(data.results))
}

function showPopular(data) {

    data.forEach(element => {
        //console.log(element);
        var popl = document.createElement("div");
        popl.classList.add("trend");
        popl.classList.add("popl");
        if (element.title) {
            popl.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.title}</p>`
        }
        else {
            popl.innerHTML = `${element.name}`
        }
        popular.appendChild(popl);

        // console.log(topTrend);
        popl.addEventListener('click', function () {
            getDetails(element);
        })

    });
}

function showNowPlaying(data) {

    data.forEach(element => {
        //console.log(element);
        var np = document.createElement("div");
        np.classList.add("trend");
        np.classList.add("np");
        if (element.title) {
            np.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"><p class="title">${element.title}</p>`
        }
        else {
            np.innerHTML = `${element.name}`
        }
        nowplaying.appendChild(np);

        // console.log(topTrend);
        np.addEventListener('click', function () {

            infocont.innerHTML = ''

            var movim = document.createElement("div");
            movim.classList.add("movim");
            movim.innerHTML = `<img src ="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movimg"></p>`
            infocont.appendChild(movim)

            var movname = document.createElement("div");
            movname.classList.add("movname");
            movname.innerHTML = "<span>TITLE: </span>" + element.title;
            infocont.appendChild(movname)

            getcast(element.id);
            getRating(element.id);


            var overview = document.createElement("div");
            overview.classList.add("overview");
            overview.innerHTML = "<span>OVERVIEW: </span></br>" + element.overview;
            infocont.appendChild(overview)

            var releaseDate = document.createElement("div");
            releaseDate.classList.add("releaseDate");
            var dateAr = element.release_date.split('-');
            var newDate = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];
            releaseDate.innerHTML = "<span>Release Date : </span>" + newDate;
            infocont.appendChild(releaseDate)

            info.style.display = "block";
            getSimilarmovie(element.id);
        })

    });
}

function getSimilarmovie(movie_id) {
    var infocont = document.querySelector(".infocont")
    var tit = document.createElement("div");
    tit.classList.add("tit");
    infocont.appendChild(tit);
    tit.innerHTML = `SIMILAR MOVIES:`
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
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        fetch('https://api.themoviedb.org/3/search/movie?' + api_key + '&language=en-US&page=1&include_adult=false+&query=' + searchTerm)
            .then(respone => respone.json())
            .then(data => showSearchResults(data))
    }

})
function showSearchResults(data) {
    // var dict = {}
    window.open("../SearchRes/searchres.html");
    let myobj = JSON.stringify(data)
    localStorage.setItem("obj", myobj)

    // data.results.forEach(element => {
    //     if (element.title) {
    //img = ``https://image.tmdb.org/t/p/w500${element.poster_path}

    // localStorage.setItem('Name',element.title)
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
function getcast(movie_id) {
    fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?' + api_key + '&language=en-US')
        .then(respone => respone.json())
        .then(data => {
            var infocont = document.querySelector(".infocont")
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
function getReleaseDate(r_d) {
    var releaseDate = document.createElement("div");
    releaseDate.classList.add("releaseDate");
    var dateAr = r_d.split('-');
    var newDate = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];
    releaseDate.innerHTML = "<span>Release Date : </span>" + newDate;
    infocont.appendChild(releaseDate)

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