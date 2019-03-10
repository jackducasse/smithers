export const ROUTES = {
    POPULAR: ( type = ':type' ) => `/${type}`,
    VIEW_ITEM: ( type = ':type', id = ':id' ) => `/${type}/${id}`,
};

export const MEDIA_TYPES = {
    MOVIES: 'movies',
    SHOWS: 'shows',
};

export const IMAGES_BASE = 'https://image.tmdb.org/t/p';
export const POSTER_SIZE = {
    SMALL: 'w185_and_h278_bestv2',
    LARGE: 'w300_and_h450_bestv2',
}
export const BANNER_SIZE = {
    SMALL: 'w500_and_h282_face',
    LARGE: 'w1400_and_h450_face',
}
export const POSTER_BASE = {
    SMALL: `${IMAGES_BASE}/${POSTER_SIZE.SMALL}`,
    LARGE: `${IMAGES_BASE}/${POSTER_SIZE.LARGE}`,
}
export const BANNER_BASE = {
    SMALL: `${IMAGES_BASE}/${BANNER_SIZE.SMALL}`,
    LARGE: `${IMAGES_BASE}/${BANNER_SIZE.LARGE}`,
}

export const TMDB_LOGO = 'https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg';