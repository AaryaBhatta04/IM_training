export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    SETFLAG: 'SETFLAG',
}

// Action Creators
export const increment = (interval) => ({ type: ACTIONS.INCREMENT, payload: interval });
export const decrement = (interval) => ({ type: ACTIONS.DECREMENT, payload: interval });
export const sreset = () => ({ type: ACTIONS.RESET });
export const setFlag = (value) => ({ type: ACTIONS.SETFLAG, payload: value });
