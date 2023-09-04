import React from 'react';
import Box from "@mui/material/Box";
import dummyImg from '../../../assets/images/workerProfile/uploadImgIcon.png';
import Typography from "@mui/material/Typography";
import TypoBadge from "../../common/TypoBadge";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CategoryIcon from '@mui/icons-material/Category';

const ApplicantsCard = ({applicant}) => {
    return (
        <Box
            p={2}
            display='flex'
            justifyContent='space-between'
            borderRadius='7px'
            border='1px solid #D4D4D4;'
            mb={2}
            className='applicantsCard'
        >
            <Box display='flex' alignItems='center'>
                <img src={dummyImg} alt='applicant' width='90px' style={{borderRadius: '50%'}}/>
                <Box marginLeft={{lg: 2, md: 2, sm: 1, xs: 1}}>
                    <Typography>
                        <span style={{color: '#0D9CA4'}}> Name: </span>
                        {applicant.name}
                        <span style={{color: '#0D9CA4', marginLeft: '7px'}}> Phone number: </span>
                        {applicant.phone}
                        <span style={{color: '#0D9CA4', marginLeft: '7px'}}> Email: </span>
                        {applicant.email}
                    </Typography>
                    <Box display='flex' mt={2}>
                        <TypoBadge
                            icon={<LocationOnOutlinedIcon fontSize='small'/>}
                            text={applicant.location}
                            color='#0D9CA4'
                            bgColor='#F3FAFA'
                        />
                        <TypoBadge
                            icon={<CategoryIcon fontSize='small'/>}
                            text={applicant.worker_type}
                            color='#F28A1F'
                            bgColor='#fff6f6'
                        />
                    </Box>
                </Box>
            </Box>
            <Box></Box>
        </Box>
    );
};

export default ApplicantsCard;