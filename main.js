//eventos
var email = document.getElementById('email');
var nombre = document.getElementById('nombre');
var texto = document.getElementById('comentario');
var boton = document.getElementById('button');

//form.addEventListener("focus", myFocusFunction, true);
//form.addEventListener("focusout", myBlurFunction, true);

var status = "";

email.addEventListener("keyup", function () {

    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regexEmail.test(email.value)) {

        status = "yes";
        email.style.border = "3px solid #33FF6B";
        email.classList.remove("invalid");
        email.classList.add("valid");

    } else {

        status = "not";
        email.style.border = "3px solid #DD2C00";
        email.classList.remove("valid");
        email.classList.add("invalid");

    }
});

//add animacion sobre campos vacios
var envio = document.getElementById('button');
envio.addEventListener("click", (e) => {

    if (nombre.value === "") {

        nombre.classList.add("animation");

    } else if (email.value === "") {

        email.classList.add("animation");

    } else if (texto.value === "") {

        texto.classList.add("animation");
    }
});

//elimina animacion
nombre.addEventListener("animationend", (e) => {
    nombre.classList.remove("animation");
});

texto.addEventListener("animationend", (e) => {
    texto.classList.remove("animation");
});

email.addEventListener("animationend", (e) => {
    email.classList.remove("animation");
});

//focus sobre los campos
function myFocusFunction() {

    if (event.target !== boton) {
        event.target.style.background = "#fcffa8";
    }
}

function myBlurFunction() {
    event.target.style.background = "";
}

//evitar que se envie si el email no esta validado
form.addEventListener('submit', function (e) {

    if (status === "not") {
        email.classList.add("animation");
        e.preventDefault();
    } else if (status ==="yes"){
        setTimeout(function(){
            window.scrollTo(0,0);
        }, 1000);
        setTimeout(function(){
            swal("Mensaje", "Tu email ha sido enviado correctamente!", "success");
            document.getElementById("form").reset();
        }, 1500);
        e.preventDefault();
    }
});

//evento para el scrool
window.addEventListener("scroll", function () {

    var section = document.querySelector('.section2');
    var h1 = document.querySelector('.parallax2 h1');
    var h2 = document.querySelector('.parallax2 h2');

    var topPos = section.offsetTop - 600;
    var topwin = window.scrollY;

    console.log(topwin + " " + topPos);

    if (topwin >= topPos) {

        h1.classList.remove("ph1");
        h1.classList.add("animH1");

        h2.classList.remove("ph2");
        h2.classList.add("animH2");

    }

});

// SLIDER
let prev = document.getElementById("previous");
let next = document.getElementById("next");
let slider = document.getElementById("slider__view");
let sliderItem = document.getElementById("slider__item");

let numItem = document.querySelectorAll(".slider__item").length;
let widthSlider = sliderItem.offsetWidth * numItem;
let res2 = window.innerWidth - widthSlider;
var intvalue = Math.ceil(document.body.clientWidth / numItem);

prev.addEventListener('click', function () {
    moveSlider(1);

});

next.addEventListener('click', function () {
    moveSlider(-1);
});

let moveSlider = (direccion) => {

    let offsetLeft = slider.offsetLeft;
    let res = offsetLeft + (intvalue * direccion);

    console.log("offsetleft: ", res);

    if (res > 0) {
        slider.style.left = "0px";
        return;
    }

    if (res < res2) {
        slider.style.left = `${res2}px`;
        return;
    }

    slider.style.left = `${res}px`;
}

//modal slider
var imageDoom;
var modalClose = document.getElementById("modalClose");
var slidesModal = document.getElementById('slider__view');
var modalBg = document.getElementById("modalBg");
var modalBgImage = document.getElementById("imageM");

slidesModal.addEventListener("click", (e) => {

    imageDoom = event.target.src;
    showModal(true);
});

modalClose.addEventListener('click', function () {
    showModal(false);
    document.body.style.overflow = "initial";
});

var showModal = (showBool) => {

    modalBg.style.display = showBool ? "flex" : "none";
    modalBgImage.src = imageDoom;

    var position = window.scrollY;
    var heightModal = window.innerHeight;

    modalBg.style.top = position.toString() + "px";
    modalBg.style.height = heightModal.toString() + "px";
    document.body.style.overflow = "hidden";

};
