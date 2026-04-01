
        // --- JAVASCRIPT ---
        const API_KEY = 'YOUR_TMDB_API_KEY'; // <--- REPLACE WITH YOUR KEY
        const BASE_URL = 'https://api.themoviedb.org/3';
        const IMG_URL = 'https://image.tmdb.org/t/p/w500';

        async function fetchMovies() {
            try {
                // 1. Fetch Popular Movies
                const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
                const data = await response.json();
                
                const grid = document.getElementById('movieGrid');
                grid.innerHTML = ''; // Clear loading message

                // Get top 8 movies
                const movies = data.results.slice(0, 8);

                for (const movie of movies) {
                    // 2. Fetch Streaming Data for each movie
                    const streamData = await fetchStreaming(movie.id);
                    createMovieCard(movie, streamData);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                document.getElementById('movieGrid').innerHTML = '<p>Error loading movies. Please check API Key.</p>';
            }
        }

        async function fetchStreaming(movieId) {
            try {
                const res = await fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`);
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
                    <p class="movie-meta">Release: ${movie.release_date}</p>
                    <p class="movie-meta">⭐ ${movie.vote_average.toFixed(1)}/10</p>
                    <div class="streaming-info">${streamText}</div>
                </div>
            `;
            grid.appendChild(card);
        }

        // Initialize
        fetchMovies();
