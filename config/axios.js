import axios from "axios";

const axiosClient =  serverUrl => axios.create({
    baseURL: serverUrl
})

export default axiosClient