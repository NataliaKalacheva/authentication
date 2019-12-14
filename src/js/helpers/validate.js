const regExDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z-]{8,}$/, // min 8 symbols
  name: /^[a-zA-Z]+$/,
  phone: /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/,
  date: /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/,
  day: /([1-9]|[12]\d|3[01])/,
  month: /^(0?[1-9]|1[012])$/
  // year: /^(19[5-9]d|20[0-4]d|2050)$/
};

///   denis.m.pcspace@gmail.com  - login
///   dmgame12345                -  password

/**
 * Function validate. Check input on RegExp provided in regExDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if input valid or el doesn`t have data-required attr
 */

export function validate(el) {
  const regExName = el.dataset.required; // get input name for validation
  if (!regExDic[regExName]) return true; // this input doesn`t need validation

  return regExDic[regExName].test(el.value); // validation of input by regEx
}
