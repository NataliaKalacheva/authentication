// Registration form

import axios from "../plugin/axios";
// import "bootstrap/dist/js/bootstrap.min.js";

function createObject(inputs) {
  console.log(inputs);
  if (inputs[5].dataset.key === "gender_orientation" && !inputs[5].checked) {
    inputs.splice(5, 1);
  }

  if (inputs[6].dataset.key === "gender_orientation" && !inputs[6].checked) {
    inputs.splice(6, 1);
  }
  let obj = inputs.reduce((acc, item) => {
    acc[item.dataset.key] = item.value;
    // if (item.dataset.key === "email") {
    //   acc[item.dataset.key] = `[${item.value}(mailto:%22${item.value})]`;
    // }
    return acc;
  }, {});
  return obj;
}

/**
 * Function registration
 * @param {Object} obj
 *
 */
export async function registration(inputs) {
  try {
    let data = createObject(inputs);
    console.log(data);

    const response = await axios.post(`/auth/signup`, JSON.stringify(data));
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
