import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";
import "bootstrap/dist/js/bootstrap.min.js";

import UI from "./config/ui.config";
import { validate } from "./helpers/validate";
import { showInputError } from "./views/form";
import { removeInputError, closeModalForm } from "./views/form";
import { login } from "./services/auth.service";
import { registration } from "./services/reg.service";
import { notify } from "./views/notification";
import { getNews } from "./services/news.service";
import { getCountries, getCities } from "./services/autocomplete.service";


const {
  form,
  inputEmail,
  inputPassword,
  registartionForm,
  regEmail,
  regPassword,
  regFirstName,
  regLastName,
  regNickname,
  regPhone,
  regDayBirth,
  regMonthBirth,
  regYearBirth,
  regCity,
  regCountry,
  regGender
} = UI;
const inputs = [inputEmail, inputPassword];
const regInputs = [
  regEmail,
  regPassword,
  regNickname,
  regFirstName,
  regLastName,
  regGender[0],
  regGender[1],
  regPhone,
  regCity,
  regCountry,
  regDayBirth,
  regMonthBirth,
  regYearBirth
];
// Events
form.addEventListener("submit", e => {
  e.preventDefault();
  onSubmit(inputs);
});

registartionForm.addEventListener("submit", e => {
  e.preventDefault();
  registrationSubmit();
});

inputs.forEach(el =>
  el.addEventListener("focus", () => {
    removeInputError(el);
  })
);

regInputs.forEach(el =>
  el.addEventListener("focus", () => {
    removeInputError(el);
  })
);

regCountry.addEventListener('input', () => getCountries(regCountry));

regCity.addEventListener('input', () => getCities(regCity, regCountry));

// Handlers

async function registrationSubmit() {
  const isValidForm = regInputs.every(el => {
    const isValideInput = validate(el);
    if (!isValideInput) {
      showInputError(el);
    }
    return isValideInput;
  });
  if (!isValidForm) return;

  try {
    console.log(regInputs);
    await registration(regInputs);
    registartionForm.reset();
    closeModalForm();
    notify({
      msg:
        "User created success. On your email sended link. Please verify your email.",
      className: "alert-success"
    });
  } catch (error) {
    console.log(error);
    notify({ msg: "Registration failed", className: "alert-danger" });
  }
}

async function onSubmit(inputs) {
  const isValidForm = inputs.every(el => {
    const isValideInput = validate(el);
    if (!isValideInput) {
      showInputError(el);
    }
    return isValideInput;
  });
  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    notify({ msg: "Login success", className: "alert-success" });
  } catch (error) {
    notify({ msg: "Login failed", className: "alert-danger" });
  }
}

