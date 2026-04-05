// Using TMDB: https://developer.themoviedb.org/docs/json-and-jsonp

const TMDB_URL = 'https://api.themoviedb.org/3';
const TMDB_KEY = 'f1b1e209af5645b9e4a23efdb187a86f';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchMovies() {
// I believe this is best executed with a "try and catch" statement: https://www.w3schools.com/java/java_try_catch.asp
    try {
        const response = await fetch(`${TMDB_URL}/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`); // The Await Function for Both Rows: https://www.w3schools.com/js/js_async_await.asp
        const data = await response.json();
        const grid = document.getElementById('movieGrid');
        grid.innerHTML = ''; // This clears the loading message!

        // Slice: https://www.w3schools.com/jsref/jsref_slice_array.asp
        const movies = data.results.slice(0, 4);

        // I employed a "for" statement to repeat for each of the four movies (https://www.w3schools.com/js/js_loop_for.asp)
        for (const movie of movies) {
            createMovieCard(movie);
        }

    } 
    
    catch (error) {
        console.error('There has been an error fetching the movie data from the Movie Database.');
        document.getElementById('movieGrid').innerHTML = 'There has been an error fetching the movie data from the Movie Database.';
    }
}

function createMovieCard(movie) {
    const grid = document.getElementById('movieGrid');
    const card = document.createElement('movieGrid');
    card.className = 'movie-card';

    // Review this!
    card.innerHTML = `
        <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-specifics">Release Date: ${movie.release_date}</p>
            <p class="movie-specifics">⭐ ${movie.vote_average.toFixed(1)}/10</p>
        </div>
    `;

    // Append Child: https://www.w3schools.com/jsref/met_node_appendchild.asp
    grid.appendChild(card);
}

// Initialize
fetchMovies();