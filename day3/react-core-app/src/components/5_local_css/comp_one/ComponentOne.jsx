import { Component } from 'react';
import styles from './ComponentOne.module.css';

class ComponentOne extends Component {
    render() {
        return (
            <>
                <h1 className='text-primary'>Hello from Component One</h1>
                <h1 className={`${styles.componentOneCard}`}>From Component One</h1>
                <h1 className={`${styles.card}`}>From Component One</h1>
            </>
        );
    }
}

export default ComponentOne;
