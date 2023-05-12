import React, { useState, useEffect } from 'react';
import { Body } from '../Component/common/layout';
import FileUploadComponent from "../Component/AiSearch/FileUploadComponent";
import AiResultComponent from "../Component/AiSearch/AiResultComponent";



export const AiSearchPage = () => {
    return (
        <Body>
            <FileUploadComponent />
            <AiResultComponent />
        </Body>
    );
};
