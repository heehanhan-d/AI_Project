import axios from 'axios';
import { Dog } from "../interface";

export const apiUrl = process.env.REACT_APP_API_URL

export const fetchDogList = async () => {
    try{ 
        const result = await axios.get<Dog[]>(`${apiUrl}/underdogs`);
        return result.data;
    } catch(e) {
        throw Error('데이터 패치에 실패했습니다.')
        console.error(e);
    }
    // console.log(apiUrl, 'apiUrl')
}