import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { BANNER_BASE } from '../../constants';
import styles from './styles.less';

export const Banner = ( {
    url,
} ) => (
    <div 
        style={{backgroundImage: url && `url('${BANNER_BASE.SMALL}${url}')`}}
        className={classNames( 'banner', styles.container )}
    />
);
