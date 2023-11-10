import axios from "axios";
const URL: string = "http://localhost:8000/"

export default axios.create({ baseURL: URL })