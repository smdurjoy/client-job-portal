import React from 'react';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WorkerOTPForm from "./WorkerOTPForm";

const OTPForm = () => {
    return (
        <Card sx={{width: {lg: 500, md: 450, sm: 400, xs: 350}}}>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={'1'}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        p={1}
                        bgcolor="#f5f5f5"
                    >
                        <TabList
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#F28A1F",
                                }
                            }}
                        >
                            <Tab
                                label="As Worker"
                                value="1"
                                sx={{
                                    color: '#6B6E6F',
                                    '&.Mui-selected': {
                                        color: '#F28A1F'
                                    }
                                }}
                            />
                            <Tab
                                label="As Company"
                                value="2"
                                disabled
                                sx={{
                                    color: '#6B6E6F',
                                    '&.Mui-selected': {
                                        color: '#F28A1F'
                                    }
                                }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{padding: 0, backgroundColor: '#f5f5f5'}}>
                        <WorkerOTPForm/>
                    </TabPanel>
                    <TabPanel value="2" sx={{padding: 0, backgroundColor: '#f5f5f5'}}>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    );
};

export default OTPForm;