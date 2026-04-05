// Using TMDB: https://developer.themoviedb.org/docs/json-and-jsonp
const TMDB_URL = 'https://api.themoviedb.org/3'; // This link details how to use with JSON: https://developer.themoviedb.org/docs/json-and-jsonp
const TMDB_KEY = 'f1b1e209af5645b9e4a23efdb187a86f'; // This took quite a qhile to figure out, but I learned how to use an API Key: https://www.shecodes.io/athena/10692-what-is-an-api-key-and-how-to-use-it-in-javascript
const MIMG_URL = 'https://image.tmdb.org/t/p/w500';

// Using DummyJSON: https://dummyjson.com/quotes/random + how to use with JSON: https://dummyjson.com/docs/quotes
const QUOTE_URL = 'https://dummyjson.com/quotes/random';


// The async fetch function that gets the movies!
async function fetchMovies() {
// I believe this is best executed with a "try and catch" statement (for trial, error, and success), as recommended on the website: https://www.w3schools.com/java/java_try_catch.asp + https://stackoverflow.com/questions/651619/what-is-the-advantage-of-using-try-catch-versus-if-else
    try {
        const response = await fetch(`${TMDB_URL}/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`); // Allowing variables inside of strings with the Dollar Sign: https://www.w3schools.com/js/js_strings.asp 
        const data = await response.json(); // Explaining the Await Function for Both Rows: https://www.w3schools.com/js/js_async_await.asp AND 
        const grid = document.getElementById('movieGrid');
        grid.innerHTML = ''; // This clears the loading message!

        // How to get the top four movies from the data: Slice: https://www.w3schools.com/jsref/jsref_slice_array.asp
        const movies = data.results.slice(0, 4);

        // I employed a "for" statement to repeat for each of the four movies (https://www.w3schools.com/js/js_loop_for.asp)
        for (const movie of movies) {
            createMovie(movie);
        }

    } 
    catch (error) {
        console.error('There has been an error fetching the movie data from the Movie Database.'); // Console Log the Error
        document.getElementById('movieGrid').innerHTML = 'There has been an error fetching the movie data from the Movie Database.'; // Writes out the Error in HTML!
    }
}

// This function creates the movie card!
function createMovie(movie) {
    const grid = document.getElementById('movieGrid');
    const card = document.createElement('movieGrid');
    card.className = 'movie-card';


    card.innerHTML = `
        <img src="${MIMG_URL + movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>⭐ ${movie.vote_average}/10</p>
        </div>
    `;
    // I could not figure out how to attach the cards to the page once they loaded, but I learned that I could "Append a Child" on W3Schools: https://www.w3schools.com/jsref/met_node_appendchild.asp
    grid.appendChild(card);
}

// The async fetch function that gets the random quotes!
async function fetchQuotes() {
    try {
        const response = await fetch(QUOTE_URL);
        const data = await response.json();

        document.getElementById('movieQuote').innerHTML =
            `"${data.quote}" — ${data.author}`;
    } 
    
    catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('movieQuote').innerHTML =
            'There has been an error fetching the quote data from the Random Quote Generator.';
    }
}

// Initialize Everything in the Document Object Model once loaded (this is why nothing was loading)!
document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
    fetchQuotes();
});

// I would like to review more about using APIs, the "try and catch" functions but I believe I generally understand the process!