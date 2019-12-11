import axios from "../plugin/axios";

/**
 * Function get news.
 * @param {String} email
 * @param {String} password
 */
export async function getNews() {
  try {
    const response = await axios.get(
      `/news`,
      JSON.stringify({ email, password })
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(err);
    return Promise.reject(err);
  }
}
