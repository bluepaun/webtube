import axios from "axios";

const addCommentform = document.getElementById("jsAddComment");

const sendComment = async (comment) => {
    const videoId = window.location.href.split("/videos/")[1];

    const response = await axios({
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment,
        },
    });
    console.log(response);
};

const handleSubmit = (event) => {
    event.preventDefault();
    const commentInput = addCommentform.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
};
function init() {
    addCommentform.addEventListener("submit", handleSubmit);
}

if (addCommentform) {
    init();
}
