import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useImperativeHandle, useReducer, useRef } from 'react';
import { decrement, increment, setFlag, sreset } from './counter_actions';
import { counterReducer, initialState } from './counter_reducer';

const CounterUi = React.forwardRef(({ interval = 1, onMax }, ref) => {
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
        // Ensure onMax is called safely
        if (onMax) onMax(state.flag);
    }, [state.flag, onMax]);

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

    const remaining = Math.max(0, 10 - clickCount.current);
    const progressPercentage = (clickCount.current / 10) * 100;

    return (
        <div className="container py-4">
            <div className="text-center mb-4">
                <h3 className="text-secondary fw-bold">Counter App</h3>
            </div>
            
            <div className="card border-0 shadow-lg rounded-4 mx-auto" style={{ maxWidth: '400px', overflow: 'hidden' }}>
                {/* Top Accent Line */}
                <div 
                    className={`py-1 ${state.flag ? 'bg-danger' : 'bg-primary'}`} 
                    style={{ transition: 'background-color 0.4s ease' }}
                ></div>

                <div className="card-body p-4 p-sm-5">
                    <div className="text-center mb-4">
                        <h5 className="card-title text-dark fw-bold mb-1">Structured Counter</h5>
                        <p className="text-muted small">Manage your count up to 10 clicks.</p>
                    </div>

                    {/* Main Counter Display */}
                    <div className="text-center mb-4">
                        <div
                            className={`rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm`}
                            style={{
                                width: '130px',
                                height: '130px',
                                backgroundColor: state.flag ? '#fff5f5' : '#f0f9ff',
                                border: state.flag ? '4px solid #dc3545' : '4px solid #0d6efd',
                                transition: 'all 0.4s ease',
                            }}
                        >
                            <span 
                                className={`fw-bolder ${state.flag ? 'text-danger' : 'text-primary'}`} 
                                style={{ fontSize: '3.5rem', transition: 'color 0.3s ease' }}
                            >
                                {state.count}
                            </span>
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between small text-muted mb-1 fw-semibold">
                            <span>Click Usage</span>
                            <span>{clickCount.current} / 10</span>
                        </div>
                        <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
                            <div
                                className={`progress-bar ${state.flag ? 'bg-danger' : 'bg-primary'}`}
                                role="progressbar"
                                style={{ width: `${progressPercentage}%`, transition: 'width 0.3s ease, background-color 0.3s ease' }}
                                aria-valuenow={clickCount.current}
                                aria-valuemin="0"
                                aria-valuemax="10"
                            ></div>
                        </div>
                        
                        {/* Dynamic Status Text */}
                        <div className="text-center mt-2" style={{ minHeight: '20px' }}>
                            {!state.flag ? (
                                <p className="text-muted small mb-0">
                                    {remaining} click{remaining !== 1 ? 's' : ''} remaining
                                </p>
                            ) : (
                                <p className="text-danger small mb-0 fw-bold animate__animated animate__pulse">
                                    Limit Reached! Reset required.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Interactive Controls */}
                    <div className="d-flex justify-content-center gap-3">
                        <button
                            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                            style={{ width: '55px', height: '55px', fontSize: '1.5rem' }}
                            disabled={state.flag}
                            onClick={dec}
                            title="Decrement"
                        >
                            -
                        </button>
                        <button
                            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                            style={{ width: '55px', height: '55px', fontSize: '1.5rem' }}
                            disabled={state.flag}
                            onClick={inc}
                            title="Increment"
                        >
                            +
                        </button>
                        <button
                            className={`btn ${state.flag ? 'btn-danger shadow' : 'btn-light text-muted'} rounded-circle d-flex align-items-center justify-content-center`}
                            style={{ width: '55px', height: '55px', fontSize: '1.5rem', transition: 'all 0.3s' }}
                            disabled={!state.flag}
                            onClick={reset}
                            title="Reset"
                        >
                            &#8634;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

CounterUi.propTypes = {
    interval: PropTypes.number,
    onMax: PropTypes.func,
};

export default CounterUi;