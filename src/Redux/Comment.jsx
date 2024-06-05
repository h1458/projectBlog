import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";



export const CommentsApi = createAsyncThunk('comment/fetch', async() => {
    try{
        const response = await axiosInstance.get('comment/65414e9242b46fcbaff7213c')
        console.log("comment",response)
        return response?.data?.post?.comment
    }catch(error){
        console.log("error while get comment", error)
    }
})

const initialState = {
    status: 'success',
    commentData: []
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(CommentsApi.pending,(state) => {
            state.status = "loading..."
        })
        builder.addCase(CommentsApi.fulfilled,(state,{payload}) => {
            state.commentData = payload?.comments
            state.status = 'success'
            console.log("hhahah",payload)
            
        })
       builder.addCase(CommentsApi.rejected, (state) => {
            state.status = "rejected"
        })
    }
})