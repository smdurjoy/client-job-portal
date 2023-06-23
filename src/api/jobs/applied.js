import axios from "axios";
import {toastError} from "../../Helpers/Toaster";

export const fetchAppliedCandidates = async (categoryId, jobId) => {
    const token = localStorage.getItem('auth-token');
    try {
        const {data: {data}} = await axios.get(`/company/job/applied/candidate/${categoryId}/${jobId}/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchShortlistedCandidates = async (categoryId, jobId) => {
    const token = localStorage.getItem('auth-token');
    try {
        const {data: {data}} = await axios.get(`/company/get/shortlisted/candidate/${categoryId}/${jobId}/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return data;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}