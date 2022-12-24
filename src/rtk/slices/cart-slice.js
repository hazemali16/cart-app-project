import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find(
                (product) => product.id === action.payload.id
            );
            if (findProduct) {
                findProduct.counter += 1;
            } else {
                const productClone = { ...action.payload, counter: 1 };
                state.push(productClone);
            }
        },
        removeFromCart: (state, action) => {
            return action.payload.counter === 1
                ? state.filter((product) => product.id !== action.payload.id)
                : state.forEach((ele) =>
                    ele.id === action.payload.id ? (ele.counter -= 1) : null
                );
        },
        clearAll: (state, action) => {
            return [];
        },
    },
});

export const { addToCart, removeFromCart, clearAll } = cartSlice.actions;

export default cartSlice.reducer;
