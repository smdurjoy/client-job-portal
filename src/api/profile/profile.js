import axios from "axios";
import {toastError} from "../../Helpers/Toaster";

export const fetchProfileInfo = async (workerId) => {
    try {
        const {data:{data}} = await axios.get(`/worker/details/${workerId}/`);
        return data;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}