import React from 'react';
import styles from './styles.less';

export const Loader = () => (
    <svg 
        className={styles.container} 
        width="100" 
        height="100" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none"
            strokeWidth="5"
            strokeDasharray="251" 
            strokeDashoffse="251"
            strokeLinecap="round"
        />
    </svg>
)