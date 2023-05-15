import React from 'react';
import axios from 'axios';

export const ApiUrl = process.env.REACT_APP_API_URL

export const fetchDog = async (id: string) => {
    try {
        const result = await axios.get(`${ApiUrl}/underdogs/${id}`);
        result.data();
        return result;
    } catch(error) {
        console.error(error);
    }
}