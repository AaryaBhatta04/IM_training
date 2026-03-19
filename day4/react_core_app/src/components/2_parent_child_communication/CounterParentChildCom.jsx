import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

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

const Counter = React.forwardRef(({ interval = 1, onMax }, ref) => {
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

    useEffect(() => {
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

    useImperativeHandle(ref, () => {
        return { reset };
    });

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
});

Counter.propTypes = {
    interval: PropTypes.number,
    onMax: PropTypes.func
}

function CounterParentChildCom() {
    const [message, setMessage] = useState("");
    const counterRef = useRef(null);

    const updateMessage = (flag) => {
        if (flag)
            setMessage("Max click reached, please reset to continue...")
        else
            setMessage("");
    }

    const p_reset = () => {
        // console.log(counterRef.current);
        if (counterRef.current)
            counterRef.current.reset();
    }

    return (
        <>
            {message && <h2 className='text-center text-primary'>{message}</h2>}
            <Counter onMax={updateMessage} ref={counterRef} />
            <div className="d-grid gap-2 mx-auto col-6 mt-4">
                <button className="btn btn-warning" onClick={p_reset}>
                    <span className='fs-4'>Parent Reset</span>
                </button>
            </div>
        </>
    );
}

export default CounterParentChildCom;

// Patterns of parent-child communication
// 1. Parent → Child (via Props)
// - Counter passes flag, inc, dec, reset to CounterControls
// - CounterParentChildCom passes interval and onMax callback to Counter

// 2. Child → Parent (via Callback Props) - Child wants to call Parent Method
// - CounterParentChildCom passes onMax callback to Counter
// - Counter calls onMax(flag) to notify CounterAssignment when max clicks are reached
// - CounterParentChildCom receives this via updateMessage and updates its own message state

// 3. Parent → Child - (via Ref + useImperativeHandle)- Parent wants to call Child method
// - Counter uses React.forwardRef and useImperativeHandle to expose its reset method to the parent
// - CounterParentChildCom holds a counterRef and can call into the child via counterRef.current
// - The "Parent Reset" button triggers p_reset which accesses the child through the ref
