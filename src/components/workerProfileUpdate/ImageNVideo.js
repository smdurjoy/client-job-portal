import React from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Grid} from "@mui/material";
import SaveNCancel from "../common/SaveNCancel";
import uploadImgIcon from '../../assets/images/workerProfile/uploadImgIcon.png';
import editBtn from '../../assets/images/workerProfile/bxs_message-square-edit.svg';
import Button from "@mui/material/Button";
import H6 from "../Typography/H6";
import VideocamIcon from '@mui/icons-material/Videocam';

const ImageNVideo = () => {
    return (
        <Box mt={2}>
            <H4
                text='Upload Image'
                color='#0D9CA4'
                fontWeight='bold'
            />
            <Grid container spacing={2}>
                <Grid item md={12} sm={12} xs={12} mt={4}>
                    <Box display='flex' alignItems='center'>
                        <img src={uploadImgIcon} alt={'upload'} width='160px'/>
                        <Button>
                            <img src={editBtn} alt={'edit'} width='43px'/>
                        </Button>
                    </Box>
                </Grid>
                <Grid item md={12} sm={12} xs={12} mt={3}>
                    <SaveNCancel/>
                </Grid>
            </Grid>

            <H4
                text='Video CV'
                mt={9}
                color='#0D9CA4'
                fontWeight='bold'
            />
            <Grid container spacing={2}>
                <Grid item md={12} sm={12} xs={12} mt={3}>
                    <Box
                        sx={{border: '1px solid #D4D4D4'}}
                        mt={2}
                        p={6}
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                    >
                        <VideocamIcon sx={{ color: '#F28A1F', fontSize: '30px' }}/>
                        <H6
                            mt={1}
                            text='Select Video From Gallery'
                            color='#F28A1F'
                        />
                    </Box>
                </Grid>
                <Grid item md={12} mt={3}>
                    <SaveNCancel/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ImageNVideo;