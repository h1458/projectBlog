import React, { useEffect } from 'react'
import Layout from '../Common/Layout'
import { Grid, styled, Paper, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { CommentsApi } from '../Redux/LikeUnlikeSlice';
import Loading from './Loading';
import List from '@mui/material/List';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const ShowAllComt = () => {

    const { commentdata: commnet, status } = useSelector((state) => state?.like)
    // console.log("lelo", commnet)
    // console.log(status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CommentsApi())
    }, [])
    return (
        <>
            <Layout>
                {
                    status === 'loading..' ?
                        (<>
                            <Loading />
                        </>)
                        :
                        (<>
                            <div className='container-fluid  vh-200 all'>
                                <Typography variant='h4' component='div' fontWeight='700' className='text-center pt-3 pb-3 text'>ALL COMMENTS</Typography>\
                                <div className='container-fluid d-flex justify-content-center w-100 vh-200 p-5 all'>
                                    <List
                                        sx={{
                                            width: '100%',
                                            maxWidth: 760,
                                            bgcolor: '#FABE22',
                                            position: 'relative',
                                            overflow: 'auto',
                                            maxHeight: 300,
                                            '& ul': { padding: 0 },

                                        }}
                                        style={{ padding: '45px' }}
                                        subheader={<li />}
                                    >
                                        <Grid container spacing={2} >
                                            <li>
                                                <ul>
                                                    {
                                                        commnet?.map((comment) => {
                                                            return (
                                                                <>
                                                                    <Grid item xs={12} style={{ padding: '5px' }}>
                                                                        <Item>
                                                                            <p>name:  {comment.name}</p>
                                                                            <p>email:  {comment.email}</p>
                                                                            <p>comment:  {comment.comment}</p>
                                                                        </Item>
                                                                    </Grid>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        </Grid>
                                    </List>
                                </div>
                            </div>
                        </>)
                }

            </Layout>
        </>
    )
}

export default ShowAllComt