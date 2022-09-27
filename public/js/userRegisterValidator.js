window.addEventListener('load', () => {
    let formulario = document.querySelector("form");
    let inputFirstName = document.querySelector("#firstname");
    let inputLastName = document.querySelector("#lastname");
    let inputEmail = document.querySelector("#email");
    let inputPassword = document.querySelector("#password");
    let inputPasswordRe = document.querySelector("#passwordRe");
    let inputImage = document.querySelector("#avatar");
    let validExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    let ulErrores = document.querySelector("#errores");

    inputFirstName.focus();

    let arrayInput = [inputFirstName, inputLastName, inputEmail, inputPassword, inputPasswordRe, inputImage];

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

            if ((input.dataset.nombre == "firstname" || input.dataset.nombre == "lastname") && (input.value.length > 60)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El campo no puede ser de más de 60 caracteres</li>`;
                input.nextElementSibling.innerHTML = "El largo del campo no puede ser tan largo";
            }

            if ((input.dataset.nombre == "firstname" || input.dataset.nombre == "lastname") && (input.value.length < 3)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El campo no puede ser de menor a 3 caracteres</li>`;
                input.nextElementSibling.innerHTML = "El largo del campo no puede ser tan corto";
            }

            if ((input.dataset.nombre == "email") && (input.value.includes('@'))) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El valor del campo ${input.dataset.nombre} no es valido</li>`;
                input.nextElementSibling.innerHTML = "El valor ingresado es invalido";
            }

            if ((input.dataset.nombre == "password" || input.dataset.nombre == "passwordRe") && (input.value.length > 60)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>La contraseña no puede ser de más de 60 caracteres</li>`;
                input.nextElementSibling.innerHTML = "El largo de la contraseña no puede ser tan largo";
            }

            if ((input.dataset.nombre == "password" || input.dataset.nombre == "passwordRe") && (input.value.length <= 8)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>La cantraseña no puede ser de menor a 8 caracteres</li>`;
                input.nextElementSibling.innerHTML = "El largo de la contraseña no puede ser tan corto";
            }

            if ((input.dataset.nombre == "avatar")) {
                let extFile = input.value.split('.').pop();
                if (validExtensions.includes(extFile) == false) {
                    input.classList.add("is-invalid");
                    errores++;
                    ulErrores.innerHTML += `<li>El archivo del campo ${input.dataset.nombre} debe ser un .jpeg, .jpg, .png y .gif</li>`;
                    input.nextElementSibling.innerHTML = "Solo de admiten archivos .jpeg, .jpg, .png y .gif";
                };
            }

        });

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
                input.nextElementSibling.innerHTML = "Este campo no puede estar vacío";
            }
            if (input.value != "") {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "";
            }

            if ((input.dataset.nombre == "firstname") || (input.dataset.nombre == "lastname") && (input.value.length > 60)) {
                input.classList.add("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "El largo del campo no puede ser tan largo";
            }

            if ((input.dataset.nombre == "firstname") || (input.dataset.nombre == "lastname") && (input.value.length < 3)) {
                input.classList.add("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "El largo del campo no puede ser tan corto";
            }

            if ((input.dataset.nombre == "email") && (input.value.includes('@'))) {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid")
                input.nextElementSibling.innerHTML = "El email no es valido";
            }

            if ((input.dataset.nombre == "password") || (input.dataset.nombre == "passwordRe") && (input.value.length > 60)) {
                input.classList.add("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "El largo del campo no puede ser tan largo";
            }

            if ((input.dataset.nombre == "password") || (input.dataset.nombre == "passwordRe") && (input.value.length < 8)) {
                input.classList.add("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "El largo del campo no puede ser tan corto";

            }

            if ((input.dataset.nombre == "avatar")) {
                let extFile = input.value.split('.').pop();
                if (validExtensions.includes(extFile) == false) {
                    input.classList.add("is-invalid");
                    input.classList.remove("is-valid");
                    ulErrores.innerHTML += `<li>El archivo del campo ${input.dataset.nombre} debe ser un .jpeg, .jpg, .png y .gif</li>`;
                    input.nextElementSibling.innerHTML = "Solo de admiten archivos .jpeg, .jpg, .png y .gif";
                };
            }
        })
    });
});