import React from 'react';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import {Grid, Stack} from "@mui/material";
import {styled} from '@mui/material/styles';
import personalInfo from '../../assets/images/workerProfile/personalInfo.gif';
import educationTraining from '../../assets/images/workerProfile/educationTraining.gif';
import employment from '../../assets/images/workerProfile/employment.gif';
import information from '../../assets/images/workerProfile/information.gif';
import imgNVideo from '../../assets/images/workerProfile/imgNVideo.gif';
import H6 from "../Typography/H6";
import PersonalInfo from "./PersonalInfo";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: '20px 0',
    textAlign: 'center',
    border: '1px solid #D4D4D4',
    borderRadius: '7px',
    boxShadow: '3px 2px 15px 0 rgba(0, 0, 0, 0.15)',
    color: theme.palette.text.secondary,
}));

const Index = () => {
    const profileInOptions = [
        {
            title: 'Personal Information',
            color: '#0D9CA4',
            borderColor: '#0D9CA4',
            image: personalInfo,
        },
        {
            title: 'Education / Training',
            color: '#A1A6AB',
            image: educationTraining,
        },
        {
            title: 'Employment',
            color: '#A1A6AB',
            image: employment,
        },
        {
            title: 'Other Information',
            color: '#A1A6AB',
            image: information,
        },
        {
            title: 'Image & Video',
            color: '#A1A6AB',
            image: imgNVideo,
        },
    ];

    return (
        <Box className='container' mt={16} mb={10}>
            <Box py={6}>
                <Stack direction="row" spacing={2} flexWrap='wrap' useFlexGap>
                    {
                        profileInOptions.map(item => (
                            <Item key={item.title}
                                  sx={{borderColor: item.borderColor ? item.borderColor : '0D9CA4', flexBasis: '18.3%'}}>
                                <Box display='flex' flexDirection='column' alignItems='center'>
                                    <img src={item.image} alt={item.title} className='workerProfileActionImg'/>
                                    <H6
                                        text={item.title}
                                        color={item.color}
                                    />
                                </Box>
                            </Item>
                        ))
                    }
                </Stack>
            </Box>

            <PersonalInfo/>

            {/*<Grid container py={6} spacing={2} columnGap={2}>*/}
            {/*    {*/}
            {/*        profileInOptions.map(item => (*/}
            {/*            <Grid item lg={2.2} md={2.2} sm={2.6} xs={3.5} mb={1}*/}
            {/*                sx={{*/}
            {/*                    padding: '20px 0',*/}
            {/*                    textAlign: 'center',*/}
            {/*                    border: '1px solid #D4D4D4',*/}
            {/*                    borderRadius: '7px',*/}
            {/*                    boxShadow: '3px 2px 15px 0 rgba(0, 0, 0, 0.15)',*/}
            {/*                    borderColor: item.borderColor ? item.borderColor : '0D9CA4', flexBasis: '18.3%'*/}
            {/*                }}*/}
            {/*                  key={item.title}*/}
            {/*            >*/}
            {/*                <Box display='flex' flexDirection='column' alignItems='center'>*/}
            {/*                    <img src={item.image} alt={item.title} className='workerProfileActionImg'/>*/}
            {/*                    <H6*/}
            {/*                        text={item.title}*/}
            {/*                        color={item.color}*/}
            {/*                    />*/}
            {/*                </Box>*/}
            {/*            </Grid>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Grid>*/}
        </Box>
    );
};

export default Index;