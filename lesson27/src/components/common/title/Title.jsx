import React from 'react';

import styles from './styles.scss';

export const Title = ({title}) => {

    return (
        <div>
            <span className={styles.title}>{title}</span>
        </div>
    );
};
