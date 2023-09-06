import {useOtpVerificationMutation, useSendOtpMutation} from '../../services/auth';

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
    };
}
