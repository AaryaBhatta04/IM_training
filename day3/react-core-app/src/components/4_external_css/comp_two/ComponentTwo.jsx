import { Component } from 'react';
import './ComponentTwo.css';

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <h1 className='text-success'>Hello from Component Two</h1>
                <h1 className='componentTwoCard'>From Component Two</h1>
            </>
        );
    }
}

export default ComponentTwo;