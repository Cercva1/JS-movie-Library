

let movies = [];

function addMovie({title, director, year, genre, rating}){

    let movie = {title, director, year, genre, rating };
    movies.push(movie);

};

let movie1 = addMovie({title: "Avatar", director:"Steve Jobs", year:2009, 
    genre: "Drama", rating: 9.9});

    
let movie2 = addMovie({title:"Avatar2", director: "Steve Jobs", year: 2022, 
    genre: "Commedy", rating: 5.6});

    
let movie3 = addMovie({title: "Avatar3", director: "Steve Jobs", year: 2025, 
    genre: "Family", rating: 7.4});


let movie4 = addMovie({title: "Avatar4", director: "Steve Jobs", year: 2030, 
    genre: "Drama", rating: 4.6});

console.log(movies);

function listMovies(arr){
    for(let i = 0; i<arr.length; i++){
        console.log(`${i + 1}. ${arr[i].title} (${arr[i].year}) - ${arr[i].rating}`);
    };
};

let listMovies1 = listMovies(movies);

console.log(listMovies1);


function searchByTitle(title) {
    const movie = movies.find(m => m.title === title);
    return movie ? movie : "Movie not found";
}

console.log(searchByTitle("Avatar3"));
console.log(searchByTitle("NoMovie"));


const filterByRating = movies.filter(function(movies){
       return movies.rating >= 6;
});

console.log(filterByRating);


const filterByGenre = movies.filter(function(movies){
    return movies.genre === "Commedy";
});

console.log(filterByGenre);

