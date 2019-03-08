export const toMonthAndYear = date => new Date( date ).toLocaleDateString( [], { month: 'long', year: 'numeric' } );
export const toYear = date => new Date( date ).toLocaleDateString( [], { year: 'numeric' } );

export const minsToHours = mins => `${Math.round( mins / 60 )}h ${mins % 60}m`;

export const ratingToGroup = rating => {
    if ( rating >= 7 ) return 'high';
    if ( rating < 7 && rating > 4 ) return 'medium';
    if ( rating <= 4 ) return 'low';
    return 'none';
}
export const ratingToPercent = rating => rating * 10;