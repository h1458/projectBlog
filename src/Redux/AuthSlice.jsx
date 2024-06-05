import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";
import { toast } from "react-toastify";


const initialState = {
    userData: {},
    status: 'idel',
    logoutToggel: false,
    redirectToo: null,
    redirectTooe: null,
    loading: false,
    redirectToRegister: null,
    logindata: []
}
export const registerPost = createAsyncThunk('signUp', async(data) => {
    try{
        const res = await axiosInstance.post('register', data)
        console.log(res)
        toast(res?.data?.message)
        return res
    }catch(error) {
        toast(error?.res?.data?.message)
        console.log(error)
    }
})

export const loginPost = createAsyncThunk('signIn', async(data) => {
    try{
        const res = await axiosInstance.post('login', data)
        toast(res?.data?.message)
        return res
    }catch(error) {
        toast(error?.res?.data?.message)
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        logout: (state, {payload}) => {
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            localStorage.removeItem("image")
            state.logoutToggel = false
        },

        regLogout: (state) => {
            localStorage.removeItem('name')
        },

        check_token: (state) => {
            let token = localStorage.getItem('token')
            if(token !== null && token !== undefined){
                state.logoutToggel = true
            }
        },
        redirectToo: (state,{payload}) => {
            state.redirectToo = payload
        },
        redirectTooe: (state,{payload}) => {
            state.redirectTooe = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerPost.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerPost.fulfilled, (state, {payload}) => {
            if(payload?.data?.success === true){
                localStorage.setItem('name', payload?.data?.data?.name)
                state.redirectToo = '/login'
                state.loading = false
                toast(payload?.data.message)
            }
        })
        builder.addCase(registerPost.rejected, (state) => {
            state.loading = false
            state.status = 'rejected'
        })
        builder.addCase(loginPost.pending, (state) => {
            state.loading = 'loading'
            state.loading = true
        })
        builder.addCase(loginPost.fulfilled, (state, {payload}) => {
            state.status = 'idel'
            console.log("payload",payload?.data?.status)
            if(payload?.data?.status === 200){
                localStorage.setItem("token", payload?.data?.token)
                localStorage.setItem("name", payload?.data?.user.name)
                localStorage.setItem("image", payload?.data?.user?.photo)
                state.redirectTooe = "/blog"
                state.logindata = payload?.data?.user?._id
                state.logoutToggel = true
                state.loading = false
                toast(payload?.data?.message);
            }else if (payload?.data?.status === 400){
                state.loading = false
                toast(payload?.data?.message);
            }
        })
        builder.addCase(loginPost.rejected, (state, {payload}) => {
            state.status = 'rejected'
            state.loading = false
            
        })
    }
})

export const {logout, regLogout, check_token, redirectToo, redirectTooe, loading, logindata} = authSlice.actions