import axios from "axios";
import { Dog } from "../interface";

const apiUrl = process.env.REACT_APP_API_URL

export const fetchDog = async (id: string) => {
    try{ 
        const result = await axios.get<Dog[]>(`${apiUrl}/underdogs/${id}`)
        return result.data;
    } catch(e) {
        throw Error('데이터 패치에 실패했습니다.')
        console.error(e);
    }
    // console.log(apiUrl, 'apiUrl')
}