// document.querySelector() is used to select an element from the document using its ID
let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refreshButton');

// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA
for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''), captchaText.width / 5, captchaText.height / 1.5);

// This event listener is stimulated whenever the user press the "Enter" button
// "Correct!" or "Incorrect, please try again" message is
// displayed after validating the input text with CAPTCHA
userText.addEventListener('keyup', function (e) {
    // Key Code Value of "Enter" Button is 13
    if (e.keyCode === 13) {
        if (userText.value === c) {
            output.classList.add("correctCaptcha");
            output.innerHTML = "Correct!";
        } else {
            output.classList.add("incorrectCaptcha");
            output.innerHTML = "Incorrect, please try again";
        }
    }
});
// This event listener is stimulated whenever the user clicks the "Submit" button
// "Correct!" or "Incorrect, please try again" message is
// displayed after validating the input text with CAPTCHA
submitButton.addEventListener('click', function () {
    if (userText.value === c) {
        output.classList.add("correctCaptcha");
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("incorrectCaptcha");
        output.innerHTML = "Incorrect, please try again";
    }
});
// This event listener is stimulated whenever the user press the "Refresh" button
// A new random CAPTCHA is generated and displayed after the user clicks the "Refresh" button
refreshButton.addEventListener('click', function () {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''), captchaText.width / 5, captchaText.height / 1.5);
    output.innerHTML = "";
});

let test2 = document.querySelector('.text1');
// let test1 = document.getElementsByClassName('.text1');
let resetButton = document.querySelector(".resetButton")

resetButton.addEventListener('click', function () {
    test2.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''), captchaText.width / 5, captchaText.height / 1.5);
    output.innerHTML = "";
});






const scriptURL = 'https://script.google.com/macros/s/AKfycbxBIqiM6uJtULE_4dkC49hPtu5ay2rOw1W60Wl01IG7z5MC1nko2kf3c7IrOp0/exec';
const scriptemail = 'https://script.google.com/macros/s/AKfycbxeL2zvqdMzmzlDtvCJfjTYwGIG8vSJqJi-TdBu7D5LCRibci64rQ8-hkuKf_yWOXzEAg/exec';
const form = document.forms['submit-sheet'];
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const realtive = document.getElementById('realtive');
const nickname = document.getElementById('nickname');
const house = document.getElementById('house');
const area = document.getElementById('area');
const city = document.getElementById('city');
const post = document.getElementById('post');
const sumgarid = document.getElementById('sumgarid');
const village = document.getElementById('village');
const location1 = document.getElementById('location1');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pincode = document.getElementById('pincode');

// add evnt 

form.addEventListener('submit', event => {
    event.preventDefault();
    validate();
    fetch(scriptURL, {
        method: 'post',
        body: new FormData(form)
    })
    
})
// for final data validation

const sendData = (sRate, count) => {
    if (sRate === count) {
        alert("registration successfull")
        swal("Welcome" , "registration successfull", "success");
        fetch(scriptemail, {
            method: 'post',
            body: new FormData(form)
        })
        // location.href = `send.html?username=${usernameVal}`
    }
}

const successMsg = () => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for (var k = 0; k < formCon.length; k++) {
        if (formCon[k].className === "form-control success") {
            var sRate = 0 + k;
            console.log(sRate);
            sendData(sRate, count);
        } else {
            return false;
        }

    }

}

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}
// define the validate funtion

const validate = () => {

    const usernameVal = username.value.trim();
    const surnameVal = surname.value.trim();
    const realtiveVal = realtive.value.trim();
    const nicknameVal = nickname.value.trim();
    const houseVal = house.value.trim();
    const areaVal = area.value.trim();
    const cityVal = city.value.trim();
    const postVal = post.value.trim();
    const sumgaridVal = sumgarid.value.trim();
    const villageVal = village.value.trim();
    const location1Val = location1.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const pincodeVal = pincode.value.trim();
    // validate username 





    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username min 3 char');
    } else {
        setSuccessMsg(username)
    }
    // validate for surname 

    if (surnameVal === "") {
        setErrorMsg(surname, 'username cannot be blank');
    } else if (surnameVal.length <= 2) {
        setErrorMsg(surname, 'username min 3 char');
    } else {
        setSuccessMsg(surname)
    }

    // validate realative 

    if (realtiveVal === "") {
        setErrorMsg(realtive, 'username cannot be blank');
    } else if (realtiveVal.length <= 2) {
        setErrorMsg(realtive, 'username min 3 char');
    } else {
        setSuccessMsg(realtive)
    }

    //  validate nickname

    if (nicknameVal === "") {
        setErrorMsg(nickname, 'username cannot be blank');
    } else if (nicknameVal.length <= 2) {
        setErrorMsg(nickname, 'username min 3 char');
    } else {
        setSuccessMsg(nickname)
    }
    // house validate 

    if (houseVal === "") {
        setErrorMsg(house, 'username cannot be blank');
    } else if (houseVal.length <= 2) {
        setErrorMsg(house, 'username min 3 char');
    } else {
        setSuccessMsg(house)
    }
    // validate area 

    if (areaVal === "") {
        setErrorMsg(area, 'username cannot be blank');
    } else if (areaVal.length <= 2) {
        setErrorMsg(area, 'username min 3 char');
    } else {
        setSuccessMsg(area)
    }
    // validate for city 

    if (cityVal === "") {
        setErrorMsg(city, 'username cannot be blank');
    } else if (cityVal.length <= 2) {
        setErrorMsg(city, 'username min 3 char');
    } else {
        setSuccessMsg(city)
    }


    //  validate post

    if (postVal === "") {
        setErrorMsg(post, 'username cannot be blank');
    } else if (postVal.length <= 2) {
        setErrorMsg(post, 'username min 3 char');
    } else {
        setSuccessMsg(post)
    }


    // validate pincode

    if (pincodeVal === "") {
        setErrorMsg(pincode, 'number cannot be blank');
    } else if (pincodeVal.length > 11) {
        setErrorMsg(pincode, 'not a valid number');
    }
    else {
        setSuccessMsg(pincode)
    }
    //  validate sumgarid

    if (sumgaridVal === "") {
        setErrorMsg(sumgarid, 'username cannot be blank');
    } else if (sumgaridVal.length <= 2) {
        setErrorMsg(sumgarid, 'username min 3 char');
    } else {
        setSuccessMsg(sumgarid)
    }
    // validate email

    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'not a valid email');
    } else {
        setSuccessMsg(email)
    }

    // validate phone

    if (phoneVal === "") {
        setErrorMsg(phone, 'number cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'not a valid number');
    }
    else {
        setSuccessMsg(phone)
    }

    // validate for village 

    if (villageVal === "") {
        setErrorMsg(village, 'username cannot be blank');
    } else if (villageVal.length <= 2) {
        setErrorMsg(village, 'username min 3 char');
    } else {
        setSuccessMsg(village)
    }


    //  validate location1

    if (location1Val === "") {
        setErrorMsg(location1, 'username cannot be blank');
    } else if (location1Val.length <= 2) {
        setErrorMsg(location1, 'username min 3 char');
    } else {
        setSuccessMsg(location1)
    }

    // validate password 

    if (passwordVal === "") {
        setErrorMsg(password, 'password cannot be none');
    } else if (passwordVal.length <= 5) {
        setErrorMsg(password, 'minimum 6 char');
    } else {
        setSuccessMsg(password)
    }

    // validate c passward 
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'password cannot be none');
    } else if (cpasswordVal != passwordVal) {
        setErrorMsg(cpassword, 'password are not match');
    } else if (cpasswordVal.length <= 5) {
        setErrorMsg(cpassword, 'minimum 6 char');
    }
    else {
        setSuccessMsg(cpassword)
    };


    successMsg(usernameVal);

}


function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}









// submit button scripting 


// const scriptURL = 'https://script.google.com/macros/s/AKfycbz3d9aY0DCCZa8kPhbdro0GUAFKLa0M2serGmra7Pd12U3QBM-TNqePHRJSukQRD3iHZA/exec'
// ;
// const formes = document.forms['submit-sheet']


// formes.addEventListener('submit', e => {
//     e.preventDefault()
//         fetch(scriptURL, { method: 'POST', body: new FormData(formes) })
//     //     .then(response => alert("Thanks for Contecting Us ..! we Will Contect you Soon"))
//     //     .catch(error => console.error('Error!',error.message))
//     // alert("registration successfull")
//     swal("Welcome" , "registration successfull", "success");
//     // location.href = `demo.html?username=${usernameVal}`;
// })