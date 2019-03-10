import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { ListItem } from './list-item';
import styles from './styles.less';
import { MEDIA_TYPES } from '../../constants';
import { sanitizeItem } from '../../utils';

const {
    SHOWS,
} = MEDIA_TYPES;

export const List = ( {
    type,
    items,
} ) => (
    <div className={classNames( 'list', styles.container )}>
        {_.map( items, item => {
            const {
                id,
                poster_path,
                vote_average,
                _name,
                _date,
            } = item;
            return (
                <ListItem
                    type={type}
                    id={id}
                    thumbnailUrl={poster_path}
                    rating={vote_average}
                    title={_name}
                    releaseDate={_date}
                />
            );
        } )}
    </div>
);
