const constraintValidationAPI = (() => {
    const form = document.getElementsByTagName("form")[0];

    const email = document.getElementById("email");
    const emailError = document.querySelector("#email + span.error-msg");

    const country = document.getElementById("country");
    const countryError = document.querySelector("#country + span.error-msg");

    const zipcode = document.getElementById("zipcode");
    const zipcodeError = document.querySelector("#zipcode + span.error-msg");

    const password = document.getElementById("password");
    const passwordError = document.querySelector("#password + span.error-msg");

    const confirm = document.getElementById("confirm");
    const confirmError = document.querySelector("#confirm + span.error-msg");


    email.addEventListener("input", function (e){
        if (email.validity.valid){
            emailError.textContent = "";
            emailError.className = "error-msg";
        }
        else {
            showError();
        }
    });

    country.addEventListener("input", function (e){
        if (country.validity.valid){
            countryError.textContent = "";
            countryError.className = "error-msg";
        }
        else {
            showError();
        }
    });

    zipcode.addEventListener("input", function (e){
        if (zipcode.validity.valid){
            zipcodeError.textContent = "";
            zipcodeError.className = "error-msg";
        }
        else {
            showError();
        }
    });

    password.addEventListener("input", function (e){
        if (password.validity.valid){
            passwordError.textContent = "";
            passwordError.className = "error-msg";
        }
        else {
            showError();
        }
    });

    confirm.addEventListener("input", function (e){
        if (confirm.validity.valid){
            confirmError.textContent = "";
            confirmError.className = "error-msg";
        }
        else {
            showError();
        }
    });



    // RUN CHECKS ON SUBMISSION TO ENSURE VALID ENTRIES 

    form.addEventListener("submit", function (e){
        if (!email.validity.valid){
            showError();
            event.preventDefault();
        }

        if (!country.validity.valid){
            showError();
            event.preventDefault();
        }

        if (!zipcode.validity.valid){
            showError();
            event.preventDefault();
        }

        if (!password.validity.valid){
            showError();
            event.preventDefault();
        }

        if (!confirm.validity.valid){
            showError();
            event.preventDefault();
        }

        // ALERT IF SUCCESSFUL SUBMISSION
        if(
            email.validity.valid &&
            country.validity.valid &&
            zipcode.validity.valid &&
            password.validity.valid &&
            confirm.validity.valid
        ){
            alert("successfully Submitted. Thanks, Man.")
        }
    })

    // RESET BUTON -----------------
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", function clearForm(){
        const activeErrorMsgNodeList = document.querySelectorAll(".active");
        for (let i = 0; i < activeErrorMsgNodeList.length; i++){
            activeErrorMsgNodeList[i].textContent = "";
            activeErrorMsgNodeList[i].className = "error-msg";
        }
    })

    function showError(){
        // Run validations against email
        if (document.activeElement == email){
            if (email.validity.valueMissing){
                emailError.textContent = "enter an email address";
            }
            else if (email.validity.typeMismatch){
                emailError.textContent = "entered value must be an email address"
            }
            emailError.className = "error-msg active";
        }

        if (document.activeElement == country){
            if (country.validity.valueMissing){
                countryError.textContent = "enter a country";
            }
            else if (country.validity.tooShort){
                countryError.textContent = "gotta be for than 2 characters"
            }
            countryError.className = "error-msg active";
        }

        if (document.activeElement == zipcode){
            if (zipcode.validity.valueMissing){
                zipcodeError.textContent = "enter a zipcode";
            }
            else if (zipcode.validity.typeMismatch){
                zipcodeError.textContent = "need 5 digits"
            }
            else if (zipcode.validity.tooShort){
                zipcodeError.textContent = "too short! need 5 digits"
            }
            zipcodeError.className = "error-msg active";
        }

        if (document.activeElement == password){
            if (password.validity.valueMissing){
                passwordError.textContent = "enter a password";
            }
            else if (password.validity.tooShort){
                passwordError.textContent = "password gotta be 6+ characters"
            }
            else if (password.validity.patternMismatch){
                passwordError.textContent = "password needs one upper case, one lower case, one number, one special (!@#$%^&*)"
            }
            passwordError.className = "error-msg active";
        }

        if (document.activeElement == confirm){
            if (confirm.validity.valueMissing){
                confirmError.textContent = "enter a password";
            }
 // NEEDS THIS TO CHECK MATCH, IDK WHY ------------------
            else if (confirm.validity.patternMismatch){
            if (password.value !== confirm.value){
                confirmError.textContent = "my man your passwords don't match";
            }}
            confirmError.className = "error-msg active";
        }
       
    }
})();