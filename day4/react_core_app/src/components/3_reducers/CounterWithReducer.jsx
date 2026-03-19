import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';

const initialState = { count: 0, flag: false };

const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    SETFLAG: 'SETFLAG',
}

// Action Creators
const increment = (interval) => ({ type: ACTIONS.INCREMENT, payload: interval });
const decrement = (interval) => ({ type: ACTIONS.DECREMENT, payload: interval });
const sreset = () => ({ type: ACTIONS.RESET });
const setFlag = (value) => ({ type: ACTIONS.SETFLAG, payload: value });

function counterReducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { ...state, count: state.count + action.payload };
        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - action.payload };
        case ACTIONS.RESET:
            return { ...initialState };
        case ACTIONS.SETFLAG:
            return { ...state, flag: action.payload };
        default:
            return state;
    }
}

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
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const clickCount = useRef(0);
    const firstRender = useRef(true);
    const isResetting = useRef(false);

    const manageClickCount = useCallback(() => {
        clickCount.current++;
        if (clickCount.current > 9) {
            dispatch(setFlag(true));
        }
    }, []);

    useEffect(() => {
        onMax(state.flag);
    }, [state.flag]);

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
    }, [state.count, manageClickCount]);

    const inc = useCallback(() => {
        dispatch(increment(interval));
    }, [interval]);

    const dec = useCallback(() => {
        dispatch(decrement(interval));
    }, [interval]);

    const reset = useCallback(() => {
        isResetting.current = true;
        clickCount.current = 0;
        dispatch(sreset());
    }, []);

    useImperativeHandle(ref, () => {
        return { reset };
    });

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter With Reducer</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={state.count} readOnly />
                <CounterControls
                    flag={state.flag}
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

function CounterWithReducer() {
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

export default CounterWithReducer;
