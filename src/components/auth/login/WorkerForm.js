import React from 'react';
import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from "@mui/material/Button";

const WorkerForm = () => {
    return (
        <Box
            boxShadow="0px 0px 20px 0px rgba(242, 138, 31, 0.15)"
            width="100%"
            bgcolor="white"
            sx={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
        >
            <Box px={4} py={10}>
                <Box sx={{border: '1px solid #D4D4D4'}}>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        placeholder='Phone Number *'
                        sx={{
                            backgroundColor: 'white',
                            height: 'inherit',
                            width: '100%',
                            "& fieldset": {
                                border: "none",
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalPhoneIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Button className='primaryBtn' sx={{marginTop: '1rem', width: '100%'}}>
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default WorkerForm;