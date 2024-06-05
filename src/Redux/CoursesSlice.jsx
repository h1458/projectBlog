import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const fetchAllCourses = createAsyncThunk('courses/fetch', async() =>{
    const res = await axiosInstance.get('course')
    return res?.data?.Courses
})


const initialState = {
    AllCourses: [],
    status: 'success'
}

export const Allcourses = createSlice({
    name: 'allcourses',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCourses.pending, (state)=> {
            state.status = "loading..."
        })
        builder.addCase(fetchAllCourses.fulfilled,(state, {payload}) => {
            state.AllCourses = payload
            state.status = "success"
        })
        builder.addCase(fetchAllCourses.rejected, (state) => {
            state.status = "rejected"
        })
    }

})