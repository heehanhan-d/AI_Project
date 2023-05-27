import axios from 'axios';
// import { BackServer } from '../Components/Common/Path';


export const FetchDog = async (id: string) => {
    try {
        const result = await axios.get(`http://kdt-ai6-team07.elicecoding.com:3001/underdogs/${id}`);
        return result.data;
    } catch(error) {
        throw Error('데이터 패치에 실패했습니다.')
    }
}
