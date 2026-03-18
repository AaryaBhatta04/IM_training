import { Component } from 'react';

const card = { margin: '1em', paddingLeft: 0, border: '2px dashed green' };

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <h1 className='text-success'>Hello from Component Two</h1>
                <h1 style={{ margin: '1em', paddingLeft: 0, border: '2px dashed green' }}>From Component Two</h1>
                <h1 style={card}>From Component Two</h1>
            </>
        );
    }
}

export default ComponentTwo;