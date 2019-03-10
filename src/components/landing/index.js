import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import classNames from 'classnames';
import { Searchbar } from '../searchbar';
import { List } from '../list';
import styles from './styles.less';
import { getPopular } from '../../services';
import { TMDB_LOGO, MEDIA_TYPES, ROUTES } from '../../constants';
import { Loader } from '../loader';
import { ErrorMessage, Message } from '../message';
import { Background } from '../background';

const {
    MOVIES,
    SHOWS,
} = MEDIA_TYPES;

export const Landing = ( {
    type,
} ) => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( null );
    const [ items, setItems ] = useState( [] );
    const [ searchQuery, setSearchQuery ] = useState( '' );

    useEffect( () => {
        setIsLoading( true );
        getPopular( type ).then( items => {
            setItems( items );
            setIsLoading( false );
        }, err => setError( err ) );
    }, [ type ] );

    const filteredItems = _.filter( 
        items, 
        item => _.toLower( item._name ).match( _.toLower( searchQuery ) ),
    );

    if ( error ) return <ErrorMessage>{error.message}</ErrorMessage>;
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
                    <div className="title">
                        <h4>Popular {_.capitalize( type )}</h4>
                        <div className="types">
                        <Link to={ROUTES.POPULAR( MOVIES )}>
                            <i
                                className={classNames( 'material-icons movies', { 
                                active: type === MOVIES,
                            } )}>local_movies</i>
                        </Link>
                        <Link to={ROUTES.POPULAR( SHOWS )}>
                            <i 
                                className={classNames( 'material-icons shows', { 
                                active: type === SHOWS,
                            } )}>tv</i>
                        </Link>
                        </div>
                    </div>
                    {
                        !!items.length && !filteredItems.length && <Message>No {type} found. Try another search.</Message>
                    }
                    {
                        ( isLoading || !items.length ) ? <Loader /> : <List type={type} items={filteredItems} />
                    }
                </div>
            </div>
        </div>
    );
};