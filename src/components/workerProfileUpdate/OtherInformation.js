import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import H4 from "../Typography/H4";
import {Grid} from "@mui/material";
import H6 from "../Typography/H6";
import FormInput from "../common/FormInput";
import SaveNCancel from "../common/SaveNCancel";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import useWorkerManger from "../../app/customHooks/useWorkerManger";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const emptySkillList = {
    skill_name: '',
}

const OtherInformation = ({profile, user_id}) => {
    console.log({profile})
    const [skillList, setSkillList] = useState(profile?.skill_set?.length ? profile?.skill_set : [{...emptySkillList}]);
    const {
        isUpdateProfileSkillLoading,
        isUpdateProfileSkillSuccess,
        isUpdateProfileSkillError,
        updateProfileSkill,
        updateProfileSkillError
    } = useWorkerManger();
    const navigate = useNavigate();

    const handleInputChange = (e, idx) => {
        const updatedSkillList = [...skillList];
        updatedSkillList[idx].skill_name = e.target.value;
        setSkillList(updatedSkillList);
    }

    const handleSave = async () => {
        const skillInfo = {
            user_id,
            skill_list: skillList.map(({skill_name}) => skill_name)
        }
        await updateProfileSkill(skillInfo);
    }

    const addNewSkill = () => {
        setSkillList([...skillList, {...emptySkillList}]);
    }

    useEffect(() => {
        if (isUpdateProfileSkillSuccess) {
            toast.success('Updated Successfully.');
            navigate('/profile');
        }

        if (isUpdateProfileSkillError) {
            const {status} = updateProfileSkillError;
            if (status === 400) {
                toast.warning('Field is Required');
                return;
            }
            toast.error('Something Went Wrong.');
        }
    }, [isUpdateProfileSkillSuccess, isUpdateProfileSkillError, updateProfileSkillError]);

    return (
        <Box mt={2}>
            <H4
                text='Other Information'
                color='#0D9CA4'
                fontWeight='bold'
            />

            <Grid container spacing={2}>
                {
                    skillList?.map((skill, idx) => (
                        <Grid item md={12} xs={12} mt={4} key={idx}>
                            <H6
                                text='Skills*'
                                color='#F28A1F'
                                mt={1}
                            />
                            <FormInput
                                placeholder='Write Your Skills'
                                icon={<SignalCellularAltOutlinedIcon/>}
                                value={skill.skill_name}
                                handleChange={(e) => handleInputChange(e, idx)}
                            />
                        </Grid>
                    ))
                }

                <Grid item md={12} mt={3}>
                    <SaveNCancel
                        handleSave={handleSave}
                        isLoading={isUpdateProfileSkillLoading}
                    />
                </Grid>

                <Grid item md={12} mt={3}>
                    <Button size='large' variant='outlined' className='secondaryBtn' onClick={addNewSkill}>
                        <AddOutlinedIcon/>
                        Add Skills
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OtherInformation;