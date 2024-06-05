import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const fetchLatestPost = createAsyncThunk('latestpost/fetch', async() => {
    try{
        const res = await axiosInstance.get('letest-post')
        return res.data.data
    }catch(error){
        console.log(error)
    }
})

const initialState = {
    latestPost: [],
    status: 'success'
}

export const LatestPostSlice = createSlice({
    name: 'LatesPost',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchLatestPost.pending, (state) => {
            state.status = "loading..."
        })
        builder.addCase(fetchLatestPost.fulfilled, (state,{payload}) => {
            state.latestPost = payload
            state.status = "success"
        })
        builder.addCase(fetchLatestPost.rejected, (state) => {
            state.status = "rejected"
        })
    }
})