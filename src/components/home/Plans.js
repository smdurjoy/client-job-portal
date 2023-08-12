import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionTitle from "../common/SectionTitle";
import {Grid, ListItemIcon} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Plans = () => {
    const standardPlans = [
        '10 Job Posting',
        'Urgent Job',
        '0 Featured Job',
        'Job Displayed for 7 Days',
        'Premium Support 24/7',
    ]
    const premiumPlans = [
        '30 Job Posting',
        'Urgent Job',
        '1-3 Featured Job',
        'Job Displayed for 7 Days',
        'Premium Support 24/7',
    ]
    const enterprisePlans = [
        '60 Job Posting',
        'Urgent Job',
        '4+ Featured Job',
        'Job Displayed for 7 Days',
        'Premium Support 24/7',
    ]


    return (
        <div className='container'>
            <Box py={8}>
                <SectionTitle title='Check our amazing plans' subTitle='Choose the best one for you'/>

                <Grid container my={5} columnSpacing={5}>
                    <Grid item xs={6} md={4} mt={10}>
                        <Card style={{textAlign: 'center', border: '1px solid #ddd'}}>
                            <CardContent>
                                <Box p={4}>
                                    <Typography color='#6B6E6F' variant='h5' fontWeight='bold'>
                                        Standard
                                    </Typography>
                                    <Typography color='#6B6E6F' variant='h6' mb={5}>
                                        <span style={{
                                            color: '#F28A1F',
                                            fontSize: '40px',
                                            fontWeight: 'bold'
                                        }}>FREE</span> / Month
                                    </Typography>
                                    <hr/>
                                    <List>
                                        {
                                            standardPlans.map(plan => (
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircleIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={plan}
                                                    />
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Box>
                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Button className='primaryBtn'>
                                    Start With Standard
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={6} md={4} mt={4}>
                        <Card style={{textAlign: 'center', border: '1px solid #ddd'}}>
                            <CardContent>
                                <Box p={4}>
                                    <Typography color='#0d9ca4' variant='h5' fontWeight='bold'>
                                        Recommended
                                    </Typography>
                                    <Typography color='#6B6E6F' variant='h5' fontWeight='bold' mt={2}>
                                        Premium
                                    </Typography>
                                    <Typography color='#6B6E6F' variant='h6' mb={5}>
                                        <span style={{
                                            color: '#F28A1F',
                                            fontSize: '40px',
                                            fontWeight: 'bold'
                                        }}>$100</span> / Month
                                    </Typography>
                                    <hr/>
                                    <List>
                                        {
                                            premiumPlans.map(plan => (
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircleIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={plan}
                                                    />
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Box>
                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Button className='primaryBtn'>
                                    Start With Premium
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={6} md={4} mt={10}>
                        <Card style={{textAlign: 'center', border: '1px solid #ddd'}}>
                            <CardContent>
                                <Box p={4}>
                                    <Typography color='#6B6E6F' variant='h5' fontWeight='bold'>
                                        Enterprise
                                    </Typography>
                                    <Typography color='#6B6E6F' variant='h6' mb={5}>
                                        <span style={{
                                            color: '#F28A1F',
                                            fontSize: '40px',
                                            fontWeight: 'bold'
                                        }}>$150</span> / Month
                                    </Typography>
                                    <hr/>
                                    <List>
                                        {
                                            enterprisePlans.map(plan => (
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircleIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={plan}
                                                    />
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Box>
                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Button className='primaryBtn'>
                                    Start With Enterprise
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Plans;