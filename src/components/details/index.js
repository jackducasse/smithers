import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import styles from './styles.less';
import {  getMovieById } from '../../services';

export const Details = ( {
    id,
} ) => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ item, setItem ] = useState( [] );

    useEffect( () => {
        setIsLoading( true );
        getMovieById( id ).then( item => {
            setItem( item );
            setIsLoading( false );
        } );
    }, [ id ] );

    if ( isLoading ) return <div>Loading..</div>
    return (
        <div className={classNames( 'details', styles.container )}>
            <div className="header">
            
            </div>
            <div className="container">
                {item.title}
            </div>
        </div>
    );
};