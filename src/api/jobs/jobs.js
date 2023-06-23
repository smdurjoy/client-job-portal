import axios from "axios";
import {toastError} from "../../Helpers/Toaster";

const token = localStorage.getItem('auth-token');

export const fetchJobsByCategory = async (categoryId) => {
    try {
        const {data: {jobs}} = await axios.get(`/job/get/${categoryId}/`);
        return jobs;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchAllJobs = async () => {
    try {
        const {data: {jobs}} = await axios.get(`/job/all/`);
        return jobs;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchJobDescription = async (jobId) => {
    try {
        const {data: {job_details}} = await axios.get(`/job/details/${jobId}`);
        return job_details;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchWorkerShortlistedJobs = async (workerId) => {
    try {
        const {data: {data}} = await axios.get(`/worker/shortlist/job/${workerId}/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchWorkerAppliedJobs = async (workerId) => {
    try {
        const {data: {data}} = await axios.get(`/worker/applied/job/${workerId}/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchJobTypes = async () => {
    try {
        const {data: {data}} = await axios.get('/job/types/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data.map(type => {
            return {
                id: type.id,
                value: type.id,
                label: type.type_name,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchJobLevels = async () => {
    try {
        const {data: {data}} = await axios.get('/job/levels/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data.map(item => {
            return {
                id: item.id,
                value: item.id,
                label: item.option_name,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchEmploymentStatus = async () => {
    try {
        const {data: {data}} = await axios.get('/job/employment/status/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data.map(item => {
            return {
                id: item.id,
                value: item.id,
                label: item.status_name,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchJobWorkPlaces = async () => {
    try {
        const {data: {data}} = await axios.get('/job/work/places/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data.map(item => {
            return {
                id: item.id,
                value: item.id,
                label: item.work_place,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchJobBenefits = async () => {
    try {
        const {data: {data}} = await axios.get('/job/benefits/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data.map(item => {
            return {
                id: item.id,
                value: item.id,
                label: item.benefit_name,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchJobCvReceivingOptions = async () => {
    try {
        const {data: {data}} = await axios.get('/job/cv/receiving/option/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data.map(item => {
            return {
                id: item.id,
                value: item.id,
                label: item.option_name,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}