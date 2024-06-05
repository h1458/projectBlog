import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography, } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/AuthSlice';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';


const Navbar = () => {

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
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate()

    const { logoutToggel } = useSelector((state) => state?.AuthenticationSlice)
    // console.log("Toggle", logoutToggel)

    const dispatch = useDispatch()

    const log_Out = () => {
        dispatch(logout())
        navigate('/login')
    }
    const name = localStorage.getItem('name')
    return (
        <>
            <AppBar position='sticky' style={{ backgroundColor: "#FABE22" }}>
                <Toolbar>
                    <IconButton>
                        <StickyNote2Icon size='large' style={{ color: 'white' }} edge='start' aria-label='logo' />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ fontWeight: 'bold', color: 'black' }}>
                        <span className='text-white' style={{ fontSize: '24px' }}>M</span>EARN <span className='text-white' style={{ fontSize: '24px' }}>S</span>TACK</Typography>
                    {
                        logoutToggel ? (
                            <>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Button color='inherit'><Link to='/' style={{ textDecoration: 'none', color: "white" }}>Home</Link></Button>
                                    <Button color='inherit'><Link to='/blog' style={{ textDecoration: 'none', color: "white" }}>Blog</Link></Button>
                                    <Button color='inherit'><Link to='/about' style={{ textDecoration: 'none', color: "white" }}>About</Link></Button>
                                    <StyledButton>
                                        <Link to='/allcourses'><Fab variant="extended" size='small' style={{ backgroundColor: 'black', color: "white" }}>
                                            All courses
                                        </Fab></Link>
                                    </StyledButton>
                                </Box>
                                <Box>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <StyledAvatar><Avatar alt="Travis Howard" src="image\pic.png" /></StyledAvatar>
                                    </IconButton>
                                    <Menu className='menu'
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem
                                            sx={{ bgcolor: 'black', color: 'white', "&:hover": { color: '#FABE22', bgcolor: 'black', } }} onClick={handleClose}>{name}</MenuItem>
                                        <Link to='/updatepass' style={{ textDecoration: 'none' }}><MenuItem
                                            sx={{ bgcolor: 'black', color: 'white', "&:hover": { color: '#FABE22', bgcolor: 'black', } }}
                                            onClick={handleClose}>Update Password</MenuItem></Link>
                                        <MenuItem
                                            sx={{ bgcolor: 'black', color: 'white', "&:hover": { color: '#FABE22', bgcolor: 'black', } }}
                                            onClick={() => { handleClose(); log_Out() }}>Logout
                                            <LoginIcon />
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Button color='inherit'><Link to='/' style={{ textDecoration: 'none', color: "white" }}>Home</Link></Button>
                                    <Button color='inherit'><Link to='/blog' style={{ textDecoration: 'none', color: "white" }}>Blog</Link></Button>
                                    <Button color='inherit'><Link to='/about' style={{ textDecoration: 'none', color: "white" }}>About</Link></Button>
                                    <Button color='inherit'><Link to='/register' style={{ textDecoration: 'none', color: "white" }}>Register</Link></Button>
                                    <Button color='inherit' ><Link to='/login' style={{ textDecoration: 'none', color: "white" }}>login</Link></Button>
                                </Box>
                                <Box>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <Avatar alt="?" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>user: </MenuItem>
                                    </Menu>
                                </Box>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar