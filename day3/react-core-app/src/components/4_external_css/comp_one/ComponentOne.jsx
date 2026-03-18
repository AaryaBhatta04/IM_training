import { Component } from 'react';
import './ComponentOne.css';

class ComponentOne extends Component {
    render() {
        return (
            <>
                <h1 className='text-primary'>Hello from Component One</h1>
                <h1 className='componentOneCard'>From Component One</h1>
                <h1 className='card'>From Component One</h1>
            </>
        );
    }
}

export default ComponentOne;
