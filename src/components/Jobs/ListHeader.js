import React from 'react';
import Box from "@mui/material/Box";
import companyLogo from "../../assets/images/home/airBnb.png";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

const ListHeader = () => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='start'>
            <Box display='flex' alignItems='center'>
                <img src={companyLogo} alt="company"/>
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
                        Product Designer
                    </Typography>
                    <Typography color="text.secondary">
                        Airbnb
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