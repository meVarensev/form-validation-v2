import React  from 'react';
import styles from "./steps-container.module.scss"
const StepContainer: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export {StepContainer};
