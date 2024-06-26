import axios from "axios";

const http = axios.create({
  baseURL: "https://ny3.blynk.cloud/external/api"
})

export default http