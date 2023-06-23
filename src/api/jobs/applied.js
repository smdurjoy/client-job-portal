import axios from "axios";
import {toastError} from "../../Helpers/Toaster";

const token = localStorage.getItem('auth-token');

export const fetchAppliedCandidates = async (categoryId, jobId) => {
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