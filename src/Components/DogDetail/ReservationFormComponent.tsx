import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, Modal, ModalContent, ModalButton } from '../Common/Styles';
import { CenterRef, ResultRef } from '../Common/Ref';

export default function ReservationForm() {
    
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSubmit = (event: any) => {
      
        setModalOpen(true);
        event.preventDefault();
      // 폼 데이터 처리 로직 추가
    };
    
    const closeModal = () => {
        setModalOpen(false);
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
