
export const getMovieById = id => fetch( `/api/movies/${id}` ).then( res => res.json() );
export const getMovies = () => fetch( '/api/movies' ).then( res => res.json() );
export const getShows = () => fetch( '/api/shows' ).then( res => res.json() );