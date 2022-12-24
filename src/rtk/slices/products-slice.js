import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})
const productSlice = createSlice({
    initialState: [],
    name: "productSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

// export const {} = productSlice.actions

export default productSlice.reducer