import axios from 'axios';
import { AiServer, BackServer } from '../Components/Common/Path';


export const FetchDog = async (id: string) => {
    try {
        const result = await axios.get(`${BackServer}/underdogs/${id}`);
        return result.data;
    } catch(error) {
        throw Error('데이터 패치에 실패했습니다.')
    }
}
