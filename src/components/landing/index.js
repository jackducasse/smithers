import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Searchbar } from '../searchbar';
import { List } from '../list';
import styles from './styles.less';
import { getMovies, getMovieById } from '../../services';

export const Landing = ( {

} ) => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ items, setItems ] = useState( [] );
    const [ searchType, setSearchType ] = useState( 'movies' );

    useEffect( () => {
        setIsLoading( true );
        getMovies().then( items => {
            setItems( items );
            setIsLoading( false );
        } );
    }, [ searchType ] );

    if ( isLoading ) return <div>Loading..</div>
    return (
        <div className={classNames( 'landing', styles.container )}>
            <div className="header">
            
            </div>
            <div className="container">
                <Searchbar />
                <h4>Popular {_.capitalize( searchType )}</h4>
                <List items={items} />
            </div>
        </div>
    );
};