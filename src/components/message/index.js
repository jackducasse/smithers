import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';

export const Message = ( { children, type } ) => (
    <div className={classNames( 'message', type, styles.container )}>
        {children}
    </div>
);

export const ErrorMessage = ( { children } ) => (
    <Message type="error">
        {children}
    </Message>
);
