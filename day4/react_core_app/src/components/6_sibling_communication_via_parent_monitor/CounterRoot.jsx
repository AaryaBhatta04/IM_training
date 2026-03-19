import { useCallback, useEffect, useReducer, useState } from 'react';
import { CounterAlt } from './CounterAlt';
import { CounterMonitor } from './CounterMonitor';
import { ACTIONS, setFlag, sreset } from './counter_actions';
import { counterReducer, initialState } from './counter_reducer';

const CounterRoot = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [message, setMessage] = useState("");
    const [clickCount, setClickCount] = useState(0);

    const updateMessage = useCallback((flag) => {
        if (flag)
            setMessage("Max click reached, please reset to continue...")
        else
            setMessage("");
    }, []);

    useEffect(() => {
        updateMessage(state.flag);
    }, [state.flag, updateMessage]);

    const wrappedDispatch = useCallback((action) => {
        if (action.type === ACTIONS.INCREMENT || action.type === ACTIONS.DECREMENT) {
            setClickCount(prev => {
                const newCount = prev + 1;
                if (newCount > 9) {
                    dispatch(setFlag(true));
                }
                return newCount;
            });
        }
        dispatch(action);
    }, []);

    const resetAll = useCallback(() => {
        setClickCount(0);
        dispatch(sreset());
    }, []);

    const remaining = 10 - clickCount;

    return (
        <>
            {message && <h2 className='text-center text-primary'>{message}</h2>}
            <div className="row">
                <div className="col-6">
                    <CounterAlt state={state} dispatch={wrappedDispatch} interval={5} remaining={remaining} onReset={resetAll} />
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
