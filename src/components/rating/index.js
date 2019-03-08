import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import { ratingToPercent, ratingToGroup } from '../../utils';

export const Rating = ( {
    rating,
} ) => (
    <div className={classNames( 'rating', styles.container, ratingToGroup( rating ) )}>
        {ratingToPercent( rating )}%
    </div>
);
