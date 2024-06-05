import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const fetchCategoryPost = createAsyncThunk('categoryPost/fetch', async(id) => {
        try{
            const res = await axiosInstance.get(`category/post/${id}`)
            return res.data.data
        }catch(error){
            console.log(error)
        }
})

const initialState = {
    CategoryPostdata: [],
    status: 'success'
}

export const categoryPostSlice = createSlice({
    name: 'Categorypost',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryPost.pending, (state) => {
            state.status = "laoding..."
        })
        builder.addCase(fetchCategoryPost.fulfilled, (state,{payload}) => {
            state.status = "success"
            state.CategoryPostdata = payload
        })
        builder.addCase(fetchCategoryPost.rejected, (state) => {
            state.status = "rejected"
        })
    }
})