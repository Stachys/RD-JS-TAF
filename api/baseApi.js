import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const defaultOptions = {
    baseURL: 'https://api.getpostman.com/',
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.POSTMAN_API_KEY,
    },
};

export default axios.create(defaultOptions);
