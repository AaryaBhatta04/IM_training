import { createSlice } from "@reduxjs/toolkit";

const productsState = { items: [
    {
      "id": "1",
      "name": "Item One",
      "description": "Gadget",
      "status": "Available"
    },
    {
      "id": "2",
      "name": "Item Two",
      "description": "Widget",
      "status": "Available"
    }
] };

export const productsSlice = createSlice({
    name: 'products',
    initialState: productsState
});

export default productsSlice.reducer;