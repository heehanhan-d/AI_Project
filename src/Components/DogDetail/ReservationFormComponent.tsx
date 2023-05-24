import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components';
import { Colors } from '../Common/Styles';
import { CenterRef } from '../Common/Ref';
import { AiServer, BackServer } from '../Common/Path';
import axios, { AxiosError } from 'axios';
import { FetchDog } from '../../Api/FetchDog';
import { Dog } from '../Common/Interface';

export default function ReservationForm() {
    
  const [isModalOpen, setModalOpen] = useState(false);
  
  const [responseData, setResponseData] = useState('');

  const [dog, setDog] = useState<Dog | null>(null);
  const { id } = useParams<{id:string}>();

  useEffect(() => {
      const handleFetchDog = async () => {
        try {
          if (id){
            const response = await FetchDog(id);
            if (response) {
              setDog(response.data)
              console.log(response.data);
            } else {
              throw new Error('데이터 패치에 실패했습니다.');
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      // API 호출 함수 실행
      handleFetchDog();
    }, [id]);

    const handleSubmit = async (event: any) => {
      
      setModalOpen(true);
        event.preventDefault();
  
      if (dog) {
        // 폼 데이터 가져오기
        const formData = {
          dog_id: dog.id,
          name: event.target.name.value,
          phone: event.target.phone.value,
          when_day: event.target.date.value,
          when_time: event.target.time.value,
        };

        try {
          // 서버에 POST 요청 보내기
          const response = await axios.post(`${BackServer}/underdogs/visitrequest`, formData);

          // 응답 처리
          console.log(response.data);
          const responseData = response.data;
      
          setResponseData(responseData);

        } catch (e) {
          // 오류 처리
          const error = e as AxiosError;
          console.error(error.response?.data || error.message);
        }
      } 
    }; 
    
    const closeModal = () => {
      setModalOpen(false);
      window.scrollTo(0, 0);
      };
  
    return (
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">이름</Label>
            <Input type="text" id="name" required />
          </FormGroup>
        <FormGroup>
            <Label htmlFor="phone">전화번호</Label>
            <Input type="phone" id="phone" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="date">방문 날짜</Label>
            <Input type="date" id="date" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="time">방문 시간</Label>
            <Input type="time" id="time" required />
          </FormGroup>
          <Button type="submit">보호소 방문 신청하기</Button>
            </form>
        {isModalOpen && (
        <Modal>
            <CenterRef>
            <ModalContent>
                <h1>보호소 방문 신청이 완료되었습니다!</h1><br />
              <p>보호소 방문 예약 확정 후 안내드리겠습니다.</p>
              <ModalButton onClick={closeModal}>닫기</ModalButton>
            </ModalContent>
              </CenterRef>
        </Modal>
      )}
      </FormContainer>
    );
  }
  

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Logo';
  font-size: 20px;
  margin-bottom: 100px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label<any>`
  margin-bottom: 0.5rem;
`;

const Input = styled.input<{ type: string, id: string, required: boolean}>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Text';
  font-size: 20px;
`;

const Button = styled.button<any>`
  padding: 10px 50px;
  background-color: ${Colors.footer};
  color: ${Colors.w};
  border: none;
  border-radius: 300px;
  cursor: pointer;
  font-family: 'Logo';
  font-size: 20px;
  margin-top: 50px;
`;

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${Colors.w};
    font-family: "Text";
    font-size: 20px;
    bottom: 100px;
    // margin-top: 200px;
    // margin-bottom: 250px;
`;

const ModalContent = styled.div`
    background-color: ${Colors.w};
    padding-bottom: 20px;
    border-radius: 5px;
`;


const ModalButton = styled(Button)`
    margin-top: 10px;
    padding: 12px 24px;
    background-color: ${Colors.main};
    color: ${Colors.w};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Logo";
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
`;