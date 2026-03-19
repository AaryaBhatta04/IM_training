import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useImperativeHandle, useReducer, useRef } from 'react';
import { decrement, increment, setFlag, sreset } from './counter_actions';
import { counterReducer, initialState } from './counter_reducer';
import { CounterControls } from './CounterControls';

export const Counter = React.forwardRef(({ interval = 1, onMax }, ref) => {
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
                <h3 className="text-info">Counter With Reducer - Structured</h3>
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