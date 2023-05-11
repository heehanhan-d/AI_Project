import axios from 'axios';

export {}

export const apiUrl = process.env.REACT_APP_API_URL

// 함수명은 파일명과 동일하게 하는 것이 좋음. 함수명 중요!
export const fetchDog = async (id: string) => {
    try {
        const result = await axios.get(`${apiUrl}/underdogs/${id}`);
        result.data();
        return result;
    } catch(error) {
        console.error(error);
    }
    // console.log(apiUrl, 'apiUrl')
}
