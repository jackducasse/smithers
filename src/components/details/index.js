import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import classNames from 'classnames';
import styles from './styles.less';
import { getItemById } from '../../services';
import { Banner } from '../banner';
import { Poster } from '../poster';
import { toYear, minsToHours, ratingToPercent, sanitizeItem } from '../../utils';
import { Loader } from '../loader';
import { ErrorMessage } from '../message';
import { ROUTES, MEDIA_TYPES } from '../../constants';

const {
    SHOWS,
} = MEDIA_TYPES;

export const Details = ( {
    id,
    type,
} ) => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( null );
    const [ item, setItem ] = useState( {} );

    useEffect( () => {
        setIsLoading( true );
        getItemById( id, type ).then( item => {
            setItem( item );
            setIsLoading( false );
        }, err => setError( err ) );
    }, [ id ] );

    const {
        backdrop_path,
        overview,
        poster_path,
        _date,
        _length,
        _name,
        vote_average,
    } = item;

    if ( error ) return <ErrorMessage>{error.message}</ErrorMessage>;
    if ( isLoading || _.isEmpty( item ) ) return <Loader />;
    return (
        <div className={classNames( 'details', styles.container )}>
            <Link to={ROUTES.POPULAR( type )}>
                <i className="material-icons back">arrow_back</i>
            </Link>
            <Banner url={backdrop_path}/>
            <div className="wrapper">
                <div className="container">
                    <div className="summary">
                        <div className="poster-wrapper">
                            <Poster title={name} url={poster_path} />
                        </div>
                        <div className="summary-details">
                            <h3 className="title">
                                {_name}
                            </h3>
                            <div className="subtext">{!!_date && toYear(_date)} &nbsp;&middot;&nbsp; {ratingToPercent(vote_average)}{'% User Score'}</div>
                            <div className="subtext">{!!_length && minsToHours(_length)}</div>
                        </div>
                    </div>
                    <div className="overview">
                        <h4>Overview</h4>
                        <p className="description">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
