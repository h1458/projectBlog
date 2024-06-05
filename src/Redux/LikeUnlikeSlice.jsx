import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";
import { toast } from "react-toastify";

const initialState = {
    status: "success",
    like: {},
    unlike:{},
    commentdata: [],
    isLoading: false
}
export const likeapi = createAsyncThunk('like/put', async() => {
    try {
        const response = await axiosInstance.put('blog/like/65414e9242b46fcbaff7213c')
        return response?.data
    }catch(error){
        console.log("while putting like api", error)
    }
})
export const Unlikeapi = createAsyncThunk('Unlike/put', async() => {
    try {
        const response = await axiosInstance.put('blog/unlike/65414e9242b46fcbaff7213c')
        return response?.data
    }catch(error){
        console.log("while putting like api", error)
    }
})
export const CommpentPostapi = createAsyncThunk('Comment/post', async(data) => {
    try {
        const response = await axiosInstance.post('blog/65414e9242b46fcbaff7213c/comment/create', data)
        return response?.data
    }catch(error){
        console.log("while putting like api", error)
    }
})

export const CommentsApi = createAsyncThunk('comment/fetch', async() => {
    try{
        const response = await axiosInstance.get(`comment/65414e9242b46fcbaff7213c`)
        console.log("comment",response)
        return response?.data?.post?.comment
    }catch(error){
        console.log("error while get comment", error)
    }
})
export const ContactCreate = createAsyncThunk('contact/post', async(fromdata) => {
    try{
        const response = await axiosInstance.post(`contact/create`, fromdata)
        console.log("comment",response)
        return response?.data
    }catch(error){
        console.log("error while post contact", error)
    }
})

export const updatePassword = createAsyncThunk('update/post', async(data) => {
    try{
        const response = await axiosInstance.post(`update-password`, data)
        console.log("comment",response)
        return response?.data
    }catch(error){
        console.log("error while post updatepass", error)
    }
})

export const likeunlikeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(likeapi.pending, (state) => {
            state.status = "loading.."
        })
        .addCase(likeapi.fulfilled, (state , {payload}) => {
            console.log("hh",payload)
            state.status = "success"
            state.like = payload
        })
        .addCase(likeapi.rejected, (state) => {
            state.status = "rejected"
        })

        builder.addCase(Unlikeapi.pending, (state) => {
            state.status = "loading.."
        })
        .addCase(Unlikeapi.fulfilled, (state , {payload}) => {
            console.log("hh",payload)
            state.status = "success"
            state.unlike = payload
            
        })
        .addCase(Unlikeapi.rejected, (state) => {
            state.status = "rejected"
        })

        builder.addCase(CommpentPostapi.pending, (state) => {
            state.status = "loading.."
        })
        .addCase(CommpentPostapi.fulfilled, (state , {payload}) => {
            console.log("vv",payload?.data)
            state.status = "success"
            toast(payload?.message)
            
        })
        .addCase(CommpentPostapi.rejected, (state) => {
            state.status = "rejected"
        })
        builder.addCase(CommentsApi.pending, (state) => {
            state.status = "loading.."
        })
        .addCase(CommentsApi.fulfilled, (state , {payload}) => {
            console.log("nb",payload)
            state.status = "success"
            state.commentdata = payload?.comments
        })
        .addCase(CommentsApi.rejected, (state) => {
            state.status = "rejected"
        })

        builder.addCase(ContactCreate.pending, (state) => {
            state.status = "loading.."
        })
        .addCase(ContactCreate.fulfilled, (state , {payload}) => {
            console.log("nb",payload)
            state.status = "success"
            state.isLoading = true
            toast("you are applied successfully")
        })
        .addCase(ContactCreate.rejected, (state) => {
            state.status = "rejected"
        })
        builder.addCase(updatePassword.pending, (state) => {
            state.status = "loading.."
        })
        .addCase(updatePassword.fulfilled, (state , {payload}) => {
            console.log("nb",payload)
            state.status = "success"
            state.isLoading = true
            toast(payload?.msg)
        })
        .addCase(updatePassword.rejected, (state) => {
            state.status = "rejected"
        })
        
        
    }
})

export const {like, isLoading} = likeunlikeSlice.actions