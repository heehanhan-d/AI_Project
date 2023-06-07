import os
import datetime
import requests
import pandas as pd
import json

# 순혈 품종명 로드
from constants import breeds
breeds_origin = breeds.breedsOrigin

# .env 파일 로드
from dotenv import load_dotenv
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
                'state' : '', # protect, notice
                'bgnde' : beginDay,
                'endde' : endDay,
                'pageNo' : 1,
                'numOfRows' : '100'
                }

        while True:
            req = requests.get(url, params=params)
            data = req.json()
            if not data['response']['body']['items']:
                break
            raw_data = pd.DataFrame(data['response']['body']['items']['item'])
            totalCount = data['response']['body']['totalCount']
            print(totalCount)
        
            # 데이터 전처리

            # 컬럼 정리
            columned_data = raw_data[['desertionNo', 'processState', 'popfile', 'happenPlace', 'kindCd', 'colorCd', 'age', 'weight', 'sexCd', 'neuterYn', 'specialMark', 'happenDt', 'noticeNo', 'noticeSdt', 'noticeEdt', 'careNm', 'careTel', 'careAddr']]

            # 품종 컬럼 정리 ('[개]' 제거)
            columned_data.loc[:, 'kindCd'] = columned_data['kindCd'].str.replace('\[개\] ', '', regex=True)

            # 나이 컬럼 정리 ('(년생)' 제거)
            columned_data.loc[:, 'age'] = columned_data['age'].str.replace('\(.*\)', '', regex=True).astype(int)

            # 체중 컬럼 정리 ('(Kg)' 제거)
            columned_data.loc[:, 'weight'] = columned_data['weight'].str.replace('\(Kg\)', '', regex=True).str.replace('~.*$', '', regex=True).str.replace('-.*$', '', regex=True).str.replace(',.*$', '', regex=True).str.replace('...*$', '', regex=True).str.replace("'", '').replace('.', '0').replace('', '0').astype(float)

            # 순혈 품종견 필터
            underdog_data = columned_data[~columned_data['kindCd'].isin(breeds_origin)]

            # 인덱스 정리
            underdog_data = underdog_data.reset_index(drop=True)

            # 데이터 전처리 완료

            # 백엔드 서버 업로드 요청
            headers = {"Content-Type" : "application/json"}
            localhost = "http://localhost:3001/underdogs/upload"
            rows = underdog_data.iterrows()
            objects = []
            for index, row in rows:
                obj = row.to_dict()
                objects.append(obj)
            payload = json.dumps(objects, ensure_ascii=False).encode('utf-8')
            response = requests.post(localhost, data=payload, headers=headers)
            if response.status_code == 201:
                print(params['pageNo'], "성공")
            else:
                print(params['pageNo'], "실패")   
            params['pageNo'] += 1
        
            # break

    getAbandondedAnimal()
