import axios from "../plugin/axios";

export async function getCountries() {
  try {
    const response = await axios.get(`/location/get-countries`);
    console.log(response); // в консоль выводиться объект со странами
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
