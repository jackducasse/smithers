import { MEDIA_TYPES } from "../constants";

export const toMonthAndYear = date => new Date( date ).toLocaleDateString( [], { month: 'long', year: 'numeric' } );
export const toYear = date => new Date( date ).toLocaleDateString( [], { year: 'numeric' } );

export const minsToHours = mins => {
    const hours = mins >= 60 ? `${Math.round( mins / 60 )}h ` : '';
    const _mins = ( mins % 60 ) ? `${mins % 60}m` : '';
    return `${hours}${_mins}`;
};

export const ratingToGroup = rating => {
    if ( rating >= 7 ) return 'high';
    if ( rating < 7 && rating > 4 ) return 'medium';
    if ( rating <= 4 ) return 'low';
    return 'none';
}
export const ratingToPercent = rating => rating * 10;


export const sanitizeItem = ( item, type ) => {
    const isShow = type === MEDIA_TYPES.SHOWS;
    const {
        name,
        title,
        release_date,
        first_air_date,
        runtime,
        episode_run_time,
    } = item;
    return {
        ...item,
        _name: isShow ? name : title,
        _date: isShow ? first_air_date : release_date,
        _length: isShow ? _.first( episode_run_time ) : runtime,
    };
};