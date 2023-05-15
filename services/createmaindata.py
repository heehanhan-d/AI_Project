from dotenv import load_dotenv
# .env 파일 로드하기
load_dotenv()

# 동물 데이터 받아오기
def createMainData():
    # 서울 공공데이터 포털(data.seoul.go.kr)에서 받은 인증키를 입력
    mykey = os.getenv("API_KEY")
    url = os.getenv("API_URL")
    today = datetime.date.today()
    beginDay = (today - datetime.timedelta(days=365)).strftime('%Y%m%d')
    endDay = today.strftime('%Y%m%d')

    # API 호출
    def getAbandondedAnimal():
        params = {
                'serviceKey' : mykey,
                '_type' : 'json',
                'upkind' : '417000',
                'state' : 'protect',
                'bgnde' : beginDay,
                'endde' : endDay,
                'pageNo' : 1,
                'numOfRows' : '100'
                }

        while True:
            req = requests.get(url, params=params)
            data = req.json()
            raw_data = pd.DataFrame(data['response']['body']['items']['item'])
            numOfRows = data['response']['body']['numOfRows']
            pageNo = data['response']['body']['pageNo']
            totalCount = data['response']['body']['totalCount']

            print("한페이지 갯수", numOfRows)
            print("현재 페이지", pageNo)
            print("전체 갯수", totalCount)

            if not data:
                break
            
            #데이터 전처리

            # 컬럼 정리
            columned_data = raw_data[['desertionNo', 'processState', 'popfile', 'happenPlace', 'kindCd', 'colorCd', 'age', 'weight', 'sexCd', 'neuterYn', 'specialMark', 'happenDt', 'noticeNo', 'noticeSdt', 'noticeEdt', 'careNm', 'careTel', 'careAddr']]

            # 품종 컬럼 정리 ('[개]' 제거)
            columned_data.loc[:, 'kindCd'] = columned_data['kindCd'].str.replace('\[개\] ', '', regex=True)

            # 나이 컬럼 정리 ('(년생)' 제거)
            columned_data.loc[:, 'age'] = columned_data['age'].str.replace('\(.*\)', '', regex=True).astype(int)

            # 체중 컬럼 정리 ('(Kg)' 제거)
            columned_data.loc[:, 'weight'] = columned_data['weight'].str.replace('\(Kg\)', '', regex=True).str.replace('~.*$', '', regex=True).str.replace('-.*$', '', regex=True).str.replace(',.*$', '', regex=True).str.replace('...*$', '', regex=True).str.replace("'", '').replace('', '0').astype(float)

            # 품종 컬럼 정리 (믹스견 품종 통일)
            underdogKindCode = ['믹스견', '엄마는치와와', '도사', '코카믹스', '장모치와와믹스견', '보더콜리 믹스', '치와와믹스견', '보도콜리 믹스', '말라뮤트 믹스', '리트리버 믹스', '프렌치불독믹스견', '혼종', '믹스']

            # 품종명 통일
            underdog_data = columned_data

            def replace_kindCode(x):
                if x in underdogKindCode:
                    return 'underdog'
                else:
                    return x

            underdog_data['kindCd'] = underdog_data['kindCd'].apply(replace_kindCode) # apply(함수) : 데이터 프레임의 요소에 함수를 적용하는 메서드

            # 믹스견만 도출
            underdog_data = underdog_data[underdog_data['kindCd'] == 'underdog']

            # 인덱스 정리
            underdog_data = underdog_data.reset_index(drop=True)

            print(underdog_data['kindCd'].unique())
            print("헐랭방구 만건중에 8천건이 비품종견이네;;;\n 비품종견(underdog)의 건수 : ", len(underdog_data))

            # 데이터 전처리 완료

            # 백엔드 서버 업로드 요청
            # 예ㅔㅔㅔㅔㅔㅔㅔ
            headers = {"Content-Type" : "application/json"}

            localhost = "http://localhost:3001/underdogs/upload"
            # BackEndServer = "http://58.233.19.133:3001/underdogs/upload"
            # EliceLAB = "http://183.96.52.165:3001"
            # EliceLAB = "http://183.96.52.165:3001/underdogs/upload"

            rows = underdog_data.iterrows()
            objects = []
            for index, row in rows:
                obj = row.to_dict()
                objects.append(obj)

            # payload = json.dumps({"data": underdog_data.to_json()})
            # sampleData = underdog_data.loc[0]
            # testPayload = json.dumps(sampleData.to_dict(), ensure_ascii=False).encode('utf-8')
            payload = json.dumps(objects, ensure_ascii=False).encode('utf-8')
            

            # response = requests.get(localhost)
            # response = requests.post(localhost, testPayload, headers=headers)
            response = requests.post(localhost, data=payload, headers=headers)

            print(response.status_code)
            if response.status_code == 201:
                print(params['pageNo'], "성공")
            else:
                print(params['pageNo'], "실패")   
            params['pageNo'] += 1
        
    getAbandondedAnimal()