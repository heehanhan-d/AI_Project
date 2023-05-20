import React, { useState, useEffect } from 'react';
import { Body } from '../Components/Common/Layout';
import FileUpload from '../Components/AiSearch/FileUploadComponent';
import Ai from '../Components/AiSearch/AiComponent';
import AiResult from '../Components/AiSearch/AiResultComponent';

export const AiSearchPage = () => {
    return (
        <>
            <Ai />
            {/* <AiResult items={items} responseData={responseData} /> */}
        </>
    );
};
  
