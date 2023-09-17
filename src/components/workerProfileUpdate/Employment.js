import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Grid} from "@mui/material";
import SaveNCancel from "../common/SaveNCancel";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import useWorkerManger from "../../app/customHooks/useWorkerManger";
import {useNavigate} from "react-router-dom";
import EmploymentForm from "./EmploymentForm";
import {toast} from "react-toastify";

const emptyExperienceList = {
    company_name: '',
    designation: '',
    start_at: null,
    end_at: null,
    end_date: null,
    responsibilities: '',
    is_currently_working: false,
}

const PersonalInfo = ({profile, user_id}) => {
    const [experienceList, setExperienceList] = useState(profile?.employment_history?.length ? profile?.employment_history : [{...emptyExperienceList}]);

    const {
        isUpdateProfileExperienceLoading,
        isUpdateProfileExperienceSuccess,
        isUpdateProfileExperienceError,
        updateProfileExperience,
        updateProfileExperienceError
    } = useWorkerManger();
    const navigate = useNavigate();

    const addNewExperience = () => {
        setExperienceList([...experienceList, {...emptyExperienceList}]);
    }

    const removeExperience = (idx) => {
        const updateExperienceList = [...experienceList];
        updateExperienceList.splice(idx, 1);
        setExperienceList(updateExperienceList);
    }

    const handleSave = async () => {
        const experienceInfo = {
            worker_id: user_id,
            experience_list: experienceList
        }
        console.log({experienceInfo});
        await updateProfileExperience(experienceInfo);
    }

    useEffect(() => {
        if (isUpdateProfileExperienceSuccess) {
            toast.success('Updated Successfully.');
            navigate('/profile');
        }

        if (updateProfileExperienceError) {
            const {status} = isUpdateProfileExperienceError;
            if (status === 400) {
                toast.warning('Field is Required');
                return;
            }
            toast.error('Something Went Wrong.');
        }
    }, [isUpdateProfileExperienceSuccess, updateProfileExperienceError, isUpdateProfileExperienceError]);

    return (
        <Box mt={2}>
            <H4
                text='Experience'
                color='#0D9CA4'
                fontWeight='bold'
            />

            <Grid container spacing={2}>
                {
                    experienceList?.map((experience, idx) => (
                        <EmploymentForm
                            key={idx}
                            idx={idx}
                            experience={experience}
                            removeExperience={removeExperience}
                            experienceList={experienceList}
                            setExperienceList={setExperienceList}
                        />
                    ))
                }

                <Grid item md={12} mt={3}>
                    <SaveNCancel
                        handleSave={handleSave}
                        isLoading={isUpdateProfileExperienceLoading}
                    />
                </Grid>

                <Grid item md={12} mt={3}>
                    <Button size='large' variant='outlined' className='secondaryBtn' onClick={addNewExperience}>
                        <AddOutlinedIcon/>
                        Add Experience (If Required)
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalInfo;