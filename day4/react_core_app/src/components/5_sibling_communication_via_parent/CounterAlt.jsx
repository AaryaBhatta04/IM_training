import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { decrement, increment } from './counter_actions';

export const CounterAlt = ({ state, dispatch, interval = 1, remaining, onReset }) => {
    const inc = useCallback(() => {
        dispatch(increment(interval));
    }, [interval, dispatch]);

    const dec = useCallback(() => {
        dispatch(decrement(interval));
    }, [interval, dispatch]);

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
                            onClick={onReset}
                            title="Reset"
                        >
                            &#8634;
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

CounterAlt.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    interval: PropTypes.number,
    remaining: PropTypes.number.isRequired,
    onReset: PropTypes.func.isRequired,
};
