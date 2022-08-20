import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export const AddUser = createAsyncThunk(
    'auth/AddUser',
    async ({ userDetail, setSignUpLoading ,setUserDetail,userData}) => {
        try {
            setSignUpLoading(true)
            const response = await axios.post(`http://localhost:5000/auth/signupUser`,userDetail )
            console.log(response)
            // if(response.statuscode === 200){
                alert('User Has been created')
                setUserDetail(userData)
                return response.data
            // }
            // else {
            //     alert(response.statuscode+'-'+ response.massage)
            // }
        }
        catch (error) {
            alert( error.message)
            console.log({error})
        }
        finally {
            setSignUpLoading(false)
        }
     
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
            state.data = action.payload;
        })
    },
})

// Action creators are generated for each case reducer function
export const { } = AuthSlice.actions

export default AuthSlice.reducer