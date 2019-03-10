import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import styles from './styles.less';

export const Background = ( {
    className,
} ) => {
    return (
        <svg
            height="150"
            width="150"
            viewBox="0 0 100 100"
            className={classNames( 'background', className, styles.container )}
        >
            <line x1="90" y1="0" x2="50" y2="30" />
            <line x1="90" y1="15" x2="50" y2="45" />

            <line x1="90" y1="50" x2="25" y2="98.75" />
        </svg>
    );
};