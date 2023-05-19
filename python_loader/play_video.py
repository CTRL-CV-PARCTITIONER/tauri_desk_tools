import cv2
import sys

def play_video(video_path):
    # 创建VideoCapture对象
    cap = cv2.VideoCapture(video_path)

    # 检查是否成功打开视频
    if not cap.isOpened():
        print("无法打开视频文件")
        return

    while True:
        # 读取视频帧
        ret, frame = cap.read()

        # 检查是否读取到帧
        if not ret:
            break

        # 在窗口中显示帧
        cv2.imshow("Video Player", frame)

        # 按下'q'键退出循环
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # 释放资源
    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    args = sys.argv
    print(args)
    
    # play_video(args)