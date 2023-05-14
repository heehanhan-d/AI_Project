import axios from 'axios';
import { Dog, DogApiResponse } from '../Components/common/interface';

export const apiUrl = process.env.REACT_APP_API_URL

export const FetchDogList = async (page: number, limit = 20) => {

    const skip = (page - 1) * limit;

    try {
        const result = await axios.get<DogApiResponse>(`${apiUrl}/underdogs?limit=${limit}&skip=${skip}`);
        return result.data;
    } catch(error) {
        throw Error('데이터 패치에 실패했습니다.')
    }
}

// export const FetchDogList = async () => {
//     try {
//         const result = await axios.get<Dog[]>(`${apiUrl}/underdogs`);
//         return result.data;
//     } catch(error) {
//         throw Error('데이터 패치에 실패했습니다.')
//     }
// }