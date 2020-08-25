const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;
const handleVideoData = (event) => {
    const { data: videoFile } = event;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile);
    link.download = `recorded-${Date.now()}.webm`;
    document.body.appendChild(link);
    link.click();
};

const startRecording = () => {
    videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start();
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.addEventListener("click", stopRecording);
};

const stopRecording = () => {
    videoRecorder.stop();
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.addEventListener("click", getVideo);
    recordBtn.innerHTML = "Start recording";
};

const getVideo = async () => {
    try {
        streamObject = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1920, height: 1080 },
        });
        videoPreview.srcObject = streamObject;
        videoPreview.play();
        videoPreview.muted = true;
        recordBtn.innerHTML = "Stop recording";
        startRecording(streamObject);
    } catch (error) {
        recordBtn.innerHTML = "😥 Can't record";
    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }
};

function init() {
    recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
    init();
}
