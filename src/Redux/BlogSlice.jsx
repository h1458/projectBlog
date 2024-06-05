import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosInstance from "../Api/AxiosInstance";

export const fetchAllblog = createAsyncThunk('blog/fetch', async() => {
    try{
        const res = await axiosInstance.get('allBlog')
        return res?.data?.data
    }catch(error){
        console.log(error)
    }
})

const initialState = {
    blogdata: [],
    status: 'success'
}

export const BlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllblog.pending, (state) => {
            state.status = 'loading...'
        })
        builder.addCase(fetchAllblog.fulfilled, (state,{payload}) => {
            state.blogdata = payload
            state.status = "success"
        })
        builder.addCase(fetchAllblog.rejected, (state) => {
            state.status = "rejected"
        })
    }
})
