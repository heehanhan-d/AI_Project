import axios from 'axios';

export const apiUrl = process.env.REACT_APP_API_URL

// 함수명은 파일명과 동일하게 하는 것이 좋음. 함수명 중요!
export const FetchDog = async (id: string) => {
    try {
        const result = await axios.get(`${apiUrl}/underdogs/${id}`);
        return result.data;
    } catch(error) {
        throw Error('데이터 패치에 실패했습니다.')
    }
    // console.log(apiUrl, 'apiUrl')
}
