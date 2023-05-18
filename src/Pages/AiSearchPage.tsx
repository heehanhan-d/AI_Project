import React, { useState, useEffect } from 'react';
import { Body } from '../Components/Common/Layout';
import FileUpload from '../Components/AiSearch/FileUploadComponent';
import AiResult from '../Components/AiSearch/AiResultComponent';

export const AiSearchPage = () => {
    return (
        <Body>
            <FileUpload />
            <AiResult items={[]} responseData={[]} />
        </Body>
    );
};
  
