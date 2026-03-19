import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const CounterControls = React.memo(({ flag, inc, dec, reset }) => {
    console.log("CounterControls Render Executed");

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
});

const Counter = ({ interval = 1, onMax }) => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const clickCount = useRef(0);
    const firstRender = useRef(true);
    const isResetting = useRef(false);

    const manageClickCount = useCallback(() => {
        clickCount.current++;
        if (clickCount.current > 9) {
            setFlag(true);
        }
    }, []);

    useEffect(()=>{
        onMax(flag);
    }, [flag]);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (isResetting.current) {
            isResetting.current = false;
            return;
        }
        manageClickCount();
    }, [count, manageClickCount]);

    const inc = useCallback(() => {
        setCount(prev => prev + interval);
    }, [interval]);

    const dec = useCallback(() => {
        setCount(prev => prev - interval);
    }, [interval]);

    const reset = useCallback(() => {
        isResetting.current = true;
        clickCount.current = 0;
        setCount(0);
        setFlag(false);
    }, []);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Functional Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={count} readOnly />
                <CounterControls
                    flag={flag}
                    inc={inc}
                    dec={dec}
                    reset={reset} />
            </div>
        </>
    );
}

Counter.propTypes = {
    interval: PropTypes.number,
    onMax: PropTypes.func
}

function CounterParentChildCom() {
    const [message, setMessage] = useState("");

    const updateMessage = (flag) => {
        if (flag)
            setMessage("Max click reached, please reset to continue...")
        else
            setMessage("");
    }

    return (
        <>
            {message && <h2 className='text-center text-primary'>{message}</h2>}
            <Counter onMax={updateMessage}/>
        </>
    );
}

export default CounterParentChildCom;

// Patterns of parent-child communication
// 1. Parent → Child (via Props)
// - Counter passes flag, inc, dec, reset to CounterControls
// - CounterParentChildCom passes interval and onMax callback to Counter

// 2. Child → Parent (via Callback Props)
// - Counter calls onMax(flag) to notify CounterAssignment when max clicks are reached
// - CounterAssignment receives this via updateMessage and updates its own message state