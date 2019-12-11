const UI = {
  form: document.forms["loginForm"],
  inputEmail: document.getElementById("email"),
  inputPassword: document.getElementById("password"),
  registartionForm: document.forms["registrationForm"],
  regEmail: document.getElementById("reg-email"),
  regPassword: document.getElementById("reg-password"),
  regFirstName: document.getElementById("first-name"),
  regLastName: document.getElementById("last-name"),
  regNickname: document.getElementById("nickname"),
  regPhone: document.getElementById("phone"),
  regDayBirth: document.getElementById("day-birth"),
  regMonthBirth: document.getElementById("month-birth"),
  regYearBirth: document.getElementById("year-birth"),
  regCity: document.getElementById("city"),
  regCountry: document.getElementById("country"),
  regGender: document.querySelectorAll("[data-key=gender_orientation]")
};

export default UI;
