import { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input type="text" className="form-control form-control-lg" />
                    <CounterControls />
                </div>
            </>
        );
    }
}

class CounterControls extends Component {
    render() {
        return (
            <div className="d-grid gap-2">
                <button className="btn btn-info">
                    <span className="fs-4">+</span>
                </button>
                <button className="btn btn-info">
                    <span className="fs-4">-</span>
                </button>
                <button className="btn btn-secondary">
                    <span className="fs-4">Reset</span>
                </button>
            </div>
        );
    }
}

class CounterAssignment extends Component {
    render() {
        return (
            <div>
                <Counter />
                <hr />
                <Counter interval={10}/>
            </div>
        );
    }
}

export default CounterAssignment;