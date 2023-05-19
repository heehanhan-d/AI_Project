import os
current_dir = os.getcwd()
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

import torch
import torch.nn as nn
import torchvision.transforms as transforms
import json
import numpy as np
from constants import breeds
from PIL import Image

import ssl
ssl._create_default_https_context = ssl._create_unverified_context

breedsKr = breeds.breedsKr

def extract(input_image):
    if input_image == None:
        return "there's no image"

    ### 모델 로드
    # Define device
    device = torch.device("cpu")

    # Define hyperparameters
    num_classes = 120 # 품종 갯수 (분류할 클래스의 갯수)

    # Load pre-trained MobileNet model
    model = torch.hub.load('pytorch/vision:v0.9.0', 'resnet50', weights=True)

    # Replace the last fully-connected layer with a new one to fit our classification task
    num_ftrs = model.fc.in_features
    model.fc = nn.Linear(num_ftrs, num_classes)
    model = model.to(device)

    # 이미지 전처리 방식
    transform = transforms.Compose([
        transforms.Resize(224),
        transforms.ToTensor(),
    ])

    # 모델파일 입력 (pt or ckpt)
    pt_path = os.path.join(current_dir, 'aimodels/Cmatrix_ague_wandb_resnet50_64_0.001_30.pt')

    model = torch.load(pt_path,map_location=torch.device('cpu'))

    # 이미지 불러오기 및 전처리 (수정)
    image = Image.open(input_image)
    image = transform(image).unsqueeze(0).to(device)

    # 추론
    with torch.no_grad():
        output = model(image)
        tensor_score, tensor_breeds_idx= torch.topk(output.data, k=5)

        # 텐서값을 배열로 변환
        breeds_idx = np.array(tensor_breeds_idx)[0]
        score = np.array(tensor_score)[0]

        # 인덱스 넘버 품종명으로 변환
        breeds = list(map(lambda idx: breedsKr[idx], breeds_idx))
        return breeds