import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { decrement, increment } from './counter_actions';
import { CounterControls } from './CounterControls';

export const Counter = ({ state, dispatch, remaining, onReset, interval = 1 }) => {
    const inc = useCallback(() => {
        dispatch(increment(interval));
    }, [interval, dispatch]);

    const dec = useCallback(() => {
        dispatch(decrement(interval));
    }, [interval, dispatch]);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter - Sibling Communication</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={state.count} readOnly />
                <CounterControls
                    flag={state.flag}
                    inc={inc}
                    dec={dec}
                    reset={onReset} />
            </div>
        </>
    );
};

Counter.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    remaining: PropTypes.number.isRequired,
    onReset: PropTypes.func.isRequired,
    interval: PropTypes.number
}
