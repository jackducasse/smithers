import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import styles from './styles.less';
import { POSTER_BASE } from '../../constants';


export const Poster = ( {
    url,
    title,
} ) => (
    <img 
        alt={title}
        src={`${POSTER_BASE.SMALL}${url}`}
        className={classNames( 'poster', styles.container )}
    />
);