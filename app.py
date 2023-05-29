from flask import Flask, jsonify, request
import requests
from PIL import Image
from io import BytesIO
from services import createmaindata
from services import extractbreeds
from flask_cors import CORS

app = Flask(__name__)

# cors 방지
CORS(app, resources={r'*': {'origins': ['http://kdt-ai6-team07.elicecoding.com','http://localhost:3000','http://localhost:3001']}})

@app.route("/")
def test():
    return jsonify("server open")

@app.route("/createMaindata", methods = ['GET','POST'])
def create_mainData():
    createmainData().createMainData()
    return "server generating maindata"

# 사용자가 이미지 검색하는 용도
@app.route("/breedsAI/<who>", methods = ['GET','POST'])
def extract_breeds(who):
    if request.method == 'GET':
        return jsonify("Post 로 요청하세요")
    elif request.method == 'POST':
        if who == "user":
            input_img = request.files['file']
            extractedBreeds = extractbreeds.extract(input_img)
            response = jsonify({
            "message": "품종 추출에 성공하여 5개의 품종을 반환합니다.",
            "data": extractedBreeds
            })
            return response
        elif who == "admin":
            # try:
            img_url = request.get_json()['img_url']
            response = requests.get(img_url)
            img_bytes = BytesIO(response.content)
            extractedBreeds = extractbreeds.extract(img_bytes)
            print('extractedBreeds : ', extractedBreeds)
            response = jsonify({
                "message": "품종 추출에 성공하여 5개의 품종을 반환합니다.",
                "data": list(extractedBreeds)
            })
            return response


if __name__ == "__main__":
    app.run('0.0.0.0', port=3002, debug=True)
