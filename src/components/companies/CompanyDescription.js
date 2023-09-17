import React from 'react';
import Box from "@mui/material/Box";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import H6 from "../Typography/H6";
import Divider from "@mui/material/Divider";
import H3 from "../Typography/H3";

const CompanyDescription = ({company}) => {
    const companyDetails = [
        {
            icon: <LanguageOutlinedIcon sx={{ fontSize: '40px', color: '#0D9CA4' }}/>,
            title: 'Website',
            value: company?.company_website ? company.company_website : '--'
        },
        {
            icon: <RoomOutlinedIcon sx={{ fontSize: '40px', color: '#0D9CA4' }}/>,
            title: 'Location',
            value: company?.company_address_line_1 ? company.company_address_line_1 : '--'
        },
        {
            icon: <AssignmentIndOutlinedIcon sx={{ fontSize: '40px', color: '#0D9CA4' }}/>,
            title: 'Company Size',
            value: company?.company_size ? `${company.company_size} Employess` : '--'
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
                text={company?.about_company ? company.about_company : ''}
                mt={3}
            />
        </>
    );
};

export default CompanyDescription;