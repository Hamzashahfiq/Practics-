import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getProduct = createAsyncThunk(
    'product/getProduct',
    async ({ setGetProductLoading }) => {
        try {
            console.log('hallo')
            setGetProductLoading(true)
            const response = await axios.get(`http://localhost:5000/product/getProduct`)
            return response?.data?.data;
        }
        catch (error) {
            console.log({ error })
        }
        finally {
            setGetProductLoading(false)
        }

    }
)




const initialState = {
    products: []
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action?.payload;
        })
       
    },
})

// Action creators are generated for each case reducer function
export const { } = ProductSlice.actions

export default ProductSlice.reducer