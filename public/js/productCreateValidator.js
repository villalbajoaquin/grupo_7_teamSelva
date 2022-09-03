let formulario = document.querySelector("form");
let inputName = document.querySelector("#name");
let inputDate = document.querySelector("#date");
let inputTime = document.querySelector("#time");
let inputTickets = document.querySelector("#tickets");
let inputPrice = document.querySelector("#price");
let inputImage = document.querySelector("#imgsrc");
let validExtensions = [".jpg", ".jpeg", ".png", ".gif"];
let ulErrores = document.querySelector("#errores");

inputName.focus();

let arrayInput = [inputName, inputDate, inputTime, inputTickets, inputPrice];

formulario.addEventListener("submit", function(e) {
    let errores = 0;
    ulErrores.innerHTML = ""
    arrayInput.forEach(function(input){
        input.nextElementSibling.innerHTML = ""
        if((input.value.length == 0) || (input.value == " ")){
            input.classList.add("is-invalid");
            errores++;
            ulErrores.innerHTML += `<li>El campo ${input.dataset.nombre} no puede estar vacío</li>`;
            input.nextElementSibling.innerHTML = "El campo no puede estar vacío";
            return;
        }

        if(input.value != ""){
            input.classList.remove("is-invalid");
            input.nextElementSibling.innerHTML = ""
        }
        
        if((input.dataset.nombre == "tickets" || input.dataset.nombre == "price")  && (input.value < 10 || input.value > 999999)){
            input.classList.add("is-invalid");
            errores++;
            ulErrores.innerHTML += `<li>El valor del campo ${input.dataset.nombre} debe estar entre 10 y 999.999</li>`;
            input.nextElementSibling.innerHTML = "El valor ingresado debe estar entre 10 y 999.999";
        }
        
        if((input.dataset.nombre == "Price")  && (input.value < 60 || input.value > 360)){
            input.classList.add("is-invalid");
            errores++;
            ulErrores.innerHTML += `<li>El valor del campo ${input.dataset.nombre} debe estar entre 60 y 360</li>`;
            input.nextElementSibling.innerHTML = "El valor ingresado debe estar entre 60 y 360";
        }
        
    });

    if(errores > 0){
        e.preventDefault();
        ulErrores.classList.add("alert-warning");
    }
});

arrayInput.forEach(function(input){

    input.addEventListener("blur", function() {
        if(input.value == "") {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            input.nextElementSibling.innerHTML = "El campo no puede estar vacío";
        }
        if(input.value != ""){
            input.classList.remove("is-invalid");
            input.classList.add("is-valid")
            input.nextElementSibling.innerHTML = "";
        }
        if((input.dataset.nombre == "Time" || input.dataset.nombre == "Date")  && (input.value < 0 || input.value >10)){
            input.classList.add("is-invalid");
            input.classList.remove("is-valid")
            input.nextElementSibling.innerHTML = "El valor ingresado debe estar entre 0 y 10";
        }
        
        if((input.dataset.nombre == "price")  && (input.value < 60 || input.value > 360)){
            input.classList.add("is-invalid");
            input.classList.remove("is-valid")
            input.nextElementSibling.innerHTML = "El valor ingresado debe estar entre 60 y 360";
        }

    })
});