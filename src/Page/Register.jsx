import { Paper, Grid, Avatar, Box, TextField, Button, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { registerPost } from '../Redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../Common/Layout';
import Navbar from '../Common/Navbar';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Register = () => {

    const initialstate = {
        name: "",
        email: "",
        mobile: "",
        password: "",
        photo: ""
    }
    const { redirectToo } = useSelector((state) => state?.AuthenticationSlice)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [registers, setRegister] = useState(initialstate)
    const [images, setimage] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(watch(["name", "email", "mobile", "password"]));

    const handleValue = (e) => {
        const { name, value } = e.target
        setRegister({ ...registers, [name]: value })
    }
    const submit = (registers) => {

        const formdata = new FormData()
        formdata.append("name", registers.name)
        formdata.append("email", registers.email)
        formdata.append("mobile", registers.mobile)
        formdata.append("password", registers.password)
        formdata.append('photo', images)
        dispatch(registerPost(formdata))
    }
    useEffect(() => {
        const redirectUser = () => {
            let name = localStorage.getItem('name')
            let isLoginPage = window.location.pathname.toLowerCase() === '/register'
            if (name !== null && name !== undefined && name !== "") {
                isLoginPage && navigate('/login')
            }
        }
        redirectUser()
    }, [redirectToo])
    return (
        <>
            <Navbar />
            <div class="d-flex justify-content-center w-100 vh-200 body">
                <div class="">
                    <Grid>
                        <Paper style={{ padding: "20px", height: '85vh', width: "450px", marginTop: '20px', border: "1px solid #f6d032" }}>
                            <Grid align='center'>
                                <Avatar style={{ backgroundColor: "#C8B002" }}><AppRegistrationIcon /></Avatar>
                                <h3 className='text-white pt-1 text'>Sign Up</h3>
                            </Grid>
                            <Box component='form' onSubmit={handleSubmit(submit)} style={{ marginTop: '50px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField label='Name' name="name" color='warning' placeholder='userName*' onChange={handleValue}
                                            {...register('name', { required: true })}
                                        />
                                        {errors?.name?.type === "required" && <p style={{ color: 'red' }}>This field is Required</p>}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label='Mobile no' name="mobile" color='warning' placeholder='Phone no*'

                                            onChange={handleValue}
                                            {...register('mobile', { required: true, maxLength: 10 })}
                                        />
                                        {errors?.mobile?.type === 'required' && <p style={{ color: 'red' }}>This field is Required</p>}
                                        {errors?.mobile?.type === 'maxLength' && <p style={{ color: 'red' }}>enter only 10 digit phone no</p>}

                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label='Email' name="email" color='warning' style={{ width: "410px" }} placeholder='Email*'

                                            onChange={handleValue}
                                            {...register('email', { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                                        />
                                        {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>This Field is Required</p>}
                                        {errors?.email?.type === 'pattern' && <p style={{ color: 'red' }}>Email address must be a valid address</p>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label='Password' name="password" type='password' color='warning' style={{ width: "410px" }}

                                            onChange={handleValue}
                                            {...register('password', { required: true })}
                                        />
                                        {errors?.password?.type === 'required' && <p style={{ color: 'red' }}>This field is Required</p>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            component="label"
                                            color='warning'
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Upload Photo
                                            <VisuallyHiddenInput type="file" onChange={(e) => setimage(e.target.files[0])} accept='image/*' />
                                        </Button>
                                        {images !== "" && images !== undefined && images !== null ? (
                                            <img style={{ height: "120px", width: "150px" }}
                                                src={URL.createObjectURL(images)}
                                                alt='' />
                                        ) : (
                                            <>{images === "" && <p>Photo is not Uploaded</p>}</>
                                        )}
                                    </Grid>
                                </Grid>
                                <Typography className='mt-2'> Already have an account? &nbsp;
                                    <Link to="/login" underline="none">
                                        Sign In
                                    </Link>

                                </Typography>
                                <div className='mt-3'>
                                    <Button type='submit' variant='contained' color='warning' fullWidth>Register</Button>
                                </div>
                            </Box>
                        </Paper>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Register