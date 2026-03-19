import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { CounterAlt } from './CounterAlt';
import { CounterMonitor } from './CounterMonitor';
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
                    <CounterAlt state={state} dispatch={dispatch} interval={5} remaining={remaining} onReset={resetAll} />
                </div>
                <div className="col-6">
                    <CounterMonitor state={state} remaining={remaining} onReset={resetAll} />
                </div>
            </div>
        </>
    );
}

export default CounterRoot;
// CounterAlt controls the shared state, CounterMonitor observes and can reset it.
