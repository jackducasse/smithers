import request from 'superagent';

const onSuccess = res => res.body;
const onError = err => { throw err };

export const getMovieById = id => request( `/api/movies/${id}` )
    .then( onSuccess, onError );
export const getMovies = () => request( '/api/movies' )
    .then( onSuccess, onError );
export const getShows = () => request( '/api/shows' )
    .then( onSuccess, onError );