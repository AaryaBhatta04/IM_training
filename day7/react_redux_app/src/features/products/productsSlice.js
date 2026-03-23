// import { createSlice } from "@reduxjs/toolkit";

// const productsState = { items: [
//     {
//       "id": "1",
//       "name": "Item One",
//       "description": "Gadget",
//       "status": "Available"
//     },
//     {
//       "id": "2",
//       "name": "Item Two",
//       "description": "Widget",
//       "status": "Available"
//     }
// ] };

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState: productsState
// });

// export default productsSlice.reducer;

// // -------------------------------------------------------

// import { createSlice } from "@reduxjs/toolkit";
// import productAPIClient from "../../services/products_api_client";

// const productsState = { items: [] };

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState: productsState,
//     reducers: {
//         setProducts: (state, action) => {
//             state.items = action.payload;
//         }
//     }
// });

// const { setProducts } = productsSlice.actions;

// export const fetchProducts = function () {
//     return async function (dispatch) {
//         const products = await productAPIClient.getAllProducts();
//         dispatch(setProducts(products));
//     }
// }

// export default productsSlice.reducer;

// ------------------------------------------------------- Using Async Thunk

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPIClient from "../../services/products_api_client";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { rejectWithValue }) => {
    try {
        return await productAPIClient.getAllProducts();
    } catch (error) {
        return rejectWithValue(error.message || 'Error occured while getting products');
    }
})

const productsState = {
    items: [],
    status: 'idle',
    error: null
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: productsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
});

export default productsSlice.reducer;