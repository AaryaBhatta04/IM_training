import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { Counter } from './Counter';
import { CounterAlt } from './CounterAlt';
import { setFlag, sreset } from './counter_actions';
import { counterReducer, initialState } from './counter_reducer';

const CounterRoot = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [message, setMessage] = useState("");

    const clickCount = useRef(0);
    const firstRender = useRef(true);
    const isResetting = useRef(false);

    const updateMessage = useCallback((flag) => {
        if (flag)
            setMessage("Max click reached, please reset to continue...")
        else
            setMessage("");
    }, []);

    useEffect(() => {
        updateMessage(state.flag);
    }, [state.flag, updateMessage]);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (isResetting.current) {
            isResetting.current = false;
            return;
        }
        clickCount.current++;
        if (clickCount.current > 9) {
            dispatch(setFlag(true));
        }
    }, [state.count]);

    const resetAll = useCallback(() => {
        isResetting.current = true;
        clickCount.current = 0;
        dispatch(sreset());
    }, []);

    const remaining = 10 - clickCount.current;

    return (
        <>
            {message && <h2 className='text-center text-primary'>{message}</h2>}
            <div className="row">
                <div className="col-6">
                    <Counter state={state} dispatch={dispatch} remaining={remaining} onReset={resetAll} />
                    <div className="d-grid gap-2 mx-auto col-6 mt-4">
                        <button className="btn btn-warning" onClick={resetAll}>
                            <span className='fs-4'>Parent Reset</span>
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <CounterAlt state={state} dispatch={dispatch} interval={5} remaining={remaining} onReset={resetAll} />
                </div>
            </div>

        </>
    );
}

export default CounterRoot;
// The key principle: state that needs to be shared between siblings must live in their common parent.
// The parent passes it down; either child dispatching an action updates both.
