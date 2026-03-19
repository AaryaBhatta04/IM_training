import { Component } from 'react';
import styles from './ComponentTwo.module.css';

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <h1 className='text-success'>Hello from Component Two</h1>
                <h1 className={`${styles.componentTwoCard}`}>From Component Two</h1>
                <h1 className={`${styles.card}`}>From Component Two</h1>
            </>
        );
    }
}

export default ComponentTwo;