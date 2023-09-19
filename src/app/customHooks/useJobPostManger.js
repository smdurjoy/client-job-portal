import {
    useCreateJobAddressMutation,
    useCreateJobBasicsMutation,
    useCreateJobRequirementsMutation, useUpdateJobBasicsMutation
} from "../../services/authJobs";

export default function useJobPostManger() {
    const [
        createJobBasicFunc,
        {
            isLoading: isJobBasicLoading,
            isSuccess: isJobBasicSuccess,
            isError: isJobBasicError,
            error: jobBasicError,
            data: jobBasicCreateResponse,
        },
    ] = useCreateJobBasicsMutation();

    const [
        createJobRequirementFunc,
        {
            isLoading: isJobRequirementLoading,
            isSuccess: isJobRequirementSuccess,
            isError: isJobRequirementError,
            error: jobRequirementError,
            data: jobRequirementCreateResponse,
        },
    ] = useCreateJobRequirementsMutation();

    const [
        createJobAddressFunc,
        {
            isLoading: isJobAddressLoading,
            isSuccess: isJobAddressSuccess,
            isError: isJobAddressError,
            error: jobAddressError,
            data: jobAddressCreateResponse,
        },
    ] = useCreateJobAddressMutation();

    const [
        updateUpdateJobBasicFunc,
        {
            isLoading: isUpdateJobBasicLoading,
            isSuccess: isUpdateJobBasicSuccess,
            isError: isUpdateJobBasicError,
            error: updateJobBasicError,
            data: updateJobBasicResponse,
        },
    ] = useUpdateJobBasicsMutation();

    const createJobBasic = async (jobBasics) => {
        await createJobBasicFunc(jobBasics);
    };

    const createJobRequirement = async (jobRequirement) => {
        await createJobRequirementFunc(jobRequirement);
    };

    const createJobAddress = async (joAddress) => {
        await createJobAddressFunc(joAddress);
    };

    const updateJobBasics = async (joAddress) => {
        await updateUpdateJobBasicFunc(joAddress);
    };

    return {
        isJobBasicLoading,
        isJobBasicSuccess,
        isJobBasicError,
        jobBasicError,
        createJobBasic,
        jobBasicCreateResponse,

        isJobRequirementLoading,
        isJobRequirementSuccess,
        isJobRequirementError,
        jobRequirementError,
        createJobRequirement,
        jobRequirementCreateResponse,

        isJobAddressLoading,
        isJobAddressSuccess,
        isJobAddressError,
        jobAddressError,
        createJobAddress,
        jobAddressCreateResponse,

        isUpdateJobBasicLoading,
        isUpdateJobBasicSuccess,
        isUpdateJobBasicError,
        updateJobBasicError,
        updateJobBasics,
        updateJobBasicResponse,
    };
}
