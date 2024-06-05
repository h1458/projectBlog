import React, { useEffect, useState } from 'react'
import { Grid, Box, Typography, CardContent, styled, Button, CardMedia, CardActions, Card, List, ListItem, ListItemButton, ListItemText, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllblog } from '../Redux/BlogSlice'
import { fetchCategoryList } from '../Redux/CategorySlice'
import { Link } from 'react-router-dom'
import { fetchLatestPost } from '../Redux/LatestPostSlice'
import Loading from './Loading'
import { CommpentPostapi } from '../Redux/LikeUnlikeSlice'
import Layout from '../Common/Layout'

const StyledButton = styled(Button)`
${({ theme }) => `
cursor: pointer;
transition: ${theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
})};
&:hover {
  transform: scale(1.1);
}
`}
`;
const AllBlog = () => {
    const dispatch = useDispatch()

    const [input, setInput] = useState()
    const { blogdata: allblog, status } = useSelector((state) => state?.allblog)
    // console.log(allblog, "jj")
    const { categoryList: showallcategory } = useSelector((state) => state?.categoryList)
    // console.log(showallcategory, "oo")
    const { latestPost: latestpost } = useSelector((state) => state?.latestpost)
    // console.log(latestpost, "gg")
    const [comment, setComment] = useState({
        name: "",
        email: "",
        comment: ""
    })

    // console.log(comment)

    const handleChange = (e) => {
        let { name, value } = e.target
        setComment({ ...comment, [name]: value })
    }

    useEffect(() => {
        dispatch(fetchAllblog())
        dispatch(fetchCategoryList())
        dispatch(fetchLatestPost())
    }, [])

    const submiton = (e) => {
        e.preventDefault()
        let data = {
            "name": comment.name,
            "email": comment.email,
            "comment": comment.comment
        }
        dispatch(CommpentPostapi(data))
    }

    return (
        <>
            <Layout>
                {
                    status === 'loading...' ? (<>
                        <Loading />
                    </>)
                        :
                        (<>
                            <div className='container-fluid vh-200 all py-3'>
                                <Box className='vh-200 all py-3'>
                                    <div className='' style={{ marginLeft: "30px" }}>
                                        <input type="text" value={input} className='p-2' placeholder='Search course'
                                            style={{
                                                border: "2px solid #f6d032", outline: 'none',
                                                width: "350px", borderRadius: '20px'
                                            }} onChange={(e) => setInput(e.target.value)} />
                                    </div>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            {
                                                allblog?.filter((data) => data.postText.toLowerCase().includes(input))?.map((blog) => {
                                                    return (
                                                        <>
                                                            <Card style={{ border: "1px solid #f6d032", margin: "20px", marginTop: "52px" }} className='all'>
                                                                <CardMedia
                                                                    component="img"
                                                                    alt="blog image"
                                                                    height="400"
                                                                    image={`https://restapinodejs.onrender.com/api/blog/image/${blog._id}`}
                                                                />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="div" className='text-white'>
                                                                        {blog.title}
                                                                    </Typography>
                                                                    <Typography variant="body2" color="text.secondary" className='text-white' dangerouslySetInnerHTML={{ __html: blog.postText.slice(0, 300) }}>
                                                                    </Typography>
                                                                </CardContent>
                                                                <CardActions style={{ paddingBottom: "30px" }}>
                                                                    <Button className='text' size='large' variant='contained' style={{ border: '1px solid #f6d032' }}><Link to={`/blogdetails/${blog._id}`} style={{ textDecoration: 'none', color: 'white' }}>Blog Details</Link></Button>
                                                                </CardActions>
                                                            </Card>
                                                        </>
                                                    )
                                                })
                                            }
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant='h4' component="div" className='text' style={{ color: 'white', textAlign: 'center', paddingBottom: '10px' }}>Category</Typography>
                                            {
                                                showallcategory?.map((category) => {
                                                    return (
                                                        <>
                                                            <List style={{ border: "1px solid #f6d032" }} className='all'>
                                                                <ListItem divider >
                                                                    <ListItemButton>
                                                                        <StyledButton><Link to={`/categorydetails/${category._id}`} style={{ textDecoration: 'none' }}><ListItemText primary={category.category} style={{ color: 'white', textAlign: "center" }} /></Link></StyledButton>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </List>
                                                        </>
                                                    )
                                                })
                                            }
                                            <Typography variant='h4' component="div" className='text' style={{ color: 'white', textAlign: 'center', padding: '10px' }}>LatestPost</Typography>
                                            {
                                                latestpost?.map((latestPost) => {
                                                    return (
                                                        <>
                                                            <Card sx={{ display: 'flex' }} style={{ border: "1px solid #f6d032" }} className='all'>
                                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                                                        <Typography component="div" variant="h6" className='text-white'>
                                                                            {latestPost.title}
                                                                        </Typography>
                                                                    </CardContent>
                                                                </Box>
                                                                <CardMedia
                                                                    component="img"
                                                                    sx={{ width: 251 }}
                                                                    image={`https://restapinodejs.onrender.com/api/blog/image/${latestPost._id}`}
                                                                    alt="Live from space album cover"
                                                                />
                                                            </Card>
                                                        </>
                                                    )
                                                })
                                            }
                                            <Typography variant='h4' component="div" className='text' style={{ color: 'white', textAlign: 'center', padding: '10px' }}>Comment</Typography>
                                            <Box component='form' onSubmit={submiton} >
                                                <Card sx={{ maxWidth: 469 }} style={{ border: "1px solid #f6d032" }} className='all'>
                                                    <CardContent>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={6}>
                                                                <TextField
                                                                    required
                                                                    id="outlined-required"
                                                                    label="Name"
                                                                    name='name'
                                                                    onChange={handleChange}
                                                                    sx={{ bgcolor: 'white', borderRadius: "10px" }}

                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <TextField
                                                                    required
                                                                    id="outlined-required"
                                                                    label="Email"
                                                                    name='email'
                                                                    onChange={handleChange}
                                                                    sx={{ bgcolor: 'white', borderRadius: "10px" }}

                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    id="outlined-multiline-static"
                                                                    label="Comment"
                                                                    name='comment'
                                                                    onChange={handleChange}
                                                                    multiline
                                                                    rows={6}
                                                                    sx={{ bgcolor: 'white', borderRadius: "10px", width: "430px" }}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </CardContent>
                                                    <div className='d-flex justify-content-center mb-2'>
                                                        <Button variant="contained" type='submit' style={{ backgroundColor: "#FABE22" }}>Comment</Button>
                                                    </div>
                                                    <CardActions>
                                                        <Link to='/showcomment'><Button size="small">Show all comment</Button></Link>
                                                    </CardActions>
                                                </Card>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        </>)
                }
            </Layout>
        </>
    )
}

export default AllBlog