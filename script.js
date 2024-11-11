window.onload = () => {
    // document.getElementById("country").onchange = checkPostalCode;
    document.getElementById("zipcode").oninput = checkZip;
  };


// function checkEmail(){
//     let email = document.getElementById("email").value;
    

// }

let email = document.getElementById("email");

email.addEventListener("input", (event) =>{
    if (email.validity.typeMismatch){
        email.setCustomValidity("I am expecting an email address!");
        console.log("naw");
  } else {
    email.setCustomValidity("");
    console.log("yaw");
    }
})

function checkCountry(){

}

function checkZip(){
    let zip = document.getElementById("zipcode").value;
    let USregex = /\d{5}(?:[-\s]\d{4})?$/;

    // "\d{5}-?(\d{4})?"
    if(USregex.test(zip)){
    console.log("hiya")}
    else{console.log("no-ho")}

    // console.log(USregex.test(zip))
    
}

function checkPassword(){
    const password = document.getElementById("password").value
}

function checkConfirm(){
    const confirm = document.getElementById("confirm").value;
    if(password == confirm){

    }
}