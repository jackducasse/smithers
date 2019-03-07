import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { ListItem } from './list-item';
import styles from './styles.less';

export const List = ( {
    items,
} ) => (
    <div className={classNames( 'list', styles.container )}>
        {_.map( items, ( {
            id,
            poster_path,
            rating,
            title,
            release_date,
        } ) => (
            <ListItem
                id={id}
                thumbnailUrl={poster_path}
                rating={rating}
                title={title}
                releaseDate={release_date}
            />
        ) )}
    </div>
);
