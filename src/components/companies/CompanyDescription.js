import React from 'react';
import Box from "@mui/material/Box";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import H6 from "../Typography/H6";
import Divider from "@mui/material/Divider";
import H3 from "../Typography/H3";

const CompanyDescription = () => {
    const companyDetails = [
        {
            icon: <LanguageOutlinedIcon sx={{ fontSize: '40px', color: '#0D9CA4' }}/>,
            title: 'Website',
            value: 'www.airbnb.com'
        },
        {
            icon: <RoomOutlinedIcon sx={{ fontSize: '40px', color: '#0D9CA4' }}/>,
            title: 'Location',
            value: 'San Francisco, California, United States'
        },
        {
            icon: <AssignmentIndOutlinedIcon sx={{ fontSize: '40px', color: '#0D9CA4' }}/>,
            title: 'Company Size',
            value: '10,000 Employes'
        },
    ];

    return (
        <>
            <Box display='flex' flexWrap='wrap' columnGap={2}>
                {
                    companyDetails.map((detail, key) => (
                        <Box key={key} display='flex' alignItems='center' bgcolor='#e7f6f6' borderRadius='7px' p={2} mb={1}>
                            {detail.icon}
                            <Box ml={2}>
                                <H6
                                   text={detail.title}
                                   color='#0D9CA4'
                                />
                                <H6
                                   text={detail.value}
                                   color='#6B6E6F'
                                />
                            </Box>
                        </Box>
                    ))
                }
            </Box>

            <Box mt={3}>
                <Divider/>
            </Box>

            <H3
                text='About Company'
                color='#0D9CA4'
                mt={4}
            />

            <H6
                text='Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie'
                mt={3}
            />
        </>
    );
};

export default CompanyDescription;