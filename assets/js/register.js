const registerEmail = document.getElementById("registerEmail");
const registerPass = document.getElementById("registerPass");
const registerConfirmPass = document.getElementById("registerConfirmPass");
const registerFname = document.getElementById("registerFname");
const registerLname = document.getElementById("registerLname");
const registerGender = document.getElementById("registerGender");
const registerAddress = document.getElementById("registerAddress");
const registerCity = document.getElementById("registerCity");
const registerCountry = document.getElementById("registerCountry");
const registerCurrency = document.getElementById("registerCurrency");
const registerPhone = document.getElementById("registerPhone");
const registerPhoneCode = document.getElementById("registerPhoneCode");
const registerPhoneNumber = document.getElementById("registerPhoneNumber");
const registerBirthDate = document.getElementById("registerBirthDate");
const registerBirthDateYY = document.getElementById("registerBirthDateYY");
const registerBirthDateMM = document.getElementById("registerBirthDateMM");
const registerBirthDateDD = document.getElementById("registerBirthDateDD");
let registerBirthDateVal = `${registerBirthDateYY.value}-${registerBirthDateMM.value}-${registerBirthDateDD.value}`;
const registerQuestionsForm = document.getElementById("securityQuestions");
const registerQuestionOne = document.getElementById("registerQuestionOne");
const registerQuestionTwo = document.getElementById("registerQuestionTwo");
const registerQuestionThree = document.getElementById("registerQuestionThree");
const registerAnswerOne = document.getElementById("registerAnswerOne");
const registerAnswerTwo = document.getElementById("registerAnswerTwo");
const registerAnswerThree = document.getElementById("registerAnswerThree");
const errorMsgRequired = "This field is required.";
const registerFeedback = document.getElementById("registerFeedback");

if(registerPass) {
    checkPassStrength(registerPass);
    registerPass.addEventListener("keyup", function() {
        checkPassStrength(registerPass);
    });
}

if(registerCountry) {
    selectOptions(registerCountry, countriesJSON, "MA");
}
if(registerPhoneCode) {
    selectOptions(registerPhoneCode, phoneCodesJSON, "+212");
}
if(registerCurrency) {
    selectOptions(registerCurrency, currenciesJSON, "MAD");
}

birthDateSelect(registerBirthDate);

formSetQuestions(registerQuestionsForm);


function registerAuthValidate() {
    let formErrors = false;

    if(registerEmail.value == "") {
        formErrors = true;
        inputError(registerEmail, "This field is required.");
    } else if(validateEmail(registerEmail.value) == false) {
        formErrors = true;
        inputError(registerEmail, "Please enter a valid email address.");
    } else {
        inputValid(registerEmail);
    }

    if(registerPass.value == "") {
        formErrors = true;
        inputError(registerPass, "This field is required.");
    } else if(checkPassStrength(registerPass) < 4) {
        formErrors = true;
        inputError(registerPass, "Please choose a stronger password.");
    } else {
        inputValid(registerPass);
    }

    if(registerConfirmPass.value == "") {
        formErrors = true;
        inputError(registerConfirmPass, "This field is required.");
    } else if(registerPass.value !== registerConfirmPass.value) {
        formErrors = true;
        inputError(registerConfirmPass, "Passwords do not match.");
    } else {
        inputValid(registerConfirmPass);
    }
    if(formErrors == false) {
        registerGoStep(2);
    }
}

function registerInfosValidate() {
    let formErrors = false;

    if(registerFname.value == "") {
        inputError(registerFname, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerFname);
    }

    if(registerLname.value == "") {
        inputError(registerLname, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerLname);
    }

    if(registerAddress.value == "") {
        inputError(registerAddress, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerAddress);
    }

    if(registerCity.value == "") {
        inputError(registerCity, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerCity);
    }

    if(registerCountry.value == "") {
        inputError(registerCountry, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerCountry);
    }

    if(registerCurrency.value == "") {
        inputError(registerCurrency, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerCurrency);
    }

    if(getRadiosVal(registerGender, "gender") == "") {
        inputError(registerGender, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerGender);
    }

    if(registerBirthDateYY.value == currentYear &&
        registerBirthDateMM.value == currentMonth &&
        registerBirthDateDD.value == currentDay ) {
        inputError(registerBirthDate, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerBirthDate);
    }

    if(registerPhoneNumber.value == "") {
        inputError(registerPhone, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerPhone);
    }


    if(formErrors == false) {
        registerGoStep(3);

        // let elements = document.getElementsByClassName("register-step");
        // let elementsArray = Array.from(elements);
        // elementsArray[1].classList.add("d-none");
        // elementsArray[2].classList.remove("d-none");

        // let registerPhoneVal = `${registerPhoneCode.value} ${registerPhoneNumber.value}`;
        // let registerBirthDateVal = `${registerBirthDateYY.value}/${registerBirthDateMM.value}/${registerBirthDateDD.value}`;
        // let accountGenderVal = radioBtnValue(accountGender, "gender");
        // localStorage.setItem("registerFname", registerFname.value);
        // localStorage.setItem("registerLname", registerLname.value);
        // localStorage.setItem("registerGender", accountGenderVal);
        // localStorage.setItem("registerBirthdate", registerBirthDateVal);
        // localStorage.setItem("registerAddress", registerAddress.value);
        // localStorage.setItem("registerCity", registerCity.value);
        // localStorage.setItem("registerCountry", registerCountry.value);
        // localStorage.setItem("registerCurrency", registerCurrency.value);
        // localStorage.setItem("registerPhone", registerPhoneVal);
    }
}

function registerFinalStep() {
    let formErrors = false;

    if(registerQuestionOne.value == "") {
        inputError(registerQuestionOne, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerQuestionOne);
    }
    if(registerQuestionTwo.value == "") {
        inputError(registerQuestionTwo, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerQuestionTwo);
    }
    if(registerQuestionThree.value == "") {
        inputError(registerQuestionThree, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerQuestionThree);
    }
    if(registerAnswerOne.value == "") {
        inputError(registerAnswerOne, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerAnswerOne);
    }
    if(registerAnswerTwo.value == "") {
        inputError(registerAnswerTwo, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerAnswerTwo);
    }
    if(registerAnswerThree.value == "") {
        inputError(registerAnswerThree, errorMsgRequired);
        formErrors = true;
    } else {
        inputValid(registerAnswerThree);
    }
    if(formErrors == false) {
        let url = `${baseUrl}/account/register`;
        let bodyParams = {
            "firstName":registerFname.value,
            "lastName":registerLname.value,
            "birthDate": `${registerBirthDateYY.value}-${registerBirthDateMM.value}-${registerBirthDateDD.value}`,
            "gender":getRadiosVal(registerGender, "gender"),
            "phoneNumber":`(${registerPhoneCode.value})${registerPhoneNumber.value}`,
            "addressLabel":registerAddress.value,
            "country":registerCountry.value,
            "city":registerCity.value,
            "email":registerEmail.value,
            "password":registerPass.value,
            "currency":registerCurrency.value,
            "securityAnswers": [
              {
                "questionId": Number(registerQuestionOne.value),
                "answer": registerAnswerOne.value
              },
              {
                "questionId": Number(registerQuestionTwo.value),
                "answer": registerAnswerTwo.value
              },
              {
                "questionId": Number(registerQuestionThree.value),
                "answer": registerAnswerThree.value
              }
            ]
        }
        // console.log(params);
        axios.post(url, bodyParams)
        .then((response) => {
            registerFeedback.innerHTML = "";
            localStorage.setItem("accessToken", response.data.access_token);
            localStorage.setItem("accountId", response.data.accountId);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("firstName", response.data.firstName);
            localStorage.setItem("lastName", response.data.lastName);
            localStorage.setItem("birthDate", response.data.birthDate);
            localStorage.setItem("gender", response.data.gender);
            localStorage.setItem("phoneNumber", response.data.phoneNumber);
            localStorage.setItem("addressLabel", response.data.addressLabel);
            localStorage.setItem("country", response.data.country);
            localStorage.setItem("city", response.data.city);
            localStorage.setItem("currency", response.data.currency);
            localStorage.setItem("creationDate", response.data.creationDate);
            localStorage.setItem("securityAnswers", JSON.stringify(response.data.securityAnswers));
            window.location = `profile.html`;
        }).catch((err) => {
            registerGoStep(1);
            const errorHTML = `<div id="formFeedback" class="login-feedback alert alert-danger" role="alert">${err.response.data.message}</div>`;
            const formFeedback = document.getElementById("formFeedback");
            if (formFeedback !== null) {
                console.log(err.response.data.message);
                formFeedback.innerText = err.response.data.message;
            } else {
                registerFeedback.innerHTML = errorHTML;
            }
        });
    }
}

function registerGoStep(index) {
    let elements = document.getElementsByClassName("register-step");
    let elementsArray = Array.from(elements);
    for (let i = 0; i < elementsArray.length; i++) {
        if (index === i+1) {
            elementsArray[i].classList.remove("d-none");
        } else {
            elementsArray[i].classList.add("d-none");
        }
    }
}
