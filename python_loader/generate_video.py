#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Render multiview image to video.
"""
import sys
import cv2
import numpy as np
import os
from tqdm import tqdm


def main(args):
    # 定义视频的宽度、高度、帧率
    width = args["video_width"]
    height = args["video_height"]
    fps = args["video_fps"]
    img_save_root = args["img_save_root"]
    video_save_path = args["video_save_path"]

    # 创建 VideoWriter 对象
    fourcc = cv2.VideoWriter_fourcc('m', 'p', '4', 'v')
    video_writer = cv2.VideoWriter(f"{video_save_path}/gradient_video.mp4", fourcc, fps, (width, height))

    # 生成渐变图像帧并写入视频
    for img_name in tqdm(os.listdir(img_save_root)):
        img_path = os.path.join(img_save_root, img_name)
        frame = cv2.imread(img_path)
        # 写入帧到视频
        video_writer.write(frame.astype('uint8'))

    # 释放资源
    video_writer.release()


if __name__ == "__main__":
    args = eval(sys.argv[2])
    main(args)

