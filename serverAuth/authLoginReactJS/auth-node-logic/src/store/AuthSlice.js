import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export const AddUser = createAsyncThunk(
    'auth/AddUser',
    async () => {
        try{
             const response = await axios.post(`http://localhost:5000/auth/addUser/`)
            console.log(response.data)
        }
        catch(error){
            console.log('error',error)
        }
       
        return null
    }
)




const initialState = {
    isUser: true
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(AddUser.fulfilled, (state, action) => {
        })
    },
})

// Action creators are generated for each case reducer function
export const { } = AuthSlice.actions

export default AuthSlice.reducer