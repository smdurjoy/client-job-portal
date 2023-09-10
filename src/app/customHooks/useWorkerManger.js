import {useApplyToJobMutation} from "../../services/worker";

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

    const applyToJob = async (job_id, worker_id) => {
        await createApplyToJobFunc({job_id, worker_id});
    };

    return {
        isApplyJobLoading,
        isApplyJobSuccess,
        isApplyJobError,
        applyJobError,
        applyToJob,
        applyJobResponse,
    };
}
