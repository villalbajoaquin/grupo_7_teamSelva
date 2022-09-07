window.addEventListener('load', () => {
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

    formulario.addEventListener("submit", function (e) {
        let errores = 0;
        ulErrores.innerHTML = ""
        arrayInput.forEach(function (input) {
            input.nextElementSibling.innerHTML = ""
            if ((input.value.length == 0) || (input.value == " ")) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El campo ${input.dataset.nombre} no puede estar vacío</li>`;
                input.nextElementSibling.innerHTML = "El campo no puede estar vacío";
                return;
            }

            if (input.value != "") {
                input.classList.remove("is-invalid");
                input.nextElementSibling.innerHTML = ""
            }

            if ((input.dataset.nombre == "name") && (input.value.length > 60)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El nombre no puede ser de más de 60 caracteres</li>`;
                input.nextElementSibling.innerHTML = "El largo del nombre no puede ser tan largo";
            }

            if ((input.dataset.nombre == "name") && (input.value.length < 5)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El nombre no puede ser de menor a 5 caracteres</li>`;
                input.nextElementSibling.innerHTML = "El largo del nombre no puede ser tan corto";
            }

            if ((input.dataset.nombre == "tickets" || input.dataset.nombre == "price") && (input.value < 10 || input.value > 999999)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El valor del campo ${input.dataset.nombre} debe estar entre 10 y 999.999</li>`;
                input.nextElementSibling.innerHTML = "El valor ingresado debe estar entre 10 y 999.999";
            }

        });

        if (inputImage.value != "") {
            let extFile = inputImage.value.split('.').pop();
            if (validExtensions.includes(extFile) == false) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El archivo del campo imagen debe ser un .jpeg, .jpg, .png y .gif</li>`;
                input.nextElementSibling.innerHTML = "Solo de admiten archivos .jpeg, .jpg, .png y .gif";
            };
        }

        if (errores > 0) {
            e.preventDefault();
            ulErrores.classList.add("alert-warning");
        }
    });

    arrayInput.forEach(function (input) {

        input.addEventListener("blur", function () {
            if ((input.value == "") || (input.value == " ")) {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
                input.nextElementSibling.innerHTML = "El campo no puede estar vacío";
            }
            if (input.value != "") {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "";
            }

            if ((input.dataset.nombre == "name") && (input.value.length > 60)) {
                input.classList.add("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "El largo del nombre no puede ser tan largo";
            }

            if ((input.dataset.nombre == "name") && (input.value.length < 5)) {
                input.classList.add("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "El largo del nombre no puede ser tan corto";
            }

            if ((input.dataset.nombre == "tickets" || input.dataset.nombre == "price") && (input.value < 10 || input.value > 999999)) {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid")
                input.nextElementSibling.innerHTML = "El valor ingresado debe estar entre 10 y 999.999";
            }

            if ((input.dataset.nombre == "imgsrc")) {
                let extFile = fimg.value.split('.').pop();
                if (validExtensions.includes(extFile) == false) {
                    input.classList.add("is-invalid");
                    input.classList.remove("is-valid");
                    input.nextElementSibling.innerHTML = "Solo de admiten archivos .jpeg, .jpg, .png y .gif";
                };
            }
        })
    });

    inputImage.addEventListener("blur", function () {
        if (inputImage.value != "") {
            let extFile = inputImage.value.split('.').pop();
            if (validExtensions.includes(extFile) == false) {
                input.classList.add("is-invalid");
                ulErrores.innerHTML += `<li>El archivo del campo imagen debe ser un .jpeg, .jpg, .png y .gif</li>`;
                input.nextElementSibling.innerHTML = "Solo de admiten archivos .jpeg, .jpg, .png y .gif";
            };
        }
    });
});