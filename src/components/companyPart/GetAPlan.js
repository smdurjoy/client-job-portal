import React from 'react';
import Box from "@mui/material/Box";
import Plans from "../home/Plans";
import H3 from "../Typography/H3";
import iconImg from '../../assets/images/company/polygon.svg';
import Typography from "@mui/material/Typography";

const GetAPlan = () => {
    const chooseFacts = [
        {
            highlightText: '10 thousand ',
            text: 'users daily visitors',
            textType: 2
        },
        {
            highlightText: '',
            text: 'Easy to post a job in this site.',
            text2: ''
        },
        {
            highlightText: '5 thousand',
            text: 'More than',
            text2: 'CV’s in CV Bank.'
        },
        {
            highlightText: '20 thousand',
            text: 'There are more than',
            text2: 'Recruiters Connected here.'
        },
        {
            highlightText: '15 thousand',
            text: 'The most powerful things that',
            text2: 'viewers per jobs post.'
        },
    ]

    return (
        <Box className='container' mt={8}>
            <Box py={6}>
                <Plans/>
                <Box mb={3}>
                    <H3
                        text='Why Choose Only WorkersRUS for your business Advertise'
                        fontWeight='bold'
                    />

                    <Box mt={4}>
                        {
                            chooseFacts.map((fact, key) => (
                                <Box display='flex' alignItems='center' mt={2} key={key}>
                                    <img src={iconImg} alt="->" style={{width: '10px'}}/>
                                    {fact.textType === 2 ? (
                                        <Typography ml={2}>
                                            <span style={{color: '#0D9CA4'}}> {fact.highlightText} </span>
                                            {fact.text}
                                        </Typography>
                                    ) : (
                                        <Typography ml={2}>
                                            {fact.text}
                                            <span style={{color: '#0D9CA4'}}> {fact.highlightText} </span>
                                            {fact.text2}
                                        </Typography>
                                    )}

                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default GetAPlan;