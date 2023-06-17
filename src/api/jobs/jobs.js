import axios from "axios";
import {toastError} from "../../Helpers/Toaster";

export const fetchJobsByCategory = async (categoryId) => {
    try {
        const {data: {jobs}} = await axios.get(`/job/get/${categoryId}/`);
        return jobs;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}