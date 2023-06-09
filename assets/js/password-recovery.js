const recoveryEmail = document.querySelector("#recoveryEmail");
const recoveryQuestion1 = document.querySelector("#recoveryQuestion1");
const recoveryQuestion2 = document.querySelector("#recoveryQuestion2");
const recoveryQuestion3 = document.querySelector("#recoveryQuestion3");
const recoveryAnswer1 = document.querySelector("#recoveryAnswer1");
const recoveryAnswer2 = document.querySelector("#recoveryAnswer2");
const recoveryAnswer3 = document.querySelector("#recoveryAnswer3");
const recoveryPass = document.querySelector("#recoveryPass");
const recoveryConfirmPass = document.querySelector("#recoveryConfirmPass");
const recoveryFeedback = document.querySelector("#recoveryFeedback");


function passRecoveryCheck() {
    let formErrors = false;

    if(recoveryEmail.value == "") {
        formErrors = true;
        inputError(recoveryEmail, "This field is required.");
    } else if(validateEmail(recoveryEmail.value) == false) {
        formErrors = true;
        inputError(recoveryEmail, errorValidEmail);
    } else {
        const url = `${baseUrl}/account/emailValidation/${recoveryEmail.value}`;
        axios.post(url)
        .then(response => {
            formErrors = true;
            inputError(recoveryEmail, "Emai doesn't exist!");
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
            inputValid(recoveryEmail);
        });
    }
    if(recoveryQuestion1.value == "") {
        inputError(recoveryQuestion1, errorRequiredField);
        formErrors = true;
    } else {
        inputValid(recoveryQuestion1);
    }
    if(recoveryQuestion2.value == "") {
        inputError(recoveryQuestion2, errorRequiredField);
        formErrors = true;
    } else {
        inputValid(recoveryQuestion2);
    }
    if(recoveryQuestion3.value == "") {
        inputError(recoveryQuestion3, errorRequiredField);
        formErrors = true;
    } else {
        inputValid(recoveryQuestion3);
    }
    if(recoveryAnswer1.value == "") {
        inputError(recoveryAnswer1, errorRequiredField);
        formErrors = true;
    } else {
        inputValid(recoveryAnswer1);
    }
    if(recoveryAnswer2.value == "") {
        inputError(recoveryAnswer2, errorRequiredField);
        formErrors = true;
    } else {
        inputValid(recoveryAnswer2);
    }
    if(recoveryAnswer3.value == "") {
        inputError(recoveryAnswer3, errorRequiredField);
        formErrors = true;
    } else {
        inputValid(recoveryAnswer3);
    }
    if(formErrors == false) {
        pageTab(2);
    }
}

function passRecovery() {
    let formErrors = false;

    if(recoveryPass.value == "") {
        formErrors = true;
        inputError(recoveryPass, "This field is required.");
    } else if(checkPassStrength(recoveryPass) < 4) {
        formErrors = true;
        inputError(recoveryPass, errorPassWeak);
    } else {
        inputValid(recoveryPass);
    }

    if(recoveryConfirmPass.value == "") {
        formErrors = true;
        inputError(recoveryConfirmPass, "This field is required.");
    } else if(recoveryPass.value !== recoveryConfirmPass.value) {
        formErrors = true;
        inputError(recoveryConfirmPass, errorPassMatch);
    } else {
        inputValid(recoveryConfirmPass);
    }

    if(formErrors == false) {
        const url = `${baseUrl}/account/password-recovery`;
        const bodyParams = {
            "email": recoveryEmail.value,
            "newPassword": recoveryPass.value,
            "securityAnswers": [{
                "questionId": Number(recoveryQuestion1.value),
                "answer": recoveryAnswer1.value
            },
            {
                "questionId": Number(recoveryQuestion2.value),
                "answer": recoveryAnswer2.value
            },
            {
                "questionId": Number(recoveryQuestion3.value),
                "answer": recoveryAnswer3.value
            }]
        };
        axios.put(url, bodyParams)
        .then((response) => {
            console.log(response);
            recoveryFeedback.innerHTML = "";
            window.location = "index.html";
        }).catch((err) => {
            pageTab(1);
            const errorHTML = `<div class="alert alert-danger">Your answers doesn't match our records. try, or verify your submitted the correct questions and answers.</div>`;
            recoveryFeedback.innerHTML = errorHTML;
        });
    }
}