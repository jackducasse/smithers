import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import classNames from 'classnames';
import styles from './styles.less';
import {  getMovieById } from '../../services';
import { Banner } from '../banner';
import { Poster } from '../poster';
import { toYear, minsToHours, ratingToPercent } from '../../utils';

export const Details = ( {
    id,
} ) => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ item, setItem ] = useState( {} );

    useEffect( () => {
        setIsLoading( true );
        getMovieById( id ).then( item => {
            setItem( item );
            setIsLoading( false );
        } );
    }, [ id ] );

    const {
        backdrop_path,
        overview,
        poster_path,
        release_date,
        runtime,
        title,
        vote_average,
    } = item;

    if ( isLoading || _.isEmpty( item ) ) return <div>Loading..</div>
    return (
        <div className={classNames( 'details', styles.container )}>
            <Link to="/">
                <i class="material-icons back">arrow_back</i>
            </Link>
            <Banner url={backdrop_path}/>
            <div className="wrapper">
                <div className="container">
                    <div className="summary">
                        <div className="poster-wrapper">
                            <Poster title={title} url={poster_path} />
                        </div>
                        <div className="summary-details">
                            <h3 className="title">
                                {title}
                            </h3>
                            <div className="subtext">{toYear(release_date)} &nbsp;&middot;&nbsp; {ratingToPercent(vote_average)}{'% User Score'}</div>
                            <div className="subtext">{minsToHours(runtime)}</div>
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