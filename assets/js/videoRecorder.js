const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

const startRecording = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        videoPreview.srcObject = stream;
        videoPreview.play();
        videoPreview.muted = true;
    } catch (error) {
        recordBtn.innerHTML = "😥 Can't record";
        recordBtn.removeEventListener(startRecording);
    }
};

function init() {
    recordBtn.addEventListener("click", startRecording);
}

if (recorderContainer) {
    init();
}
