import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useImperativeHandle, useReducer, useState } from 'react';
import { decrement, increment, setFlag, sreset } from './counter_actions';
import { counterReducer, initialState } from './counter_reducer';

export const CounterAlt = React.forwardRef(({ interval = 1, onMax }, ref) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        onMax(state.flag);
    }, [state.flag]);

    const handleClick = useCallback((action) => {
        dispatch(action);
        setClickCount(prev => {
            const newCount = prev + 1;
            if (newCount > 9) {
                dispatch(setFlag(true));
            }
            return newCount;
        });
    }, []);

    const inc = useCallback(() => {
        handleClick(increment(interval));
    }, [interval, handleClick]);

    const dec = useCallback(() => {
        handleClick(decrement(interval));
    }, [interval, handleClick]);

    const reset = useCallback(() => {
        setClickCount(0);
        dispatch(sreset());
    }, []);

    useImperativeHandle(ref, () => {
        return { reset };
    });

    const remaining = 10 - clickCount;

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Alternative</h3>
            </div>
            <div className="card shadow-sm mx-auto" style={{ maxWidth: '360px' }}>
                <div className="card-body text-center">
                    <h5 className="card-title text-secondary mb-3">Counter Alt - Structured</h5>

                    <div
                        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{
                            width: '120px',
                            height: '120px',
                            backgroundColor: state.flag ? '#dc3545' : '#0dcaf0',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        <span className="text-white fw-bold" style={{ fontSize: '2.5rem' }}>
                            {state.count}
                        </span>
                    </div>

                    {!state.flag && (
                        <p className="text-muted small mb-3">
                            {remaining} click{remaining !== 1 ? 's' : ''} remaining
                        </p>
                    )}

                    <div className="d-flex justify-content-center gap-3">
                        <button
                            className="btn btn-outline-success rounded-circle"
                            style={{ width: '50px', height: '50px' }}
                            disabled={state.flag}
                            onClick={inc}
                            title="Increment"
                        >
                            +
                        </button>
                        <button
                            className="btn btn-outline-danger rounded-circle"
                            style={{ width: '50px', height: '50px' }}
                            disabled={state.flag}
                            onClick={dec}
                            title="Decrement"
                        >
                            -
                        </button>
                        <button
                            className="btn btn-outline-warning rounded-circle"
                            style={{ width: '50px', height: '50px' }}
                            disabled={!state.flag}
                            onClick={reset}
                            title="Reset"
                        >
                            &#8634;
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
});

CounterAlt.propTypes = {
    interval: PropTypes.number,
    onMax: PropTypes.func,
};
