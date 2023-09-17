import {
    useApplyToJobMutation,
    useUpdateBasicProfileInfoMutation,
    useUpdateProfileAddressMutation,
    useUpdateProfileEducationMutation,
    useUpdateProfileExperienceMutation
} from "../../services/worker";

export default function useWorkerManger() {
    const [
        createApplyToJobFunc,
        {
            isLoading: isApplyJobLoading,
            isSuccess: isApplyJobSuccess,
            isError: isApplyJobError,
            error: applyJobError,
            data: applyJobResponse,
        },
    ] = useApplyToJobMutation();
    const [
        updateBasicProfileInfoFunc,
        {
            isLoading: isUpdateBasicProfileInfoLoading,
            isSuccess: isUpdateBasicProfileInfoSuccess,
            isError: isUpdateBasicProfileInfoError,
            error: updateBasicProfileInfoError,
            data: updateBasicProfileInfoResponse,
        },
    ] = useUpdateBasicProfileInfoMutation();
    const [
        updateProfileAddressFunc,
        {
            isLoading: isUpdateProfileAddressLoading,
            isSuccess: isUpdateProfileAddressSuccess,
            isError: isUpdateProfileAddressError,
            error: updateProfileAddressError,
            data: updateProfileAddressResponse,
        },
    ] = useUpdateProfileAddressMutation();
    const [
        updateProfileEducationFunc,
        {
            isLoading: isUpdateProfileEducationLoading,
            isSuccess: isUpdateProfileEducationSuccess,
            isError: isUpdateProfileEducationError,
            error: updateProfileEducationError,
            data: updateProfileEducationResponse,
        },
    ] = useUpdateProfileEducationMutation();
    const [
        updateProfileExperienceFunc,
        {
            isLoading: isUpdateProfileExperienceLoading,
            isSuccess: isUpdateProfileExperienceSuccess,
            isError: isUpdateProfileExperienceError,
            error: updateProfileExperienceError,
            data: updateProfileExperienceResponse,
        },
    ] = useUpdateProfileExperienceMutation();

    const applyToJob = async (job_id, worker_id) => {
        await createApplyToJobFunc({job_id, worker_id});
    };

    const updateBasicProfileInfo = async (profileInfo) => {
        await updateBasicProfileInfoFunc(profileInfo);
    };

    const updateProfileAddress = async (addressInfo) => {
        await updateProfileAddressFunc(addressInfo);
    };

    const updateProfileEducation = async (educationInfo) => {
        await updateProfileEducationFunc(educationInfo);
    };

    const updateProfileExperience = async (experienceInfo) => {
        await updateProfileExperienceFunc(experienceInfo);
    };

    return {
        isApplyJobLoading,
        isApplyJobSuccess,
        isApplyJobError,
        applyJobError,
        applyToJob,
        applyJobResponse,

        isUpdateBasicProfileInfoLoading,
        isUpdateBasicProfileInfoSuccess,
        isUpdateBasicProfileInfoError,
        updateBasicProfileInfoError,
        updateBasicProfileInfo,
        updateBasicProfileInfoResponse,

        isUpdateProfileAddressLoading,
        isUpdateProfileAddressSuccess,
        isUpdateProfileAddressError,
        updateProfileAddressError,
        updateProfileAddress,
        updateProfileAddressResponse,

        isUpdateProfileEducationLoading,
        isUpdateProfileEducationSuccess,
        isUpdateProfileEducationError,
        updateProfileEducationError,
        updateProfileEducation,
        updateProfileEducationResponse,

        isUpdateProfileExperienceLoading,
        isUpdateProfileExperienceSuccess,
        isUpdateProfileExperienceError,
        updateProfileExperienceError,
        updateProfileExperience,
        updateProfileExperienceResponse,
    };
}
