import React, { useState, useEffect } from 'react';
import { Body } from '../Components/common/layout';
import FileUploadComponent from "../Components/AiSearch/FileUploadComponent";
import AiResultComponent from "../Components/AiSearch/AiResultComponent";



export const AiSearchPage = () => {
    return (
        <Body>
            <FileUploadComponent />
            <AiResultComponent />
        </Body>
    );
};
