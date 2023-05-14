import React from 'react';
import styled from "styled-components";
import ServiceComponent from "../Components/About/ServiceComponent";

export const AboutPage = () => {
    return(
    <AboutDiv>
        <ServiceComponent />
    </AboutDiv>
    );
};


const AboutDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

