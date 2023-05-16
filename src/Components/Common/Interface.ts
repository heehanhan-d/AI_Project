import React from 'react';

export interface Dog {
    id: string, // 유기번호(desertionNo)
    state: string, // 상태(protectState)
    img_url: string, // 사진(popfile)
    found: {
        date: Date, // 접수일(happenDt) (YYYYMMDD)
        place: string, // 발견장소(happenPlace)
    }
    breeds?: string[], // 품종(kindCd)
    color: string, // 색상(colorCd)
    birth: Date, // 탄생 년도(age)
    weight: number, // 체중(weight) (0(미상))
    sex: string, // 성별(sexCd) (F,M,Q(미상))
    neuter: string, // 중성화 여부(neuterYn) (Y,N,U(미상))
    memo?: string, // 특징(specialMark)
    notice: {
        code: string, // 공고번호(noticeNo)
        date_start: Date, // 공고시작일(noticeSdt) (YYYYMMDD)
        date_end: Date, // 공고종료일(noticeEdt) (YYYYMMDD)
    }
    carecenter?: {
        name?: string, // 보호소 이름(careNm)
        phone: string, // 보호소 전화번호(careTel)
        address: string, // 보호소 주소(careAddr)
    }
}

export interface StyledPictureInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
  
export interface DogApiResponse {
    message: string;
    data: Dog[];
}

export interface DogListProps {
    dogList: Dog[];
};
  
export interface ResponseData {
    data: string[];
    message: string;
}

export interface AiResultProps {
    items: string[];
    responseData: string[];
}

export interface Dropdownprops {
    options: string[];
    selectedItem: string;
    onSelect: (selectedItem: string) => void;
};

// swiper
export interface SliderProps {
    dogList: string[];
    slidesPerView: number;
}
