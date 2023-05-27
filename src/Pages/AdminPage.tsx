import React from 'react';
import styled from 'styled-components';
import { Body } from '../Components/Common/Layout';
import { HeaderLinkStyle } from '../Components/Common/Styles';
import { STATE_PATH } from '../Components/Common/Path';
import { FormManagement } from '../Components/Admin/FormManagementComponent';

export const AdminPage = () => {
    return(
        <>
            <FormManagement />
        </>
        );
    };

