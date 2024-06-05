import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const fetchCategoryList = createAsyncThunk('allCategory/fetch', async() => {
    try{
        const res = await axiosInstance.get('showallcategory')
        return res.data.data
    }catch(error){
        console.log(error)
    }
})

const initialState = {
    categoryList: [],
    status: 'success'
}

export const CategorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryList.pending, (state) => {
            state.status = 'loading...'
        })
        builder.addCase(fetchCategoryList.fulfilled, (state, {payload})=>{
            state.categoryList = payload
            state.status = "success"
        })
        builder.addCase(fetchCategoryList.rejected, (state) => {
            state.status = "rejected"
        })
    }
})