import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material"
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const Category = ({categories}) => {
    return (
        <div className='container category'>
            <Box display='flex' justifyContent='space-between' alignItems='center' my={6} px={2}>
                <Typography
                    variant='h4'
                    fontWeight='bold'
                    fontSize={{
                        lg: 32,
                        md: 28,
                        sm: 24,
                        xs: 18
                    }}
                >
                    Explore By Category
                </Typography>
                <Link to={'/jobs'}>
                    <Button variant='outlined' className='secondaryBtn'>
                        Explore All
                    </Button>
                </Link>
            </Box>
            <Grid container mb={5}>
                {
                    categories?.slice(0, 4).map((category, idx) => (
                        <Grid item xs={6} md={3} px={2} mb={2} key={idx}>
                            <Link to={`/jobs?category_id=${category.id}`}>
                                <Box
                                    style={{border: '1px solid #F28A1F', borderRadius: '5px', textAlign: 'center'}}
                                    py={4}
                                >
                                    <img src={category.category_icon} style={{height: '200px'}} alt='category'/>
                                    <h3>{category.category_name}</h3>
                                    {/*<Typography color='grey'>*/}
                                    {/*    0 jobs*/}
                                    {/*</Typography>*/}
                                </Box>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default Category;