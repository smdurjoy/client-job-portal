import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Grid, ListItemIcon, TextField} from "@mui/material";
import logo from '../../assets/images/home/logo.svg';
import messages from '../../assets/images/home/messages.svg';
import newsletter from '../../assets/images/home/newsletter.svg';
import user1 from "../../assets/images/home/user1.svg";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ListItem from "@mui/material/ListItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

const Footer = () => {
    return (
        <div className='container' style={{backgroundColor: '#2B3940'}}>
            <Box pb={4} pt={8}>
                <Grid container columnSpacing={5} mb={7}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h4' color='white' fontWeight='bold'>
                            Most comprehensive job portal
                        </Typography>
                        <Typography color='#A1A6AB' variant='h6' fontWeight='bold' mt={1}>
                            Log In or Register Now for Access to a World of Opportunities on Our Dynamic Platform!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant='outlined' className='secondaryBtnWhite'>
                            Log In
                        </Button>
                        <Button className='primaryBtn' sx={{marginLeft: '26px'}}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
                <hr/>

                <Grid container columnSpacing={5} py={7}>
                    <Grid item xs={12} md={4}>
                        <img src={logo} alt='logo'/>
                        <Box display='flex' justifyContent='start' alignItems='center' mt={5}>
                            <img src={messages} alt='user1' width='80px'/>
                            <Box pl={2} textAlign='left'>
                                <Typography variant='h6' color='white' fontWeight='bold'>
                                    Contact us at
                                </Typography>
                                <Typography color='#D4D4D4'>
                                    E-mail: info@workersrus.com
                                </Typography>
                                <Typography color='#D4D4D4'>
                                    Call: +1 234 567 890
                                </Typography>
                            </Box>
                        </Box>
                        <Box display='flex' ml={12} mt={1}>
                            <IconButton aria-label="facebook" size="small"
                                        sx={{color: 'white', backgroundColor: '#556065', marginRight: '1rem'}}>
                                <FacebookIcon/>
                            </IconButton>
                            <IconButton aria-label="facebook" size="small"
                                        sx={{color: 'white', backgroundColor: '#556065', marginRight: '1rem'}}>
                                <TwitterIcon/>
                            </IconButton>
                            <IconButton aria-label="facebook" size="small"
                                        sx={{color: 'white', backgroundColor: '#556065', marginRight: '1rem'}}>
                                <InstagramIcon/>
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display='flex'>
                            <Box mr={25}>
                                <Typography color='#A1A6AB' variant='h6' fontWeight='bold' mb={3}>
                                    Company
                                </Typography>
                                <List>
                                    <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='About us' sx={{ color: 'white' }}/>
                                    </ListItem>
                                    <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='Career' sx={{ color: 'white' }}/>
                                    </ListItem>
                                   <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='FAQ’s' sx={{ color: 'white' }}/>
                                    </ListItem>
                                   <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='Contact' sx={{ color: 'white' }}/>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <Typography color='#A1A6AB' variant='h6' fontWeight='bold' mb={3}>
                                    Services
                                </Typography>
                                <List>
                                    <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='Jobs' sx={{ color: 'white' }}/>
                                    </ListItem>
                                   <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='Companies' sx={{ color: 'white' }}/>
                                    </ListItem>
                                   <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='Candidates' sx={{ color: 'white' }}/>
                                    </ListItem>
                                   <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='Pricing' sx={{ color: 'white' }}/>
                                    </ListItem>
                                   <ListItem color='white' sx={{ paddingLeft: '0' }}>
                                        <ListItemText primary='Partner' sx={{ color: 'white' }}/>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box ml={10}>
                            <img src={newsletter} alt='newsletter' width='80px'/>
                            <Typography variant='h6' color='white' fontWeight='bold'>
                                Subscribe to our newsletter
                            </Typography>
                            <Typography variant='caption' color='#A1A6AB'>
                                We'll keep you updated with the best new jobs.
                            </Typography>
                            <Box mt={3}>
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    variant="filled"
                                    placeholder='Enter Your Email'
                                    sx={{ backgroundColor: 'white', borderRadius: '5px', width: '320px' }}
                                />
                            </Box>
                            <Button className='primaryBtn' sx={{marginTop: '20px'}}>
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <hr/>

                <Typography color='#A1A6AB' variant='h6' fontWeight='bold' mt={5} textAlign='center'>
                    Copyright WorkersRus @{new Date().getFullYear()}. All Rights Reserved
                </Typography>
            </Box>
        </div>
    );
};

export default Footer;