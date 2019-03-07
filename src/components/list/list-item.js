import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Rating } from '../rating';
import { Poster } from '../poster';
import styles from './styles.less';
import { toMonthAndYear } from '../../utils';
import { ROUTES } from '../../constants';

export const ListItem = ( {
    id,
    thumbnailUrl,
    rating,
    title,
    releaseDate,
} ) => (
    <Link className={classNames( 'list-item', styles.item )} to={ROUTES.VIEW_ITEM( id )}>
        <Poster url={thumbnailUrl}>
            <Rating rating={rating} />
        </Poster>
        <h6 className="title">{title}</h6>
        <div className="release-date">{toMonthAndYear( releaseDate )}</div>
    </Link>
);
