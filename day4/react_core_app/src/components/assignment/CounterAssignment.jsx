import PropTypes from 'prop-types';
import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, flag: false };
        this.clickCount = 0;
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
        this.reset = this.reset.bind(this)
    }

    manageClickCount() {
        this.clickCount += 1;
        if (this.clickCount > 9) {
            this.setState({ flag: true });
        }
    }

    inc() {
        this.setState(
            (prev) => ({ count: prev.count + this.props.interval }), 
            () => { this.manageClickCount(); });
    }

    dec() {
        this.setState(
            (prev) => ({ count: prev.count - this.props.interval }), 
            () => { this.manageClickCount(); });
    }

    reset() {
        this.clickCount = 0;
        this.setState({ count: 0, flag: false });
    }

    render() {
        const { count, flag } = this.state;

        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input type="text" className="form-control form-control-lg" value={count} readOnly />
                    <CounterControls
                        flag={flag}
                        inc={this.inc}
                        dec={this.dec}
                        reset={this.reset} />
                </div>
            </>
        );
    }
}

Counter.propTypes = {
    interval: PropTypes.number
}

Counter.defaultProps = {
    interval: 1
}

class CounterControls extends Component {
    render() {
        const { flag, inc, dec, reset } = this.props;

        return (
            <div className="d-grid gap-2">
                <button className="btn btn-info" disabled={flag} onClick={inc}>
                    <span className="fs-4">+</span>
                </button>
                <button className="btn btn-info" disabled={flag} onClick={dec}>
                    <span className="fs-4">-</span>
                </button>
                <button className="btn btn-secondary" disabled={!flag} onClick={reset}>
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
                <Counter interval={5} />
            </div>
        );
    }
}

export default CounterAssignment;