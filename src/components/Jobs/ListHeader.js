import React from 'react';
import Box from "@mui/material/Box";
import companyLogo from "../../assets/images/home/airBnb.png";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

const ListHeader = ({job}) => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='start'>
            <Box display='flex' alignItems='center'>
                <img src={job ? job.company_logo : companyLogo} alt="company" width='80px'/>
                <Box ml={2}>
                    <Typography
                        variant='h5'
                        color='black'
                        fontSize={{
                            lg: 30,
                            md: 26,
                            sm: 22,
                            xs: 18
                        }}
                    >
                        {job ? job.job_title : 'Product Designer'}
                    </Typography>
                    <Typography color="text.secondary">
                        {job ? job.company : 'Airbnb'}
                    </Typography>
                </Box>
            </Box>
            <IconButton aria-label="bookmark" size="large"
                        sx={{border: '1px solid #F28A1F', color: '#F28A1F'}}>
                <BookmarkOutlinedIcon/>
            </IconButton>
        </Box>
    );
};

export default ListHeader;