import { createSlice } from "@reduxjs/toolkit";

const counterState = { count: 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState: counterState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementBy: (state, action) => {
            state.count += action.payload;
        },
        decrementBy: (state, action) => {
            state.count -= action.payload;
        }
    }
});

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions;

export default counterSlice.reducer;