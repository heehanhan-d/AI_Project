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
        const adminToken = localStorage.getItem('token');
        console.log('adminToken:', adminToken);
        if (adminToken) {
            fetchData(adminToken);
        } else {
            console.log('토큰이 없습니다.');
        }
    }, []);

    
    const fetchData = async (adminToken: string) => {
        try {
            const response = await axios.get('http://localhost:3001/auth/admin/visitrequest?limit=20&skip=0', {
                headers: {
                    Authorization: `Bearer ${adminToken}`
                }
            });
            // const response = await axios.get('http://kdt-ai6-team07.elicecoding.com:3001/auth/admin/visitrequest');
            const fetchedData = response.data;
            console.log('fetchedData:', fetchedData);
            const formDataList = fetchedData.data;
            console.log('formDataList:', formDataList);
            setFormDataList(formDataList);
            
        } catch (e) {
            console.error(e);
            setFormDataList([]);
        }
    };

    return (
        <>
            {/* <h1>Welcome, Admin!</h1>
            보호소 방문 신청 폼 전체를 확인할 수 있어야 해. */}
            <FormDiv>
                <h1>보호소 방문 예약 목록 조회</h1>
                <Table>
                    <thead>
                        <tr>
                            <Th>이름</Th>
                            <Th>전화번호</Th>
                            <Th>방문 날짜</Th>
                            <Th>방문 시간</Th>
                            <Th>언더독 ID</Th>
                            <Th>보호소 이름</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {formDataList.length > 0 ? (
                            formDataList.map((formData, index) => (
                                <tr key={index}>
                                    <Td>{formData.name}</Td>
                                    <Td>{formData.phone}</Td>
                                    <Td>{formData.when_day}</Td>
                                    <Td>{formData.when_time}</Td>
                                    <Td>{formData.dog_id}</Td>
                                    <Td>{formData.dog_careCenter_name}</Td>
                                    {/* <Td><img src={formData.dog_img_url} width='70px' height='70px' /></Td> */}
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
    padding: 10px 0;
    margin-top: 10px;
    font-family: 'UI';
    border: 5px solid ${Colors.sub};
    border-radius: 50px;
    align-items: start;
`

const Table = styled.table`
    width: 90%;
    border-collapse: collapse;
    margin: 30px auto;
`

const Th = styled.th`
    padding: 8px;
    text-align: center;
    background-color: ${Colors.sub};
    border-left: 1px dashed ${Colors.g};
    border-right: 1px dashed ${Colors.g};
    border-bottom: 1px solid ${Colors.g};
    font-family: 'Logo';
    font-size: 20px;
`

const Td = styled.td`
    padding: 8px;
    border-left: 1px dashed ${Colors.g};
    border-right: 1px dashed ${Colors.g};
    border-bottom: 1px solid ${Colors.g};
    font-family: 'Text';
    font-size: 18px;
`


const NoDataTd = styled.td`
    padding: 8px;
    text-align: center;
    color: ${Colors.s};
`

