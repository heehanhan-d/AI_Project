from flask import Flask, jsonify, request
import requests
from PIL import Image
from io import BytesIO
import createmaindata
import team07_MobileNet
from flask_cors import CORS
app = Flask(__name__)

CORS(app)
@app.route("/") # 파이썬 기본 서버 포트 5000
def test():
    return jsonify("server open")

@app.route("/createMaindata", methods = ['GET','POST'])
def create_mainData():
    createcreatemaindata.createMainData()
    return "server generating maindata"

# 사용자가 이미지 검색하는 용도
@app.route("/breedsAI/<who>", methods = ['GET','POST'])
def extract_breeds(who):
    if request.method == 'GET':
        return jsonify("Post 로 요청하세요")
    elif request.method == 'POST':
        if who == "user":
            input_img = request.files['file']
            extractedBreeds = team07_MobileNet.extract(input_img)
            return jsonify({
                "message": "품종 추출에 성공하여 5개의 품종을 반환합니다.",
                "data": extractedBreeds
            })
        elif who == "generate":
            img_url = request.get_json()['img_url']
            response = requests.get(img_url)
            img_bytes = BytesIO(response.content)
            input_img = img_bytes
            extractedBreeds = team07_MobileNet.extract(input_img)
            return jsonify({
                "message": "품종 추출에 성공하여 5개의 품종을 반환합니다.",
                "data": extractedBreeds
            })

if __name__ == "__main__":
    app.run()