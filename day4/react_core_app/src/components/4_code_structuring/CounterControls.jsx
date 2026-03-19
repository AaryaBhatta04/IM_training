import React from 'react';

export const CounterControls = React.memo(({ flag, inc, dec, reset }) => {
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