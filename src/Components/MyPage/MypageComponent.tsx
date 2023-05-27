import React, { useState } from 'react';
import { ReservationHistory } from './ReservationHistoryComponent';

export const MyPage = () => {
    return (
        <>
            <h1>마이페이지</h1>
            <ReservationHistory />
        </>
    )
}