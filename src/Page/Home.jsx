import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardContent, Grid, Typography, CardMedia, Avatar, } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBanner, fetchService, fetchTeam, fetchTestimonial } from '../Redux/HomeBannerSlice';
import Loading from './Loading';
import { styled } from '@mui/material/styles';
import Layout from '../Common/Layout';


const Home = () => {

    const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.3);
    }
    `}
  `;
    const dispatch = useDispatch()
    const { Banner: banner, status } = useSelector((state) => state?.Home)
    // console.log(banner, "jk")
    const { Service: service } = useSelector((state) => state?.Home)
    // console.log(service, "nn")
    const { Team: team } = useSelector((state) => state?.Home)
    // console.log(team, "ii")
    const { Testimonial: testimonial } = useSelector((state) => state?.Home)
    // console.log(testimonial, "op")

    useEffect(() => {
        dispatch(fetchBanner())
        dispatch(fetchService())
        dispatch(fetchTeam())
        dispatch(fetchTestimonial())
    }, [])
    return (
        <>
            <Layout>
                {/* Banner Start */}
                {status === 'Loading...' ? (<>
                    <Loading />
                </>)
                    :
                    (<>
                        <Carousel data-bs-theme="dark" indicators={false}>
                            {
                                banner?.map((banr, index) => {
                                    return (
                                        <Carousel.Item >
                                            <img className='d-block w-100' src={`https://restapinodejs.onrender.com/api/banner/photo/${banr._id}`} alt="Banner" />
                                            <Carousel.Caption>
                                                <div className='' style={{ position: "relative", marginBottom: '200px', backgroundColor: "rgb(0,31,0, 0.4)", height: '400px' }}>
                                                    <div className='' style={{ paddingTop: "60px" }}>
                                                        <h1 className='text' style={{ textTransform: "uppercase", textAlign: 'center' }} >{banr.title}</h1>
                                                    </div>
                                                    <p className='para' style={{ position: "absolute", top: "130px", letterSpacing: "3px", fontSize: '22px' }}>
                                                        {banr.description}
                                                    </p>
                                                </div>

                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                        {/* Banner End */}

                        {/* About start */}
                        <section className='container-fluid vh-100 all'>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="section_title_all text-center">
                                            <Typography variant='h4' component='div' fontWeight='700' className='text-center pt-3 text'>ABOUT US</Typography>
                                            <p class="section_subtitle mx-auto " style={{ color: 'white' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text.</p>
                                            <div class="">
                                                <i class=""></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row vertical_content_manage mt-5">
                                    <div class="col-lg-6">
                                        <div class="about_header_main mt-3">
                                            <h4 class="about_heading text-capitalize font-weight-bold mt-4 text">The MERN stack is a collection of JavaScript-based technologies that are used together to develop web applications</h4>
                                            <p class="text-white mt-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            <p class="text-white mt-3"> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
                                            <p class="text-white mt-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="img_about mt-3">
                                            <img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=" alt="" class="img-fluid mx-auto d-block" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-lg-4">
                                        <div class="about_content_box_all mt-3">
                                            <div class="about_detail text-center">
                                                <div class="about_icon">
                                                    <i class="fas fa-pencil-alt" style={{ color: "#e8cc11" }}></i>
                                                </div>
                                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold text">Creative Design</h5>
                                                <p class="edu_desc mt-3 mb-0 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="about_content_box_all mt-3">
                                            <div class="about_detail text-center">
                                                <div class="about_icon">
                                                    <i class="fa-brands fa-angellist" style={{ color: "#e8cc11" }}></i>
                                                </div>
                                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold text">We make Best Result</h5>
                                                <p class="edu_desc mb-0 mt-3 text-white" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="about_content_box_all mt-3">
                                            <div class="about_detail text-center">
                                                <div class="about_icon">
                                                    <i class="fa-solid fa-paper-plane" style={{ color: "#e8cc11" }}></i>
                                                </div>
                                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold text">best platform </h5>
                                                <p class="edu_desc mb-0 mt-3 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* About end */}

                        {/* Service Start */}
                        <section className='container-fluid vh-100 all'>
                            <Typography variant='h4' component='div' fontWeight='700' className='text-center text' style={{ paddingTop: '100px' }}>SERVICE</Typography>
                            <Grid container spacing={2} style={{ padding: "10px" }}>
                                {
                                    service.map((service) => {
                                        return (
                                            <>
                                                <Grid item xs={4}>
                                                    <Card sx={{ minWidth: 250, mt: 2 }} className='all' style={{ border: "1px solid #f6d032" }}>
                                                        <CardContent style={{ height: "300px" }}>
                                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className='text-center text-white'>
                                                                {(new Date(service.createdAt)).toLocaleDateString('en-us', { month: 'short', year: 'numeric' })}
                                                            </Typography>
                                                            <Typography variant="h5" component="div" className='text-center py-2 text'>
                                                                {service.name}
                                                            </Typography>
                                                            <Typography variant="body2" className='text-center text-white'>
                                                                {service.details}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                        </section>
                        {/* Service end */}

                        {/* Testimonial start */}
                        <section className='container-fluid vh-200 all'>
                            <Typography variant='h4' component='div' fontWeight='700' className='text-center text' style={{ paddingTop: '100px' }}>TESTIMONIAL</Typography>
                            <Grid container spacing={2} >
                                {
                                    testimonial.map((testimonial) => {
                                        return (
                                            <>
                                                <Grid item xs={4} style={{ padding: "10px", paddingTop: '40px' }}>
                                                    <Card sx={{ maxWidth: 350, mt: 2 }} style={{ height: "370px", border: "1px solid #f6d032", margin: "auto" }} className='all'>
                                                        <div className='d-flex justify-content-center'>
                                                            <StyledAvatar sx={{ width: 56, height: 56, mt: 1 }}><Avatar
                                                                alt="Remy Sharp"
                                                                src={`https://restapinodejs.onrender.com/api/testimonials/photo/${testimonial._id}`}

                                                            /></StyledAvatar>
                                                        </div>
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div" className='text-center text'>
                                                                {testimonial.name}
                                                            </Typography>
                                                            <Typography gutterBottom variant="body" component="div" className='text-center text-white'>
                                                                {testimonial.position}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary" className='text-center text-white'>
                                                                {testimonial.talk}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                        </section>
                    </>)}
                {/* Testimonial end */}
            </Layout>
        </>
    )
}

export default Home