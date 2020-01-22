import axios from "axios";

const api = axios.create({
  baseURL: "http://portalagronegocio.com.br/"
})

export default api;