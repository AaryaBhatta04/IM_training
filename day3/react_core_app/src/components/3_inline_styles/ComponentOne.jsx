import { Component } from 'react';

const card = { margin: '1em', paddingLeft: 0, border: '2px solid blue' };

class ComponentOne extends Component {
    render() {
        return (
            <>
                <h1 className='text-primary'>Hello from Component One</h1>
                <h1 style={{margin: '1em', paddingLeft:0, border: '2px solid blue'}}>From Component One</h1>
                <h1 style={card}>From Component One</h1>
            </>
        );
    }
}

export default ComponentOne;
