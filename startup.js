// navbar

btnid = document.getElementById("btn");
linksid = document.getElementById("links");
closebtnid = document.getElementById("closebtn");
bodyid = document.getElementById("body");
logoid = document.getElementById("logo");
containerid = document.getElementsByClassName("container")[0];

btnid.addEventListener('click', open);
closebtnid.addEventListener('click', close);

function open() {
    linksid.style.display = "block";
    btnid.style.display = "none";
    logoid.style.display = "block";
    closebtnid.style.display = "block";

    containerid.style.transition = "width 0.5s";
    containerid.style.width = "45vw";
    bodyid.classList.add("blur");

}

function close() {

    linksid.style.display = "none";
    closebtnid.style.display = "none";
    logoid.style.display = "none";
    btnid.style.display = "flex";
    containerid.style.transition = "width 0.5s"
    containerid.style.width = "55px";
    bodyid.classList.remove("blur");


}

//modal

let images = [
    ["mic", "images/mic.jpg"],
    ["phone", "images/phone.jpg"],
    ["drone", "images/drone.jpg"],
    ["speaker", "images/speaker.jpg"],
    ["ipad", "images/ipad.jpg"],
    ["camera", "images/camera.jpg"],
    ["typewritter", "images/typewriter.jpg"],
    ["old speaker", "images/oldspeaker.jpg"]
];

let modalid = document.querySelector(".modal");
let pic_in_modal_id = document.querySelector("#pic_in_modal");
let textid = document.querySelector("#text");

function openmodal(position) {
    modalid.style.display = "block";
    pic_in_modal_id.src = images[position][1];
    textid.innerHTML = images[position][0];

}

function closemodal() {
    modalid.style.display = "none";

}

// send message modal 

message_modalid = document.getElementById("message_modal");

function open_send_modal() {
    message_modalid.style.display = "block";
}

function close_send_modal() {
    message_modalid.style.display = "none";

}