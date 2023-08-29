import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import {styled} from '@mui/material/styles';
import personalInfo from '../../assets/images/workerProfile/personalInfo.gif';
import educationTraining from '../../assets/images/workerProfile/educationTraining.gif';
import employment from '../../assets/images/workerProfile/employment.gif';
import information from '../../assets/images/workerProfile/information.gif';
import imgNVideo from '../../assets/images/workerProfile/imgNVideo.gif';
import H6 from "../Typography/H6";
import PersonalInfo from "./PersonalInfo";
import EducationNTraining from "./EducationNTraining";
import Employment from "./Employment";
import OtherInformation from "./OtherInformation";

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
    const [activeSection, setActiveSection] = useState(1);
    const [profileInOptions, setProfileInOptions] = useState([
        {
            id: 1,
            title: 'Personal Information',
            color: '#0D9CA4',
            borderColor: '#0D9CA4',
            image: personalInfo,
        },
        {
            id: 2,
            title: 'Education / Training',
            color: '#A1A6AB',
            image: educationTraining,
        },
        {
            id: 3,
            title: 'Employment',
            color: '#A1A6AB',
            image: employment,
        },
        {
            id: 4,
            title: 'Other Information',
            color: '#A1A6AB',
            image: information,
        },
        {
            id: 5,
            title: 'Image & Video',
            color: '#A1A6AB',
            image: imgNVideo,
        },
    ]);

    useEffect(() => {
        const newState = profileInOptions.map(obj => {
            if (obj.id === activeSection) {
                return {
                    ...obj,
                    borderColor: '#0D9CA4',
                    color: '#0D9CA4',
                };
            }
            return {
                ...obj,
                borderColor: '#D4D4D4',
                color: '#A1A6AB',
            };
        });
        setProfileInOptions(newState);
    }, [activeSection])

    return (
        <Box className='container' mt={16} mb={10}>
            <Box py={6}>
                <Stack direction="row" spacing={2} flexWrap='wrap' useFlexGap>
                    {
                        profileInOptions.map((item, key) => (
                            <Item key={key}
                                  sx={{
                                      borderColor: item.borderColor ? item.borderColor : '0D9CA4',
                                      flexBasis: '18.3%'
                                  }}
                                  onClick={() => setActiveSection(key + 1)}
                            >
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

            {activeSection === 1 && <PersonalInfo/>}
            {activeSection === 2 && <EducationNTraining/>}
            {activeSection === 3 && <Employment/>}
            {activeSection === 4 && <OtherInformation/>}

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