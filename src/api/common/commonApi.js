import axios from "../axios-configure";
import {toastError} from "../../Helpers/Toaster";

export const fetchCountries = async () => {
    try {
        const {data: {counties}} = await axios.get('/common/countries/');
        return counties.map(country => {
            return {
                id: country.id,
                value: country.id,
                label: country.country_name
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchStates = async (countryId) => {
    try {
        const {data: {states}} = await axios.get(`/common/states/${countryId}/`);
        return states.map(state => {
            return {
                id: state.id,
                value: state.id,
                label: state.state_name
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchCities = async (countryId) => {
    try {
        const {data: {cities}} = await axios.get(`/common/cities/${countryId}/`);
        return cities.map(city => {
            return {
                id: city.id,
                value: city.id,
                label: city.city_name
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchAreas = async (countryId) => {
    try {
        const {data: {areas}} = await axios.get(`/common/areas/${countryId}/`);
        return areas.map(area => {
            return {
                id: area.id,
                value: area.id,
                label: area.area_name
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchCategories = async () => {
    try {
        const {data: {job_categories}} = await axios.get('/job/categories/');
        return job_categories.map(category => {
            return {
                id: category.id,
                value: category.id,
                label: category.category_name,
                category_icon: category.category_icon,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchDegrees = async () => {
    try {
        const {data: {areas}} = await axios.get('/common/degrees/');
        return areas.map(degree => {
            return {
                id: degree.id,
                value: degree.id,
                label: degree.degree_name,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}

export const fetchAllIndustries = async () => {
    try {
        const {data: {industries}} = await axios.get('/company/all/industry/');
        return industries.map(industry => {
            return {
                id: industry.id,
                value: industry.id,
                label: industry.industry_name,
            }
        })
    } catch (e) {
        toastError('Something Went Wrong!');
    }
}
