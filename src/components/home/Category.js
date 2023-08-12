import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material"
import category1 from '../../assets/images/home/category1.png';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const Category = () => {
    return (
        <div className='container'>
            <Box display='flex' justifyContent='space-between' alignItems='center' my={6} px={2}>
                <h2 className='title'>Explore By Category</h2>
                <Button variant='outlined' className='secondaryBtn'>
                    Explore All
                </Button>
            </Box>
            <Grid container mb={5}>
                <Grid item xs={6} md={3} px={2}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Box style={{ border: '1px solid #F28A1F', borderRadius: '5px', textAlign: 'center' }} py={4}>
                            <img src={category1} style={{ width: '150px' }} alt='category' />
                            <h3>Laborer</h3>
                            <Typography color='grey'>
                                50 jobs
                            </Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} md={3} px={2}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Box style={{ border: '1px solid #F28A1F', borderRadius: '5px', textAlign: 'center' }} py={4}>
                            <img src={category1} style={{ width: '150px' }} alt='category' />
                            <h3>Laborer</h3>
                            <Typography color='grey'>
                                50 jobs
                            </Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} md={3} px={2}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Box style={{ border: '1px solid #F28A1F', borderRadius: '5px', textAlign: 'center' }} py={4}>
                            <img src={category1} style={{ width: '150px' }} alt='category' />
                            <h3>Laborer</h3>
                            <Typography color='grey'>
                                50 jobs
                            </Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} md={3} px={2}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Box style={{ border: '1px solid #F28A1F', borderRadius: '5px', textAlign: 'center' }} py={4}>
                            <img src={category1} style={{ width: '150px' }} alt='category' />
                            <h3>Laborer</h3>
                            <Typography color='grey'>
                                50 jobs
                            </Typography>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Category;