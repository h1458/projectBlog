import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchblogDetails } from '../Redux/BlogDetailsSlice'
import { useParams } from 'react-router-dom'
import { Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Loading from './Loading'
import { Unlikeapi, likeapi } from '../Redux/LikeUnlikeSlice'
import Layout from '../Common/Layout'

const BlogDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { blogdetailsdata: blogdetails, status } = useSelector((state) => state?.blogDetails)
    // console.log(blogdetails, "opl")
    const { like: likes } = useSelector((state) => state?.like)
    // console.log("like", likes)
    const { unlike: unlikes } = useSelector((state) => state?.like)
    // console.log(unlikes)

    const hanldeLike = () => {
        dispatch(likeapi())
    }
    const hanldeUnLike = () => {
        dispatch(Unlikeapi())
    }
    useEffect(() => {
        dispatch(fetchblogDetails(id))
    }, [])
    return (
        <>
            <Layout>
                {status === 'loading...' ? (<>
                    <Loading />
                </>)
                    :
                    (<>
                        <div className="container-fluid d-flex justify-content-center all vh-200 p-3">
                            <Card sx={{ maxWidth: 750, mt: 1 }} style={{ margin: "auto", border: "1px solid #f6d032" }} className='all'>
                                <CardMedia
                                    sx={{ height: 380 }}
                                    image={`https://restapinodejs.onrender.com/api/blog/image/${blogdetails._id}`}
                                    title="blogdetails"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='text-center text-white'>
                                        {blogdetails.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='text-center text' dangerouslySetInnerHTML={{ __html: blogdetails.postText }}>
                                    </Typography>
                                </CardContent>
                                <IconButton>
                                    <ThumbUpIcon onClick={hanldeLike} style={{ color: "#C8B002" }} />&nbsp;<span style={{ color: 'white', fontSize: '15px' }}>{likes.likes}</span>
                                </IconButton>
                                <IconButton>
                                    <ThumbDownIcon onClick={hanldeUnLike} style={{ color: "#C8B002" }} />&nbsp;<span style={{ color: 'white', fontSize: '15px' }}>{unlikes.unlikes}</span>
                                </IconButton>
                            </Card>
                        </div>
                    </>)}
            </Layout>
        </>
    )
}

export default BlogDetails