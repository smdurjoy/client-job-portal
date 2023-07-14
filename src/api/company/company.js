import axios from "../axios-configure";
import {toastError} from "../../Helpers/Toaster";

export const fetchCompanyProfileInfo = async (companyId) => {
    try {
        const {data: {data}} = await axios.get(`/company/details/${companyId}/`);
        return data;
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}