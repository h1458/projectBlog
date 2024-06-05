import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const fetchblogDetails = createAsyncThunk('blogdetails/fetch', async(id) => {
    try{
        const res = await axiosInstance.get(`blogdetails/${id}`)
        return res?.data?.data
    }catch(error){
        console.log(error)
    }
})

const initialState = {
    blogdetailsdata: [],
    status: 'success'
}

export const blogdeatilsSlice = createSlice({
    name: 'blogdetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchblogDetails.pending, (state) => {
            state.status = "loading..."
        })
        builder.addCase(fetchblogDetails.fulfilled, (state , {payload}) => {
            state.blogdetailsdata = payload
            state.status = "success"
        })
        builder.addCase(fetchblogDetails.rejected, (state) => {
            state.status = "rejected"
        })
    }
})