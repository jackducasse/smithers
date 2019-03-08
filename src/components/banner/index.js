import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { BANNER_BASE } from '../../constants';
import styles from './styles.less';

export const Banner = ( {
    url,
} ) => {
    return (
        <div 
            style={{backgroundImage: `url('${BANNER_BASE.SMALL}${url}')`}}
            className={classNames( 'details', styles.container )}
        >

        </div>
    );
};