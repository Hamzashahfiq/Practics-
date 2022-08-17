import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export const AddUser = createAsyncThunk(
    'auth/AddUser',
    async ({ userDetail, setSignUpLoading }) => {
        try {
            setSignUpLoading(true)
            console.log(userDetail)
            const response = await axios.post(`http://localhost:5000/auth/signupUser`,userDetail )
            console.log(response)
        }
        catch (error) {
            console.log('error', error)
        }
        finally {
            setSignUpLoading(false)
        }
        return true
    }
)




const initialState = {
    isAllowed: false,
    data:['dhjf', 'hdsjf']
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(AddUser.fulfilled, (state, action) => {
          state.isAllowed = action.payload  
        })
    },
})

// Action creators are generated for each case reducer function
export const { } = AuthSlice.actions

export default AuthSlice.reducer