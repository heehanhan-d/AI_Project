import React from 'react';
import styled from 'styled-components';
import '../Common/Font.css';
import { FormManagement } from './FormManagementComponent';


export const Admin = () => {
    return (
        <>
            <p>관리자 페이지</p>
            <FormManagement />
        </>
    )
}

