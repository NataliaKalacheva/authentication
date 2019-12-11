// Registration form

import axios from "axios";
import "bootstrap/dist/js/bootstrap.min.js";

function createObject(inputs) {
  if (!inputs[5].checked) {
    inputs.splice(5, 1);
  }
  if (!inputs[6].checked) {
    inputs.splice(6, 1);
  }
  let obj = inputs.reduce((acc, item) => {
    acc[item.dataset.key] = item.value;
    if (item.dataset.key === "email") {
      acc[item.dataset.key] = `[${item.value}(mailto:%22${item.value})]`;
    }
    return acc;
  }, {});
  console.log(obj);
}

function getCheckedCheckbox() {}

/**
 * Function registration
 * @param {Object} obj
 *
 */
export async function registration(inputs) {
  try {
    createObject(inputs);
    // const response = await axios.post(`/auth/signup,`);
    // console.log(response);
    // return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
