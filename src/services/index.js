import request from 'superagent';
import { MEDIA_TYPES } from '../constants';
import { sanitizeItem } from '../utils';

const {
    MOVIES,
    SHOWS,
} = MEDIA_TYPES;

const onSuccess = res => res.body;
const onSuccessList = type => res => _.map( onSuccess( res ), item => sanitizeItem( item, type ) );
const onSuccessSingle = type => res => sanitizeItem( onSuccess( res ), type );
const onError = err => { throw err };

export const getItemById = ( id, type ) => type === SHOWS ? getShowById( id ) : getMovieById ( id );

export const getMovieById = id => request( `/api/movies/${id}` )
    .then( onSuccessSingle( MOVIES ), onError );

export const getShowById = id => request( `/api/shows/${id}` )
    .then( onSuccessSingle( SHOWS ), onError );

export const getPopular = type => type === SHOWS ? getPopularShows() : getPopularMovies();

export const getPopularMovies = () => request( '/api/movies' )
    .then( onSuccessList( MOVIES ), onError );

export const getPopularShows = () => request( '/api/shows' )
    .then( onSuccessList( SHOWS ), onError );
