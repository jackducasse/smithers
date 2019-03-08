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
            title,
            release_date,
            vote_average,
        } ) => (
            <ListItem
                id={id}
                thumbnailUrl={poster_path}
                rating={vote_average}
                title={title}
                releaseDate={release_date}
            />
        ) )}
    </div>
);
