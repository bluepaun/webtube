import axios from "axios";

const addCommentform = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteBtns = document.querySelectorAll(".jsCommentDeleteBtn");

const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (comment) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    commentList.prepend(li);
    increaseNumber();
};

const sendComment = async (comment) => {
    const videoId = window.location.href.split("/videos/")[1];

    const response = await axios({
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment,
        },
    });
    if (response.status === 200) {
        addComment(comment);
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    const commentInput = addCommentform.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
};

const deleteComment = async (event) => {
    const targetLi = event.target.parentNode;
    const { attributes: name } = targetLi.querySelector("span");
    const commentId = name[0].nodeValue;
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url: `/api/${videoId}/deletecomment`,
        method: "POST",
        data: {
            commentId,
        },
    });
    if (response.status === 200) {
        targetLi.remove();
        commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
    }
};

function init() {
    addCommentform.addEventListener("submit", handleSubmit);
    if (deleteBtns) {
        deleteBtns.forEach((e) => {
            e.addEventListener("click", deleteComment);
        });
    }
}

if (addCommentform) {
    init();
}
