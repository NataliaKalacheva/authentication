import axios from "../plugin/axios";

/**
 * Function login.
 * @param {String} email
 * @param {String} password
 */
export async function login(email, password) {
  try {
    const response = await axios.post(
      `/auth/login`,
      JSON.stringify({ email, password })
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
