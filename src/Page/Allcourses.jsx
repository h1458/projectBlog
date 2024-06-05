import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCourses } from '../Redux/CoursesSlice'
import { Card, CardContent, Grid, Typography, CardMedia, Button, styled } from '@mui/material'
import Loading from './Loading'
import Layout from '../Common/Layout'
import { Link } from 'react-router-dom'


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
const Allcourses = () => {
    const dispatch = useDispatch()
    const { AllCourses: allcourses, status } = useSelector((state) => state?.Allcourses)
    console.log(allcourses, "pp")
    const [load, setLoad] = useState(3)

    const loadmore = () => {
        setLoad(load + 3)
    }
    useEffect(() => {
        dispatch(fetchAllCourses())
    }, [])
    return (
        <>
            <Layout>
                {status === 'loading...' ? (<>
                    <Loading />
                </>)
                    :
                    (<>
                        <div className='container-fluid vh-200 all py-3'>
                            <Typography variant='h4' component='div' fontWeight='700' className='text-center pt-3 pb-3 text'>All COURSES</Typography>
                            <Grid container spacing={2} >
                                {
                                    allcourses.slice(0, load).map((alcourses) => {
                                        return (
                                            <>
                                                <Grid item xs={4}>
                                                    <Card sx={{ maxWidth: 280, mt: 1 }} style={{ margin: "auto", border: "1px solid #f6d032" }} className='all'>
                                                        <CardMedia
                                                            sx={{ height: 240 }}
                                                            image={`https://restapinodejs.onrender.com/api/course/photo/${alcourses._id}`}
                                                            title="green iguana"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div" className='text-center text-white text'>
                                                                {alcourses.name}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary" className='text-center text-white'>
                                                                {alcourses.duration}
                                                            </Typography>
                                                            <Typography variant="h6" color="text.secondary" className='text-white fee'>
                                                                ₹{alcourses.fees}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary" className='text-center text-white'>
                                                                {alcourses.requirement}
                                                            </Typography>
                                                        </CardContent>
                                                        <div className='d-flex justify-content-center py-3'>
                                                            <StyledButton><Link to='/contact'><Button className='text' size='small' variant='contained' style={{ border: '1px solid #f6d032' }}>Apply Now</Button></Link></StyledButton>
                                                        </div>
                                                    </Card>
                                                </Grid>
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                            <div className='d-flex justify-content-center mt-5'>
                                <button onClick={loadmore} className='btn btn-warning'>Load more</button>
                            </div>
                        </div>
                    </>)}
            </Layout>
        </>
    )
}

export default Allcourses