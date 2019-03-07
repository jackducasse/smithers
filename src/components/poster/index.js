import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import styles from './styles.less';

const posterBaseUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

export const Poster = ( {
    children,
    url,
} ) => (
    <div 
        style={{backgroundImage: `url('${posterBaseUrl}${url}')`}}
        className={classNames( 'poster', styles.container )}
    >
        {children}
    </div>
);