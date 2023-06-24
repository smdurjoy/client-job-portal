import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
    },
})

export default instance;