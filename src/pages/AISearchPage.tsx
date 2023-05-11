import React, { useState, useEffect } from 'react';
import { Body } from '../components/common/layout';
import FileUploadComponent from "../components/AISearch/FileUploadComponent";
import AIResultComponent from "../components/AISearch/AIResultComponent";



export const AISearchPage = () => {
    return (
        <Body>
            <FileUploadComponent />
            <AIResultComponent />
        </Body>
    );
};
