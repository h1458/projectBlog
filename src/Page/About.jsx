import React from 'react'
import { Typography, CardMedia, CardContent, Grid, Card } from '@mui/material'
import { useSelector } from 'react-redux'
import Layout from '../Common/Layout'

const About = () => {
    const { Team: team } = useSelector((state) => state?.Home)
    // console.log(team, "ii")
    return (
        <>
            <Layout>
                <section className='container-fluid vh-200 all'>
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
                <section className='container-fluid vh-200 all'>
                    <Typography variant='h4' component='div' fontWeight='700' className='text-center pt-5 pb-3 text'>OUR TEAM</Typography>
                    <Grid container spacing={2} >
                        {
                            team.map((team) => {
                                return (
                                    <>
                                        <Grid item xs={4} style={{ padding: "10px" }}>
                                            <Card sx={{ maxWidth: 250, mt: 1 }} style={{ margin: "auto", border: "1px solid #f6d032" }} className='all'>
                                                <CardMedia
                                                    sx={{ height: 180 }}
                                                    image={`https://restapinodejs.onrender.com/api/team/photo/${team._id}`}
                                                    title="team"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" className='text-center text-white'>
                                                        {team.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" className='text-center text'>
                                                        {team.possession}
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
            </Layout>
        </>
    )
}

export default About