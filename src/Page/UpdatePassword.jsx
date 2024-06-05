import React, { useState } from 'react'
import Navbar from '../Common/Navbar'
import { Paper, Grid, Avatar, Box, TextField, Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../Redux/LikeUnlikeSlice';

const UpdatePassword = () => {

    const { logindata } = useSelector((state) => state?.AuthenticationSlice)
    // console.log("logindata", logindata)

    const [user, setUser] = useState({
        "user_id": logindata,
        "password": ''
    })

    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()

        let data = {
            "user_id": user.user_id,
            "password": user.password
        }
            dispatch(updatePassword(data))
    }
    return (
        <>
            <Navbar />
            <div class="d-flex justify-content-center w-100 vh-200 body">
                <div class="">
                    <Grid>
                        <Paper style={{ padding: "20px", height: '50vh', width: "450px", marginTop: '20px', border: "1px solid #f6d032" }}>
                            <Grid align='center'>
                                <Avatar style={{ backgroundColor: "#C8B002" }}><AppRegistrationIcon /></Avatar>
                                <h3 className='text-white pt-1 text'>Update Password</h3>
                            </Grid>
                            <Box component='form' onSubmit={submit} style={{ marginTop: '50px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField label='Password' onChange={(e) => setUser({...user, password: e.target.value })} type='password' color='warning' className='text-white' style={{ width: "410px" }} name='password' />
                                    </Grid>
                                </Grid>
                                <div className='mt-3'>
                                    <Button type='submit' variant='contained' color='warning' fullWidth>Update Password</Button>
                                </div>
                            </Box>
                        </Paper>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default UpdatePassword