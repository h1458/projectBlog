import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../Api/AxiosInstance";


export const fetchBanner = createAsyncThunk("banner/Fetch", async() => {
    try{
        const res = await axios.get('https://restapinodejs.onrender.com/api/banner')
        return res?.data?.bannerdata
    }catch(error){
        console.log(error)
    }
})

export const fetchService = createAsyncThunk("service/Fetch", async() => {
    try{
        const res = await axiosInstance.get('service')
        return res?.data?.data
    }catch(error){
        console.log(error)
    }
})

export const fetchTeam = createAsyncThunk("team/Fetch", async() => {
    try{
        const res = await axiosInstance.get('team')
        return res?.data?.TeamMember
    }catch(error){
        console.log(error)
    }
})

export const fetchTestimonial = createAsyncThunk("testtimonial/Fetch", async() => {
    try{
        const res = await axiosInstance.get('testimonial')
        return res?.data?.testimonials

    }catch(error){
        console.log(error)
    }
})

const initialState = ({
    Service: [],
    Banner: [],
    Team:[],
    Testimonial:[],
    status: 'success',

})

export const BannerSlice = createSlice({
    name: 'Banner',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBanner.pending, (state) => {
            state.status = "Loading..."
        })
        builder.addCase(fetchBanner.fulfilled, (state, {payload}) => {
            state.status = "success"
            state.Banner =  payload
        })
        builder.addCase(fetchBanner.rejected, (state) => {
            state.status = "rejected"
        })
        builder.addCase(fetchService.pending, (state) => {
            state.status = "Loading..."
        })
        builder.addCase(fetchService.fulfilled, (state, {payload}) => {
            state.status = "success"
            state.Service =  payload
        })
        builder.addCase(fetchService.rejected, (state) => {
            state.status = "rejected"
        })
        builder.addCase(fetchTeam.pending, (state) => {
            state.status = "Loading..."
        })
        builder.addCase(fetchTeam.fulfilled, (state, {payload}) => {
            state.status = "success"
            state.Team =  payload
        })
        builder.addCase(fetchTeam.rejected, (state) => {
            state.status = "rejected"
        })
        builder.addCase(fetchTestimonial.pending, (state) => {
            state.status = "Loading..."
        })
        builder.addCase(fetchTestimonial.fulfilled, (state, {payload}) => {
            state.status = "success"
            state.Testimonial =  payload
        })
        builder.addCase(fetchTestimonial.rejected, (state) => {
            state.status = "rejected"
        })
    }
})