window.addEventListener('load', () => {
    let formulario = document.querySelector("form");
    let inputEmail = document.querySelector("#email");
    let inputPassword = document.querySelector("#password");
    let ulErrores = document.querySelector("#errores");

    inputEmail.focus();

    let arrayInput = [inputEmail, inputPassword];

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

            if ((input.dataset.nombre == "email") && !(input.value.includes('@'))) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>El valor del campo ${input.dataset.nombre} no es valido</li>`;
                input.nextElementSibling.innerHTML = "El valor ingresado es invalido";
            }

            if ((input.dataset.nombre == "password") && (input.value.length > 60)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>La contraseña no puede ser de más de 60 caracteres</li>`;
                input.nextElementSibling.innerHTML = "El largo de la contraseña no puede ser tan largo";
            }

            if ((input.dataset.nombre == "password") && (input.value.length < 8)) {
                input.classList.add("is-invalid");
                errores++;
                ulErrores.innerHTML += `<li>La cantraseña no puede ser de menor a 8 caracteres</li>`;
                input.nextElementSibling.innerHTML = "El largo de la contraseña no puede ser tan corto";
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

            if ((input.dataset.nombre == "email") && !(input.value.includes('@'))) {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid")
                input.nextElementSibling.innerHTML = "El email no es valido";
            }

            if ((input.dataset.nombre == "email") && (input.value.includes('@'))) {
                input.classList.add("is-valid");
                input.classList.remove("is-invalid");
            }

            if ((input.dataset.nombre == "password") && (input.value.length > 60)) {
                input.classList.add("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "El largo del campo no puede ser tan largo";
            }

            if ((input.dataset.nombre == "password") && (input.value.length < 8)) {
                input.classList.add("is-invalid");
                input.classList.add("is-valid");
                input.nextElementSibling.innerHTML = "El largo del campo no puede ser tan corto";

            }
        })
    });
});