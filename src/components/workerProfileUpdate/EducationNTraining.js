import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Grid} from "@mui/material";
import SaveNCancel from "../common/SaveNCancel";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EducationNTrainingForm from "./EducationNTrainingForm";
import {useGetDegreesQuery} from "../../services/common";
import useWorkerManger from "../../app/customHooks/useWorkerManger";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const emptyDegreeList = {
    degree_id: '',
    institute: '',
    passing_year: '',
    is_currently_reading: '',
    result: '',
}

const EducationNTraining = ({profile, user_id}) => {
    const [degreeList, setDegreeList] = useState(profile?.educations ? profile?.educations : [{...emptyDegreeList}]);
    const {data: degrees} = useGetDegreesQuery();
    const {
        isUpdateProfileEducationLoading,
        isUpdateProfileEducationSuccess,
        isUpdateProfileEducationError,
        updateProfileEducation,
        updateProfileEducationError
    } = useWorkerManger();
    const navigate = useNavigate();

    const addNewDegree = () => {
        setDegreeList([...degreeList, {...emptyDegreeList}]);
    }

    const removeDegree = (idx) => {
        const updateDegreeList = [...degreeList];
        updateDegreeList.splice(idx, 1);
        setDegreeList(updateDegreeList);
    }

    const handleSave = async () => {
        const educationInfo = {
            user_id,
            degree_list: degreeList
        }
        await updateProfileEducation(educationInfo);
    }

    useEffect(() => {
        if (isUpdateProfileEducationSuccess) {
            toast.success('Updated Successfully.');
            navigate('/profile');
        }

        if (isUpdateProfileEducationError) {
            const {status} = updateProfileEducationError;
            if (status === 400) {
                toast.warning('Field is Required');
                return;
            }
            toast.error('Something Went Wrong.');
        }
    }, [isUpdateProfileEducationSuccess, isUpdateProfileEducationError, updateProfileEducationError]);

    return (
        <Box mt={2}>
            <H4
                text='Education / Training'
                color='#0D9CA4'
                fontWeight='bold'
            />

            <Grid container spacing={2}>
                {
                    degreeList?.map((degree, idx) => (
                        <EducationNTrainingForm
                            degree={degree}
                            key={idx}
                            idx={idx}
                            degrees={degrees?.areas}
                            removeDegree={removeDegree}
                            degreeList={degreeList}
                            setDegreeList={setDegreeList}
                        />
                    ))
                }

                <Grid item md={12} mt={3}>
                    <SaveNCancel
                        handleSave={handleSave}
                        isLoading={isUpdateProfileEducationLoading}
                    />
                </Grid>

                <Grid item md={12} mt={3}>
                    <Button size='large' variant='outlined' className='secondaryBtn' onClick={addNewDegree}>
                        <AddOutlinedIcon/>
                        Add Education (If Required)
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EducationNTraining;