import { createContext, useCallback, useContext, useEffect, useReducer, useState } from 'react';
import { ACTIONS, setFlag, sreset } from './counter_actions';
import { counterReducer, initialState } from './counter_reducer';

const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [message, setMessage] = useState("");
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        if (state.flag)
            setMessage("Max click reached, please reset to continue...");
        else
            setMessage("");
    }, [state.flag]);

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
        <CounterContext.Provider value={{ state, dispatch: wrappedDispatch, message, remaining, resetAll }}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => {
    const context = useContext(CounterContext);

    if (context === undefined) {
        throw new Error("useCounter must be used within CounterContextProvider");
    }
    return context;
}

export default CounterContextProvider;