import React from 'react';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";

const TabWrapper = ({defaultTab = '1', tabContent1, tabContent2, isDisabled = false, handleTabChange}) => {
    return (
        <Card sx={{width: {lg: 500, md: 450, sm: 400, xs: 350}}}>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={defaultTab}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        p={1}
                        bgcolor="#f5f5f5"
                    >
                        <TabList
                            onChange={handleTabChange}
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#F28A1F",
                                }
                            }}
                        >
                            <Tab
                                label="As Worker"
                                value="1"
                                disabled={isDisabled && defaultTab === '2'}
                                sx={{
                                    color: '#6B6E6F',
                                    fontWeight: 'bold',
                                    '&.Mui-selected': {
                                        color: '#F28A1F'
                                    }
                                }}
                            />
                            <Tab
                                label="As Company"
                                value="2"
                                disabled={isDisabled && defaultTab === '1'}
                                sx={{
                                    color: '#6B6E6F',
                                    fontWeight: 'bold',
                                    '&.Mui-selected': {
                                        color: '#F28A1F'
                                    }
                                }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{padding: 0, backgroundColor: '#f5f5f5'}}>
                        {tabContent1}
                    </TabPanel>
                    <TabPanel value="2" sx={{padding: 0, backgroundColor: '#f5f5f5'}}>
                        {tabContent2}
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    );
};

export default TabWrapper;