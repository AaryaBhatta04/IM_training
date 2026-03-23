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

// -------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";
import productAPIClient from "../../services/products_api_client";

const productsState = { items: [] };

export const productsSlice = createSlice({
    name: 'products',
    initialState: productsState,
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        }
    }
});

const { setProducts } = productsSlice.actions;

export const fetchProducts = function () {
    return async function (dispatch) {
        const products = await productAPIClient.getAllProducts();
        dispatch(setProducts(products));
    }
}

export default productsSlice.reducer;