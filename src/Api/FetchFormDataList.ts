import axios from 'axios';

export const fetchFormDataList = async () => {
    try {
        const response = await axios.get('http://kdt-ai6-team07.elicecoding.com:3001/admin/adopts');
        const formDataList = response.data;
        return formDataList;
    } catch (e) {
        console.error(e);
        return [];
    }
};