function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}

function todasjuntas() {
    let nombre = document.getElementById("nombre").value;
    let apellido =document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;


    if (!nombre || !apellido || !email|| !password1 ||!password2 || !terminos){
        showAlertError();
        return false;
        }

    if (password1.length < 6 || password2.length < 6) {
        showAlertError();
        return false;
        }
     
    if (password1 !== password2) {
        showAlertError();
        return false;
        }

   if (!terminos) {
        showAlertError();
        return false;
    }

    showAlertSuccess();
    return true;
}

let btnRng = document.getElementById("regBtn");
btnRng.addEventListener("click", todasjuntas);