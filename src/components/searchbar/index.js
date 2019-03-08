import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';

export const Searchbar = ( {
    onChange,
    value,
} ) => (
    <div className={classNames( 'searchbar', styles.container )}>
        <input
            onChange={e => onChange( e.target.value )}
            value={value}
            placeholder="Search"
        />
        <i className="material-icons search">search</i>
    </div>
);
