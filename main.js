const inputName = document.getElementById("cardName");
const inputNum = document.getElementById("card-number");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputCVC = document.getElementById("cvc");

const outputName = document.getElementById("output-cardName");
const outputNumber = document.getElementById("output-number");
const outputMonth = document.getElementById("exp-month");
const outputYear = document.getElementById("exp-year");
const outputCVC = document.getElementById("output-cvc");

// error containers
const errorName = document.getElementById("error-name");
const errorNumber = document.getElementById("error-number");
const errorDate = document.getElementById("error-date");
const errorCVC = document.getElementById("error-cvc");

inputName.addEventListener("input", () => {
  let formattedName = inputName.value.toUpperCase();
  outputName.innerText = formattedName;
  checkName(inputName, errorName);
});

inputNum.addEventListener("input", formatCardNumber);

// formats cardnumber
function formatCardNumber() {
  let cardNumValue = inputNum.value.replace(/\D/g, "");
  let formattedNum = "";

  for (let i = 0; i < cardNumValue.length; i++) {
    if (i % 4 == 0 && i > 0) {
      formattedNum += " ";
    }
    formattedNum += cardNumValue[i];
  }
  inputNum.value = formattedNum;
  outputNumber.innerText = formattedNum;

  checkNumber(inputNum, errorNumber);
}

inputMonth.addEventListener("input", () => {
  outputMonth.innerText = inputMonth.value;

  checkMonth(inputMonth, errorDate);
});

inputYear.addEventListener("input", () => {
  outputYear.innerText = inputYear.value;

  checkYear(inputYear, errorDate);
});

inputCVC.addEventListener("input", () => {
  outputCVC.innerText = inputCVC.value;

  checkCVC(inputCVC, errorCVC);
});

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // validateForm();
  confirm();
});

// checks is name field is empty
function checkName(userName, errorMsg) {
  if (userName.value === "" || /\d/.test(userName.value)) {
    errorMsg.textContent = "Invalid name";
    userName.classList.add("error");
    return false;
  } else {
    userName.classList.remove("error");
    errorMsg.textContent = "";
  }
}

function checkNumber(cardNum, errorMsg) {
  if (cardNum.value == "") {
    cardNum.classList.add("error");
    errorMsg.textContent = "Wrong format, numbers only";
  } else {
    cardNum.classList.remove("error");
    errorMsg.textContent = "";
  }
}

function checkMonth(expMonth, errorMsg) {
  if (expMonth.value == "") {
    expMonth.classList.add("error");
    errorMsg.textContent = "Can't be blank";
  } else {
    expMonth.classList.remove("error");
    errorMsg.textContent = "";
  }
}

function checkYear(expYear, errorMsg) {
  if (expYear.value == "") {
    expYear.classList.add("error");
    errorMsg.innerText = "Can't be blank";
  } else {
    expYear.classList.remove("error");
    errorMsg.innerText = "";
  }
}

function checkCVC(cvc, errorMsg) {
  if (cvc.value == " ") {
    errorMsg.textContent = "Can't be blank";
    cvc.classList.add("error");
    return false;
  } else {
    cvc.classList.remove("error");
  }
}

function confirm() {
  let formPage = document.getElementById("form");
  let thankYouPage = document.getElementById("complete-state");
  formPage.classList.add("hidden");
  thankYouPage.style.display = "flex";
}
