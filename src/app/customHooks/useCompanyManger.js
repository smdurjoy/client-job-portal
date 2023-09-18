import {useUpdateCompanyProfileMutation} from "../../services/company";

export default function useCompanyManger() {
    const [
        updateCompanyProfileFunc,
        {
            isLoading: isUpdateCompanyProfileLoading,
            isSuccess: isUpdateCompanyProfileSuccess,
            isError: isUpdateCompanyProfileError,
            error: updateCompanyProfileError,
            data: updateCompanyProfileResponse,
        },
    ] = useUpdateCompanyProfileMutation();

    const updateCompanyProfile = async (companyDetails) => {
        await updateCompanyProfileFunc(companyDetails);
    };

    return {
        isUpdateCompanyProfileLoading,
        isUpdateCompanyProfileSuccess,
        isUpdateCompanyProfileError,
        updateCompanyProfileError,
        updateCompanyProfile,
        updateCompanyProfileResponse,
    };
}
