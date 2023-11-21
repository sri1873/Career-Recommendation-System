import axios from "axios";
const URL: string = "http://localhost:8000/"
// const URL: string = "https://skilledu.onrender.com/"

export default axios.create({ baseURL: URL })