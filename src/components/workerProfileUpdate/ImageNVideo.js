import React, {useEffect, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Grid} from "@mui/material";
import SaveNCancel from "../common/SaveNCancel";
import uploadImgIcon from '../../assets/images/workerProfile/uploadImgIcon.png';
import editBtn from '../../assets/images/workerProfile/bxs_message-square-edit.svg';
import Button from "@mui/material/Button";
import H6 from "../Typography/H6";
import VideocamIcon from '@mui/icons-material/Videocam';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";

const ImageNVideo = ({profile, user_id}) => {
    const {token} = useAppSelector((state) => state.app);
    const [profileImgFile, setProfileImgFile] = useState(null);
    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        setProfileImgFile(e.target.files[0]);
    }

    const handleSave = async () => {
        try {
            if (!profileImgFile) {
                toast.warning('Please select profile picture.');
                return;
            }
            setIsLoading(true);
            const formData = new FormData();
            formData.append('profile_picture', profileImgFile);
            formData.append('worker_id', user_id);
            const response = await fetch(`/worker/upload/profile/picture/`,
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Content-type': `multipart/form-data`,
                        'Authorization': `Token ${token}`
                    },
                },
            );
            setIsSuccess(true);
            console.log({response});
        } catch (e) {
            toast.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Updated Successfully.');
            navigate('/profile');
        }
    }, [isSuccess]);

    return (
        <Box mt={2}>
            <H4
                text='Upload Image'
                color='#0D9CA4'
                fontWeight='bold'
            />
            <input
                accept="image/*"
                style={{display: 'none'}}
                id="raised-button-file"
                type="file"
                onChange={handleImageChange}
                ref={fileInputRef}
            />
            <Grid container spacing={2}>
                <Grid item md={12} sm={12} xs={12} mt={4}>
                    <Box display='flex' alignItems='center'>
                        <img src={uploadImgIcon} alt={'upload'} width='160px'/>
                        <label htmlFor="raised-button-file">
                            <Button onClick={handleButtonClick}>
                                <img src={editBtn} alt={'edit'} width='43px'/>
                            </Button>
                        </label>
                    </Box>
                </Grid>
                <Grid item md={12} sm={12} xs={12} mt={3}>
                    <SaveNCancel
                        handleSave={handleSave}
                        isLoading={isLoading}
                    />
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
                        <VideocamIcon sx={{color: '#F28A1F', fontSize: '30px'}}/>
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