import axios from 'axios';
import { Dog } from '../interface';

export const apiUrl = process.env.REACT_APP_API_URL

// 함수명은 파일명과 동일하게 하는 것이 좋음. 함수명 중요!
export const fetchDogList = async () => {
    try {
        // get generic에 반환되는 데이터를 넣어주면 에러발생 X
        const result = await axios.get<Dog[]>(`${apiUrl}/underdogs`);
        // result.data();
        return result.data;
    } catch(error) {
        throw Error('데이터 패치에 실패했습니다.')
        console.error(error);
    }
    // console.log(apiUrl, 'apiUrl')
}
