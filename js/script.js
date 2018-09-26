// servicesSlider

var servicesButton = document.querySelectorAll(".services-button");
var deliveryButton = document.querySelector(".delivery-button");
var warrantyButton = document.querySelector(".warranty-button");
var creditButton = document.querySelector(".credit-button");

var servicesSlide = document.querySelectorAll(".services-slide");
var deliverySlide = document.querySelector(".delivery-slide");
var warrantySlide = document.querySelector(".warranty-slide");
var creditSlide = document.querySelector(".credit-slide");

deliveryButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    // sliderButton switch
    for (let i = 0; i < servicesButton.length; i++) {
        servicesButton[i].classList.remove("services-button-active");
    }
    deliveryButton.classList.add("services-button-active");

    // slide switch
    for (let i = 0; i < servicesSlide.length; i++) {
        servicesSlide[i].classList.remove("services-slide-active");
    }
    deliverySlide.classList.add("services-slide-active");
});

warrantyButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    // sliderButton switch
    for (let i = 0; i < servicesButton.length; i++) {
        servicesButton[i].classList.remove("services-button-active");
    }
    warrantyButton.classList.add("services-button-active");

    // slide switch
    for (let i = 0; i < servicesSlide.length; i++) {
        servicesSlide[i].classList.remove("services-slide-active");
    }
    warrantySlide.classList.add("services-slide-active");
});

creditButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    // sliderButton switch
    for (let i = 0; i < servicesButton.length; i++) {
        servicesButton[i].classList.remove("services-button-active");
    }
    creditButton.classList.add("services-button-active");

    // slide switch
    for (let i = 0; i < servicesSlide.length; i++) {
        servicesSlide[i].classList.remove("services-slide-active");
    }
    creditSlide.classList.add("services-slide-active");
});


// form

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


// map

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