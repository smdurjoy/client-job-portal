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
import {Link} from "react-router-dom";

const drawerWidth = 240;
const navItems = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Jobs',
        link: '/jobs',
    },
    {
        title: 'Company',
        link: '/companies',
    },
    {
        title: 'About Us',
        link: '/',
    },
];

function Navbar({window, isForHomePage = true}) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                MUI
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
                                <Link to={'/login'} className='navItem'>
                                    Login
                                </Link>
                                <Button className='primaryBtn' sx={{marginLeft: 4}}>
                                    Post a Job
                                </Button>
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