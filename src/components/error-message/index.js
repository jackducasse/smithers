import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';

export const ErrorMessage = ( { children } ) => (
    <div className={classNames( 'error-message', styles.container )}>
        {children}
    </div>
);
