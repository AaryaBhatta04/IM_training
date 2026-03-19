import { useCounter } from './CounterContext';

export const CounterMonitor = () => {
    const { state, remaining, resetAll } = useCounter();

    const clicksUsed = 10 - remaining;
    const progress = Math.min((clicksUsed / 10) * 100, 100);

    return (
        <div className="card shadow mx-auto" style={{ maxWidth: '400px', borderRadius: '16px', overflow: 'hidden' }}>
            <div className="card-header text-center py-3"
                style={{
                    background: state.flag
                        ? 'linear-gradient(135deg, #dc3545, #c82333)'
                        : 'linear-gradient(135deg, #ffc107, #e0a800)',
                    transition: 'background 0.4s ease',
                }}>
                <h5 className="text-white mb-0 fw-semibold">Counter Monitor</h5>
                <small className="text-white-50">Live state from Parent</small>
            </div>

            <div className="card-body text-center py-4">
                <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                        width: '130px',
                        height: '130px',
                        background: state.count > 0
                            ? 'linear-gradient(135deg, #198754, #20c997)'
                            : state.count < 0
                                ? 'linear-gradient(135deg, #dc3545, #ff6b6b)'
                                : 'linear-gradient(135deg, #6c757d, #adb5bd)',
                        boxShadow: state.count > 0
                            ? '0 8px 25px rgba(25, 135, 84, 0.35)'
                            : state.count < 0
                                ? '0 8px 25px rgba(220, 53, 69, 0.35)'
                                : '0 8px 25px rgba(108, 117, 125, 0.35)',
                        transition: 'all 0.4s ease',
                    }}
                >
                    <span className="text-white fw-bold" style={{ fontSize: '2.8rem' }}>
                        {state.count}
                    </span>
                </div>

                <div className="mx-4 mb-3">
                    <div className="d-flex justify-content-between mb-1">
                        <small className="text-muted">Clicks used</small>
                        <small className="text-muted fw-semibold">{clicksUsed}/10</small>
                    </div>
                    <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
                        <div
                            className={`progress-bar ${progress < 50 ? 'bg-info' : progress < 80 ? 'bg-warning' : 'bg-danger'}`}
                            role="progressbar"
                            style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
                        />
                    </div>
                </div>

                {!state.flag && (
                    <p className="text-muted small mb-3">
                        {remaining} click{remaining !== 1 ? 's' : ''} remaining
                    </p>
                )}

                {state.flag && (
                    <span className="badge bg-danger fs-6 mb-3 px-3 py-2">MAX REACHED</span>
                )}

                {state.flag && (
                    <div className="mt-2">
                        <button
                            className="btn btn-warning rounded-circle d-flex align-items-center justify-content-center mx-auto"
                            style={{ width: '55px', height: '55px', fontSize: '1.5rem', boxShadow: '0 3px 10px rgba(255,193,7,0.3)' }}
                            onClick={resetAll}
                            title="Reset"
                        >
                            &#8634;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};