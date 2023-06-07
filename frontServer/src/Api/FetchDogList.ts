import React from 'react';
import axios from 'axios';
import { Dog, DogApiResponse } from '../Components/Common/Interface';
import { BackServer } from '../Components/Common/Path';


export const FetchDogList = async (page: number, limit = 20) => {

    const skip = (page - 1) * limit;

    try {
        const result = await axios.get<DogApiResponse>(`${BackServer}/underdogs?limit=${limit}&skip=${skip}`);
        return result.data;
    } catch(error) {
        throw Error('데이터 패치에 실패했습니다.')
    }
}
