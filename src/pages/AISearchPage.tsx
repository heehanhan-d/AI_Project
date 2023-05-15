import React, { useState, useEffect } from 'react';
import { Body } from '../Components/Common/Layout';
import FileUploadComponent from "../Components/AiSearch/FileUpload";
import AiResultComponent from "../Components/AiSearch/AiResult";

export const AiSearchPage = () => {
    return (
        <Body>
            <FileUploadComponent />
            <AiResultComponent items={[]} responseData={[]} />
        </Body>
    );
};
  