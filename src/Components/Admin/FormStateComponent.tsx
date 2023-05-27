import React from 'react';
import styled from 'styled-components';
import { Body } from '../../Components/Common/Layout';
import { Colors, HeaderLinkStyle } from '../../Components/Common/Styles';
import { ADMIN_PATH } from '../../Components/Common/Path';
import { FormManagement } from '../../Components/Admin/FormManagementComponent';
import { CHECK_PATH } from '../Common/Path';

export const FormState = () => {
    return(
        <>
            <FormDiv>
            </FormDiv>
        </>
        );
    };


const HeaderLink = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 100px 200px 1550px;
    height: 40px;
    justify-content: start;
    text-align: start;
    font-family: 'UI';
    font-size: 18px;
    font-weight: 700;
`

const FormDiv = styled.div`
    width: 60%;
    height: 470px;
    padding: 10px 0;
    margin-top: 10px;
    font-family: 'UI';
    border: 5px solid ${Colors.sub};
    border-radius: 50px;
    align-items: start;
`