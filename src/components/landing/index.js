import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Searchbar } from '../searchbar';
import { List } from '../list';
import styles from './styles.less';
import { getMovies, getMovieById } from '../../services';
import { TMDB_LOGO } from '../../constants';
import { Loader } from '../loader';
import { ErrorMessage } from '../error-message';
import { Background } from '../background';

export const Landing = ( {

} ) => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( null );
    const [ items, setItems ] = useState( [] );
    const [ searchType, setSearchType ] = useState( 'movies' );
    const [ searchQuery, setSearchQuery ] = useState( '' );

    useEffect( () => {
        setIsLoading( true );
        getMovies().then( items => {
            setItems( items );
            setIsLoading( false );
        }, err => setError( err ) );
    }, [ searchType ] );

    const filteredItems = _.filter( 
        items, 
        item => _.toLower( item.title ).match( _.toLower( searchQuery ) ),
    );

    if ( error ) return <ErrorMessage>{error.message}</ErrorMessage>;
    if ( isLoading || !items.length ) return <Loader />;
    return (
        <div className={classNames( 'landing', styles.container )}>
            <div className="header">
                <Background />
                <div className="logo">
                    <img alt="TMDB" src={TMDB_LOGO} height="50" width="50" />
                </div>
                <Background className="right" />
            </div>
            <div className="wrapper">
                <div className="container">
                    <Searchbar onChange={setSearchQuery} value={searchQuery} />
                    <h4>Popular {_.capitalize( searchType )}</h4>
                    <List items={filteredItems} />
                </div>
            </div>
        </div>
    );
};