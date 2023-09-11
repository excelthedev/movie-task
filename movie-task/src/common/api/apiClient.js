import axios from "axios";

const apiGeneral = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: {
    Accept: "",
    Authorization: "",
  },
});
