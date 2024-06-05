import React, { useEffect } from 'react'
import { Grid, Box, Typography, CardContent, Button, CardMedia, CardActions, styled, Card, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryList } from '../Redux/CategorySlice'
import { fetchLatestPost } from '../Redux/LatestPostSlice'
import { fetchCategoryPost } from '../Redux/CategoryPostSlice'
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
const Category = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { categoryList: showallcategory } = useSelector((state) => state?.categoryList)
    const { latestPost: latestpost } = useSelector((state) => state?.latestpost)
    const { CategoryPostdata: categorypost } = useSelector((state) => state?.categoryPost)
    // console.log(categorypost, "kmk")

    useEffect(() => {
        dispatch(fetchCategoryList())
        dispatch(fetchLatestPost())
        dispatch(fetchCategoryPost(id))
    }, [categorypost])
    return (
        <>
            <Layout>
                <div className='container-fluid vh-200 all py-3'>
                    <Box className='vh-200 all py-3'>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                {
                                    categorypost.map((categoryPost) => {
                                        return (
                                            <>
                                                <Card style={{ border: "1px solid #f6d032", margin: "20px", marginTop: "52px" }} className='all'>
                                                    <CardMedia
                                                        component="img"
                                                        alt="blog image"
                                                        height="400"
                                                        image={`https://restapinodejs.onrender.com/api/blog/image/${categoryPost._id}`}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div" className='text-white'>
                                                            {categoryPost.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" className='text-white' dangerouslySetInnerHTML={{ __html: categoryPost.postText.slice(0, 300) }}>
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions style={{ paddingBottom: "30px" }}>
                                                        <Button className='text' size='large' variant='contained' style={{ border: '1px solid #f6d032' }}><Link to={`/blogdetails/${categoryPost._id}`} style={{ textDecoration: 'none', color: 'white' }}>Blog Details</Link></Button>
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
                                    showallcategory.map((category) => {
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
                                    latestpost.map((latestPost) => {
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
                            </Grid >
                        </Grid>
                    </Box>
                </div>
            </Layout>
        </>
    )
}

export default Category