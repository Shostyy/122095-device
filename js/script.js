// Form

var writeUs = document.querySelector(".write-us-button");

var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");

var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var userName = feedbackPopup.querySelector("#name-field");
var userEmail = feedbackPopup.querySelector("#email-field");
var userLetter = feedbackPopup.querySelector("#letter-field");

var isStorageSupport = true;
var storageUserName = "";
var storageUserEmail = "";

try {
    storageUserName = localStorage.getItem("userName");
    storageUserEmail = localStorage.getItem("userEmail");
} catch (err) {
    isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");

    if (storageUserName) {
        userName.value = storageUserName;
        if (storageUserEmail) {
            userEmail.value = storageUserEmail;
            userLetter.focus();
        } else {
            userEmail.focus();
        }
    } else {
        userName.focus();
    }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userLetter.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("userName", userName.value);
            localStorage.setItem("userEmail", userEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (feedbackPopup.classList.contains("modal-show")) {
            feedbackPopup.classList.remove("modal-show");
            feedbackPopup.classList.remove("modal-error");
        }
    }
});


// Map

var mapLink = document.querySelector(".contacts-img-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});