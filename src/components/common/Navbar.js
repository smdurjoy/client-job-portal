import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/images/home/logo.svg';
import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {COMPANY_LOGIN, COMPANY_MENU_ITEMS, WORKER_MENU_ITEMS} from "../../helpers/Constants";
import {AddOutlined} from "@mui/icons-material";
import {Avatar, Menu, MenuItem} from "@mui/material";
import {useDispatch} from "react-redux";
import {setCompanyEmail, setToken, setUserId, setUserPhone, setUserType} from "../../services/app";

const drawerWidth = 240;
let navItems = [];

function Navbar({window, isForHomePage = true}) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const {token, user_type} = useAppSelector((state) => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (token && user_type === COMPANY_LOGIN) {
        navItems = COMPANY_MENU_ITEMS;
    } else {
        navItems = WORKER_MENU_ITEMS;
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        dispatch(setToken(null));
        dispatch(setUserPhone(null));
        dispatch(setUserId(null));
        dispatch(setUserType(null));
        dispatch(setCompanyEmail(null));

        navigate('/');
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                workersRUS
            </Typography>
            <Divider/>
            <List>
                {
                    navItems.map((item, key) => (
                        <ListItem key={key} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}>
                                <ListItemText primary={item.title} color='black'/>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position="absolute" className={isForHomePage ? 'navBar container' : 'commonNav container'}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {md: 'none'}, color: '#F28A1F'}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{flexBasis: '30%'}}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <div style={{flexBasis: '40%'}}>
                            <Box sx={{display: {xs: 'none', md: 'block'}, textAlign: 'center'}}>
                                {
                                    navItems.map((item, key) => (
                                        <Link to={item.link} key={key} className='navItem'>
                                            {item.title}
                                        </Link>
                                    ))
                                }
                            </Box>
                        </div>
                        <div style={{flexBasis: '30%'}}>
                            <Box sx={{display: {xs: 'none', md: 'block'}, textAlign: 'center'}}>
                                {
                                    !token && (
                                        <Link to={'/login'} className='navItem'>
                                            Login
                                        </Link>
                                    )
                                }

                                {
                                    (!token || user_type === COMPANY_LOGIN) && (
                                        <Link to={'/post-a-job'}>
                                            <Button className='primaryBtn' sx={{marginLeft: 4}}>
                                                <AddOutlined sx={{marginRight: '6px'}}/>
                                                Post a Job
                                            </Button>
                                        </Link>
                                    )
                                }

                                {
                                    token && (
                                        <>
                                            <IconButton
                                                onClick={handleClick}
                                                size="small"
                                                sx={{ml: 2}}
                                                aria-controls={open ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                            >
                                                <Avatar sx={{width: 32, height: 32}}>W</Avatar>
                                            </IconButton>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    Profile
                                                </MenuItem>
                                                <MenuItem onClick={() => navigate('/applied-jobs')}>
                                                    Applied Jobs
                                                </MenuItem>
                                                <MenuItem onClick={handleLogout}>
                                                    Logout
                                                </MenuItem>
                                            </Menu>
                                        </>
                                    )
                                }
                            </Box>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {sm: 'block', md: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;