export interface Dog {
    id: String, // 유기번호(desertionNo)
    state: String, // 상태(protectState)
    img_url: String, // 사진(popfile)
    found: {
        date: Date, // 접수일(happenDt) (YYYYMMDD)
        place: String, // 발견장소(happenPlace)
    }
    breeds?: String[], // 품종(kindCd)
    color: String, // 색상(colorCd)
    birth: Date, // 탄생 년도(age)
    weight: Number, // 체중(weight) (0(미상))
    sex: String, // 성별(sexCd) (F,M,Q(미상))
    neuter: String, // 중성화 여부(neuterYn) (Y,N,U(미상))
    memo?: String, // 특징(specialMark)
    notice: {
        code: String, // 공고번호(noticeNo)
        date_start: Date, // 공고시작일(noticeSdt) (YYYYMMDD)
        date_end: Date, // 공고종료일(noticeEdt) (YYYYMMDD)
    }
    carecenter: {
        name: String, // 보호소 이름(careNm)
        phone: String, // 보호소 전화번호(careTel)
        address: String, // 보호소 주소(careAddr)
    }
}