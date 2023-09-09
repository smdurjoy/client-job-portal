import {
    useCompanyLoginMutation,
    useCompanyOtpVerificationMutation,
    useCompanyRegisterMutation,
    useOtpVerificationMutation,
    useSendOtpMutation
} from '../../services/auth';

export default function useAuthManager() {
    const [
        createSendOtpFunc,
        {
            isLoading: isOtpSendLoading,
            isSuccess: isOtpSendSuccess,
            isError: isOtpSendError,
            error: otpSendError,
        },
    ] = useSendOtpMutation();
    const [
        createOtpVerificationFunc,
        {
            isLoading: isOtpVerificationLoading,
            isSuccess: isOtpVerificationSuccess,
            isError: isOtpVerificationError,
            error: otpVerificationError,
            data: optVerificationResponse
        },
    ] = useOtpVerificationMutation();
    const [
        createCompanyRegisterFunc,
        {
            isLoading: isCompanyRegisterLoading,
            isSuccess: isCompanyRegisterSuccess,
            isError: isCompanyRegisterError,
            error: companyRegisterError,
            data: companyRegisterResponse
        },
    ] = useCompanyRegisterMutation();
    const [
        createCompanyOtpVerificationFunc,
        {
            isLoading: isCompanyOtpVerificationLoading,
            isSuccess: isCompanyOtpVerificationSuccess,
            isError: isCompanyOtpVerificationError,
            error: otpCompanyVerificationError,
            data: optCompanyVerificationResponse
        },
    ] = useCompanyOtpVerificationMutation();

    const [
        createCompanyLoginFunc,
        {
            isLoading: isCompanyLoginLoading,
            isSuccess: isCompanyLoginSuccess,
            isError: isCompanyLoginError,
            error: companyLoginError,
            data: companyLoginResponse
        },
    ] = useCompanyLoginMutation();

    const sendOtp = async (phone_number, device_hash) => {
        await createSendOtpFunc({
            phone_number,
            device_hash,
        });
    };

    const verifyOtp = async (phone_number, otp) => {
        await createOtpVerificationFunc({
            phone_number,
            otp,
        });
    };

    const registerCompany = async ({company_name, phone_number, email, password}) => {
        await createCompanyRegisterFunc({
            company_name,
            phone_number,
            email,
            password,
        });
    };

    const verifyCompanyOtp = async (email, otp) => {
        await createCompanyOtpVerificationFunc({
            email,
            otp,
        });
    };

    const companyLogin = async (email, password) => {
        await createCompanyLoginFunc({
            email,
            password,
        });
    };

    return {
        isOtpSendLoading,
        isOtpSendSuccess,
        isOtpSendError,
        otpSendError,
        sendOtp,

        isOtpVerificationLoading,
        isOtpVerificationSuccess,
        isOtpVerificationError,
        otpVerificationError,
        optVerificationResponse,
        verifyOtp,

        isCompanyOtpVerificationLoading,
        isCompanyOtpVerificationSuccess,
        isCompanyOtpVerificationError,
        otpCompanyVerificationError,
        optCompanyVerificationResponse,
        verifyCompanyOtp,

        isCompanyRegisterLoading,
        isCompanyRegisterSuccess,
        isCompanyRegisterError,
        companyRegisterError,
        companyRegisterResponse,
        registerCompany,

        isCompanyLoginLoading,
        isCompanyLoginSuccess,
        isCompanyLoginError,
        companyLoginError,
        companyLoginResponse,
        companyLogin,
    };
}
