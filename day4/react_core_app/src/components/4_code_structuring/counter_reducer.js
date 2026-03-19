import { ACTIONS } from './counter_actions';

export const initialState = { count: 0, flag: false };

export function counterReducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { ...state, count: state.count + action.payload };
        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - action.payload };
        case ACTIONS.RESET:
            return { ...initialState };
        case ACTIONS.SETFLAG:
            return { ...state, flag: action.payload };
        default:
            return state;
    }
}