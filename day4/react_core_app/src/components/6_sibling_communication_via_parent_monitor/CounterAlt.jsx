import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { decrement, increment } from './counter_actions';

export const CounterAlt = ({ state, dispatch, interval = 1, remaining, onReset }) => {
    const inc = useCallback(() => {
        dispatch(increment(interval));
    }, [interval, dispatch]);

    const dec = useCallback(() => {
        dispatch(decrement(interval));
    }, [interval, dispatch]);

    return (
        <div className="card shadow mx-auto" style={{ maxWidth: '400px', borderRadius: '16px', overflow: 'hidden' }}>
            <div className="card-header text-center py-3"
                style={{
                    background: state.flag
                        ? 'linear-gradient(135deg, #dc3545, #c82333)'
                        : 'linear-gradient(135deg, #0dcaf0, #0aa2c0)',
                    transition: 'background 0.4s ease',
                }}>
                <h5 className="text-white mb-0 fw-semibold">Counter</h5>
                <small className="text-white-50">Interval: {interval}</small>
            </div>

            <div className="card-body text-center py-4">
                <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                        width: '130px',
                        height: '130px',
                        background: state.flag
                            ? 'linear-gradient(135deg, #dc3545, #ff6b6b)'
                            : 'linear-gradient(135deg, #0dcaf0, #48d1e8)',
                        boxShadow: state.flag
                            ? '0 8px 25px rgba(220, 53, 69, 0.35)'
                            : '0 8px 25px rgba(13, 202, 240, 0.35)',
                        transition: 'all 0.4s ease',
                    }}
                >
                    <span className="text-white fw-bold" style={{ fontSize: '2.8rem' }}>
                        {state.count}
                    </span>
                </div>

                {!state.flag && (
                    <p className="text-muted small mb-3">
                        {remaining} click{remaining !== 1 ? 's' : ''} remaining
                    </p>
                )}

                <div className="d-flex justify-content-center gap-3 mt-2">
                    <button
                        className="btn btn-success rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '55px', height: '55px', fontSize: '1.5rem', boxShadow: '0 3px 10px rgba(25,135,84,0.3)' }}
                        disabled={state.flag}
                        onClick={inc}
                        title="Increment"
                    >
                        +
                    </button>
                    <button
                        className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '55px', height: '55px', fontSize: '1.5rem', boxShadow: '0 3px 10px rgba(220,53,69,0.3)' }}
                        disabled={state.flag}
                        onClick={dec}
                        title="Decrement"
                    >
                        -
                    </button>
                    <button
                        className="btn btn-warning rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '55px', height: '55px', fontSize: '1.5rem', boxShadow: '0 3px 10px rgba(255,193,7,0.3)' }}
                        disabled={!state.flag}
                        onClick={onReset}
                        title="Reset"
                    >
                        &#8634;
                    </button>
                </div>
            </div>
        </div>
    );
};

CounterAlt.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    interval: PropTypes.number,
    remaining: PropTypes.number.isRequired,
    onReset: PropTypes.func.isRequired,
};
