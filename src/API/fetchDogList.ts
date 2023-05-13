import axios from 'axios';
import { Dog } from '../Component/common/interface';

export const apiUrl = process.env.REACT_APP_API_URL

export const FetchDogList = async () => {
    try {
        const result = await axios.get<Dog[]>(`${apiUrl}/underdogs`);
        return result.data;
    } catch(error) {
        throw Error('데이터 패치에 실패했습니다.')
    }
}
