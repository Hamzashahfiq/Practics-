import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ThemeConsumer } from 'styled-components'



export const AddUser = createAsyncThunk(
    'auth/AddUser',
    async ({ userDetail, setSignUpLoading, setUserDetail, userData }) => {
        try {
            setSignUpLoading(true)
            const response = await axios.post(`http://localhost:5000/auth/signupUser`, userDetail)
            alert(response?.data?.message)
            setUserDetail(userData)
            return response.data
        }
        catch (error) {
            alert(error?.response?.data?.message)
            console.log({ error })
        }
        finally {
            setSignUpLoading(false)
        }

    }
)
export const LoginUser = createAsyncThunk(
    'auth/LoginUser',
    async ({ userDetail, setLoginLoading, setUserDetail, userData }) => {
        try {
            setLoginLoading(true)
            const response = await axios.post(`http://localhost:5000/auth/signinUser`, userDetail)
            console.log(response)
            window.localStorage.setItem('token', response?.data?.token);
            alert(response?.data?.message)
            setUserDetail(userData)
            return { data: response?.data, isAllowed: true };
        }
        catch (error) {
            alert(error?.response?.data?.message)
            console.log({ error })
        }
        finally {
            setLoginLoading(false)
        }

    }
)
export const CurrentUser = createAsyncThunk(
    'auth/CurrentUser',
    async ({ setCurrentUserLoading }) => {
        try {
            setCurrentUserLoading(true)
            let token = window.localStorage.getItem('token');
            console.log({ token })
            const response = await axios.post(`http://localhost:5000/auth/currentUser`, null, { headers: { token: token } })
            console.log({ response })
            return true;
        }
        catch (error) {
            console.log({ error })
            return false;
        }
        finally {
            setCurrentUserLoading(false)
        }

    }
)
export const LogoutUser = createAsyncThunk(
    'auth/LogoutUser',
    async ({ setLogoutLoading }) => {
        try {
            setLogoutLoading(true)
            localStorage.removeItem("token")
             alert('User has been Logout')
            return false;
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLogoutLoading(false)
        }

    }
)




const initialState = {
    isAllowed: false,
    data: ''
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
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.isAllowed = action.payload.isAllowed

        })
        builder.addCase(CurrentUser.fulfilled, (state, action) => {
            state.isAllowed = action.payload

        })
        builder.addCase(LogoutUser.fulfilled, (state, action) => {
            state.isAllowed = action?.payload

        })
    },
})

// Action creators are generated for each case reducer function
export const { } = AuthSlice.actions

export default AuthSlice.reducer