import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Searchbar } from '../searchbar';
import { List } from '../list';
import styles from './styles.less';
import { getMovies, getMovieById } from '../../services';
import { TMDB_LOGO } from '../../constants';

export const Landing = ( {

} ) => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ items, setItems ] = useState( [] );
    const [ searchType, setSearchType ] = useState( 'movies' );
    const [ searchQuery, setSearchQuery ] = useState( '' );

    useEffect( () => {
        setIsLoading( true );
        getMovies().then( items => {
            setItems( items );
            setIsLoading( false );
        } );
    }, [ searchType ] );

    const filteredItems = _.filter( 
        items, 
        item => _.toLower( item.title ).match( _.toLower( searchQuery ) ),
    );

    if ( isLoading ) return <div>Loading..</div>
    return (
        <div className={classNames( 'landing', styles.container )}>
            <div className="header">
                <img alt="TMDB" src={TMDB_LOGO} height="50" width="50" />
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