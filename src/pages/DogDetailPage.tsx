import React, { useState, useEffect } from "react";

export const DogDetailPage = () => {
    const [shownAdoptInfo, setShownAdoptInfo] = useState(false);

    return <><div>상세 페이지 <button onClick={() => setShownAdoptInfo(true)}>입양하기</button></div>
    {shownAdoptInfo && <div>입양 관련 안내문</div>}
    </>;
}