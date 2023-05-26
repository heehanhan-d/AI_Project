import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormDataType } from '../Common/Interface';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';
import '../Common/Font.css';

export const FormManagement: React.FC = () => {

    const [formDataList, setFormDataList] = useState<FormDataType[]>([]);
    const [selectedFormData, setSelectedFormData] = useState<FormDataType | null>(null);


    useEffect(() => {
        fetchData();
    }, []);

    // Mock 데이터 배열 생성
    const getMockFormDataList = (): FormDataType[] => {
        return [
            {
                name: '일번',
                phone: '010-1234-5678',
                when_day: '2023-05-30',
                when_time: '10:00'
            },
            {
                name: '이번',
                phone: '010-8765-4321',
                when_day: '2023-06-03',
                when_time: '18:00'
            },
            {
                name: '삼번',
                phone: '010-4321-8765',
                when_day: '2023-06-05',
                when_time: '13:00'
            }
        ];
    };
    
    const fetchData = async () => {
        try {
            const response = await axios.get('http://kdt-ai6-team07.elicecoding.com:3001/admin/adopts');
            const fetchedData = response.data;
            setFormDataList(fetchedData);
        } catch (e) {
            console.error(e);
            setFormDataList(getMockFormDataList());
            // setFormDataList([]);
        }
    };

    const handleFormSelect = (formData: FormDataType) => {
        setSelectedFormData(formData);
    }

    return (
        <>
            {/* <h1>Welcome, Admin!</h1>
            보호소 방문 신청 폼 전체를 확인할 수 있어야 해. */}
            <FormDiv>
                <h1>보호소 방문 예약 조회</h1>
                <Table>
                    <thead>
                        <tr>
                            <Th>이름</Th>
                            <Th>전화번호</Th>
                            <Th>방문 날짜</Th>
                            <Th>방문 시간</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {formDataList.length > 0 ? (
                            formDataList.map((formData, index) => (
                                <tr key={index} onClick={() => handleFormSelect(formData)}>
                                    <Td>{formData.name}</Td>
                                    <Td>{formData.phone}</Td>
                                    <Td>{formData.when_day}</Td>
                                    <Td>{formData.when_time}</Td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <NoDataTd>데이터가 없습니다.</NoDataTd>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </FormDiv>
        </>
    );
};

const FormDiv = styled.div`
    width: 60%;
    height: 450px;
    padding-top: 30px;
    margin-top: 60px;
    font-family: 'UI';
    border: 5px solid ${Colors.sub};
    border-radius: 50px;
    align-items: start;
`

const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
    margin: 30px auto;
`

const Th = styled.th`
    padding: 8px;
    text-align: center;
    background-color: ${Colors.sub};
    border-bottom: 1px solid ${Colors.g};
    font-family: 'Logo';
    font-size: 20px;
`

const Td = styled.td`
    padding: 8px;
    border-bottom: 1px solid ${Colors.g};
    font-family: 'Text';
    font-size: 18px;
`

const NoDataTd = styled.td`
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid ${Colors.g};
    color: ${Colors.s};
`

