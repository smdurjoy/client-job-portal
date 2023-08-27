import React from 'react';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WorkerForm from "./WorkerForm";
import CompanyForm from "./CompanyForm";
import workerLoginImg from '../../../assets/images/auth/workerLogin.png';
import companyLoginImg from '../../../assets/images/auth/companyLogin.png';

const Form = ({setImg, setSubtitle}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if (newValue === '1') {
            setImg(workerLoginImg);
            setSubtitle('Log in to continue your account and explore new jobs');
        } else {
            setImg(companyLoginImg);
            setSubtitle('Log in to continue your account and enjoy more features');
        }
    };

    return (
        <Card sx={{width: {lg: 500, md: 450, sm: 400, xs: 350}}}>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        p={1}
                        bgcolor="#f5f5f5"
                    >
                        <TabList
                            onChange={handleChange}
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
                                    fontWeight: 'bold',
                                    '&.Mui-selected': {
                                        color: '#F28A1F'
                                    }
                                }}
                            />
                            <Tab
                                label="As Company"
                                value="2"
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
                        <WorkerForm/>
                    </TabPanel>
                    <TabPanel value="2" sx={{padding: 0, backgroundColor: '#f5f5f5'}}>
                        <CompanyForm/>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    );
};

export default Form;