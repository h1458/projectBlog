import React, { useEffect, useState } from 'react'
import { Paper, Grid, Avatar, Box, TextField, Button, Typography } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useDispatch, useSelector } from 'react-redux';
import { loginPost, regLogout } from '../Redux/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Common/Navbar';


const Login = () => {
    const dispatch = useDispatch()
    const { redirectTooe, loading } = useSelector((state) => state?.AuthenticationSlice)
    const initialstate = {
        email: '',
        password: ''
    }
    const [login, setLogin] = useState(initialstate)
    const navigate = useNavigate()

    const handleValue = (e) => {
        const { name, value } = e.target
        setLogin({ ...login, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()

        let data = {
            "email": login.email,
            "password": login.password
        }
        dispatch(loginPost(data))
    }

    useEffect(() => {
        const rediretToHome = () => {
            let tokens = localStorage.getItem('token')
            let isLoginPage = window.location.pathname.toLowerCase() === '/login'
            if (tokens !== null && tokens !== undefined && tokens !== '') {
                isLoginPage && navigate('/blog')
            }
        }
        rediretToHome()
    }, [redirectTooe])
    const signup = () => {
        dispatch(regLogout())
    }
    return (

        <>
            <Navbar />
            <div class="d-flex justify-content-center w-100 vh-200 body">
                <div class="">
                    <Grid>
                        <Paper style={{ padding: "20px", height: '80vh', width: "450px", marginTop: '20px', border: "1px solid #f6d032" }}>
                            <Grid align='center'>
                                <Avatar style={{ backgroundColor: "#C8B002" }}><AppRegistrationIcon /></Avatar>
                                <h3 className='text-white pt-1 text'>Sign In</h3>
                            </Grid>
                            <Box component='form' onSubmit={submit} style={{ marginTop: '50px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField label='Email' color='warning' onChange={handleValue} className='text-white' style={{ width: "410px" }} name='email' value={login.email} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label='Password' type='password' color='warning' onChange={handleValue} className='text-white' style={{ width: "410px" }} name='password' value={login.password} />
                                    </Grid>
                                </Grid>
                                <Typography className='mt-2'> Don't have an account? &nbsp;
                                    <Link href="#" underline="none">
                                        <Link to='/register' onClick={signup}>Sign Up</Link>
                                    </Link>
                                </Typography>
                                <div className='mt-3'>
                                    {loading ?
                                        (<>
                                            <Button type='submit' variant='contained' color='warning' fullWidth>Login... please wait</Button>
                                        </>)
                                        :
                                        (<>
                                            <Button type='submit' variant='contained' color='warning' fullWidth>Login</Button>
                                        </>)}
                                </div>
                            </Box>
                        </Paper>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default Login