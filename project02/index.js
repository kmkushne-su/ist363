        const TMDB_URL = 'https://api.themoviedb.org/3'; // This is the link to The Movie DataBase API
        const API_KEY = 'f1b1e209af5645b9e4a23efdb187a86f'; // This is my API Key for "https://api.themoviedb.org/3"
        const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // This is the link to the corresponding images associated with "https://api.themoviedb.org/3"

        async function fetchMovies() {
        // I believe this is best executed with a "try and catch" statement: https://www.w3schools.com/java/java_try_catch.asp
            try {
                const response = await fetch(`${TMDB_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`); // The Await Function: https://www.w3schools.com/js/js_async_await.asp
                const data = await response.json();
                const grid = document.getElementById('movieGrid');
                grid.innerHTML = ''; // This clears the loading message!

                // Get top 4 movies
                const movies = data.results.slice(0, 4);

                // I employed a "for" statement to repeat for each of the four movies (https://www.w3schools.com/js/js_loop_for.asp)
                for (const movie of movies) {
                    const streamData = await fetchStreaming(movie.id);
                    createMovieCard(movie, streamData);
                }

            } 
            catch (error) {
                console.error('There has been an error fetching the movie data from the Movie Database.', error);
                document.getElementById('movieGrid').innerHTML = 'There has been an error fetching the movie data from the Movie Database.';
            }
        }

        async function fetchStreaming(movieId) {
            try {
                const res = await fetch(`${TMDB_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`);
                const data = await res.json();
                // Return US streaming providers
                return data.results.US ? data.results.US : null;
            } catch (e) {
                return null;
            }
        }

        function createMovieCard(movie, streamData) {
            const grid = document.getElementById('movieGrid');
            
            // Format streaming text
            let streamText = '<span class="no-stream">Not currently streaming</span>';
            if (streamData && streamData.flatrate) {
                streamText = 'Streaming on: ' + streamData.flatrate.map(p => p.provider_name).slice(0, 2).join(', ');
            } else if (streamData && streamData.rent) {
                streamText = 'Available to rent';
            }

            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p class="movie-specifics">Release Date: ${movie.release_date}</p>
                    <p class="movie-specifics">⭐ ${movie.vote_average.toFixed(1)}/10</p>
                </div>
            `;
            grid.appendChild(card);
        }

        // Initialize
        fetchMovies();
