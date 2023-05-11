import torch
import torch.nn as nn
import torchvision.transforms as transforms
import os
import json
import numpy as np
import enum_breeds
from PIL import Image

import ssl
ssl._create_default_https_context = ssl._create_unverified_context

def extract(input_image):
    if input_image == None:
        return "there's no image"

    ## 인풋 이미지가 이미지 그자체인지, (사용자 입력)
    ## 이미지 링크인지 확인 후  분기하여 링크면 불러와야함. (메인 데이터 전처리용)

    # Define device
    device = torch.device("cpu")

    # Define hyperparameters
    num_classes = 120 # 품종 갯수 (분류할 클래스의 갯수)

    # Load pre-trained MobileNet model
    model = torch.hub.load('pytorch/vision:v0.9.0', 'mobilenet_v2', weights=True)

    # Replace the last fully-connected layer with a new one to fit our classification task
    num_ftrs = model.classifier[-1].in_features 
    model.classifier[-1] = nn.Linear(num_ftrs, num_classes)
    model = model.to(device)

    # 이미지 전처리 방식
    transform = transforms.Compose([
        transforms.Resize(224),
        transforms.ToTensor(),
    ])

    # 모델 로드 (pt or ckpt)

    ## 로컬패쓰 -> 배포주소 패쓰로 변경
    ckpt_path = '/Users/jeongjong10/Desktop/Computer Science.nosync/Alice_AI_note/project/7team/pythonServer/mobilenet_32_0.001_30.ckpt'
    pt_path = '/Users/jeongjong10/Desktop/Computer Science.nosync/Alice_AI_note/project/7team/pythonServer/mobilenet_64_0.01_20.pt'

    # model = torch.load(pt_path,map_location=torch.device('cpu'))
    model.load_state_dict(torch.load(ckpt_path, map_location=torch.device('cpu')))

    # 이미지 불러오기 및 전처리 (수정)
    image = Image.open(input_image)
    image = transform(image).unsqueeze(0).to(device)

    # 추론
    with torch.no_grad():
        model.eval()
        output = model(image)
        tensor_score, tensor_breeds_idx= torch.topk(output.data, k=5)

        # 텐서값을 배열로 변환
        breeds_idx = np.array(tensor_breeds_idx)[0]
        score = np.array(tensor_score)[0]

        # 인덱스 넘버 품종명으로 변환
        breeds = list(map(lambda idx: enum_breeds.breeds[idx], breeds_idx))

        # result = {}
        # for i in range(len(breeds)):
        #     result[breeds[i]] = float(score[i])
        # return json.dumps(result)
        return breeds