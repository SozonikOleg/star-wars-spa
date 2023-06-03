import axios from "axios";

console.log("process", process.env);

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
