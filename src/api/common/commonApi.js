import axios from "axios";
import {toastError} from "../../Helpers/Toaster";

export const fetchCountries = async () => {
    try {
        const {data: {counties}} = await axios.get('/common/countries/');
        return counties.map(country => {
            return {
                id: country.id,
                label: country.country_name
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchCategories = async () => {
    try {
        const {data: {job_categories}} = await axios.get('/job/categories');
        return job_categories.map(category => {
            return {
                id: category.id,
                label: category.category_name,
                category_icon: category.category_icon,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}