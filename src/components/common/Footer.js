import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Grid, TextField} from "@mui/material";
import logo from '../../assets/images/home/logo.svg';
import messages from '../../assets/images/home/messages.svg';
import newsletter from '../../assets/images/home/newsletter.svg';
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className='container' style={{backgroundColor: '#2B3940'}}>
            <Box pb={4} pt={8}>
                <Grid container columnSpacing={5} mb={7}>
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant='h4'
                            color='white'
                            fontWeight='bold'
                            fontSize={{
                                lg: 32,
                                md: 28,
                                sm: 24,
                                xs: 20
                            }}
                        >
                            Most comprehensive job portal
                        </Typography>
                        <Typography
                            color='#A1A6AB'
                            variant='h6'
                            fontWeight='bold'
                            mt={1}
                            fontSize={{
                                lg: 20,
                                md: 18,
                                sm: 16,
                                xs: 14,
                            }}
                        >
                            Log In or Register Now for Access to a World of Opportunities on Our Dynamic Platform!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}
                          marginTop={{
                              lg: 0,
                              md: 3,
                              sm: 3,
                              xs: 3,
                          }}
                    >
                        <Link to={'/login'}>
                            <Button variant='outlined' className='secondaryBtnWhite'>
                                Log In
                            </Button>
                        </Link>
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
                                <Typography
                                    variant='h6'
                                    color='white'
                                    fontWeight='bold'
                                    fontSize={{
                                        lg: 20,
                                        md: 18,
                                        sm: 16,
                                        xs: 14,
                                    }}
                                >
                                    Contact us at
                                </Typography>
                                <Typography
                                    color='#D4D4D4'
                                    fontSize={{
                                        lg: 20,
                                        md: 18,
                                        sm: 16,
                                        xs: 14,
                                    }}
                                >
                                    E-mail: info@workersrus.com
                                </Typography>
                                <Typography
                                    color='#D4D4D4'
                                    fontSize={{
                                        lg: 20,
                                        md: 18,
                                        sm: 16,
                                        xs: 14,
                                    }}
                                >
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
                    <Grid item xs={12} md={4}
                          marginTop={{
                              lg: 0,
                              md: 5,
                              sm: 5,
                              xs: 5,
                          }}
                    >
                        <Box display='flex'>
                            <Box
                                marginRight={{
                                    lg: 25,
                                    md: 20,
                                    sm: 15,
                                    xs: 10
                                }}
                                marginLeft={{
                                    lg: 0,
                                    md: 20,
                                    sm: 15,
                                    xs: 10
                                }}
                            >
                                <Typography color='#A1A6AB' variant='h6' fontWeight='bold' mb={3}>
                                    Company
                                </Typography>
                                <List>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='About us' sx={{color: 'white'}}/>
                                    </ListItem>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='Career' sx={{color: 'white'}}/>
                                    </ListItem>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='FAQ’s' sx={{color: 'white'}}/>
                                    </ListItem>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='Contact' sx={{color: 'white'}}/>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <Typography color='#A1A6AB' variant='h6' fontWeight='bold' mb={3}>
                                    Services
                                </Typography>
                                <List>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='Jobs' sx={{color: 'white'}}/>
                                    </ListItem>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='Companies' sx={{color: 'white'}}/>
                                    </ListItem>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='Candidates' sx={{color: 'white'}}/>
                                    </ListItem>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='Pricing' sx={{color: 'white'}}/>
                                    </ListItem>
                                    <ListItem color='white' sx={{paddingLeft: '0'}}>
                                        <ListItemText primary='Partner' sx={{color: 'white'}}/>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            marginLeft={{
                                lg: 10,
                                md: 10,
                                sm: 5,
                                xs: 2
                            }}
                        >
                            <img src={newsletter} alt='newsletter' width='80px'/>
                            <Typography variant='h6' color='white' fontWeight='bold'>
                                Subscribe to our newsletter
                            </Typography>
                            <Typography variant='caption' color='#A1A6AB'>
                                We'll keep you updated with the best new jobs.
                            </Typography>
                            <Box mt={3}>
                                <TextField
                                    className="subscribeInput"
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    variant="filled"
                                    placeholder='Enter Your Email'
                                    sx={{backgroundColor: 'white', borderRadius: '5px', width: '320px'}}
                                />
                            </Box>
                            <Button className='primaryBtn' sx={{marginTop: '20px'}}>
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <hr/>

                <Typography
                    color='#A1A6AB'
                    variant='h6'
                    fontWeight='bold'
                    mt={5}
                    textAlign='center'
                    fontSize={{
                        lg: 20,
                        md: 18,
                        sm: 16,
                        xs: 14,
                    }}
                >
                    Copyright WorkersRus @{new Date().getFullYear()}. All Rights Reserved
                </Typography>
            </Box>
        </div>
    );
};

export default Footer;