import axios from "axios"

const HTTP = axios.create({
    baseURL: "/atmintine/api"
})

export default HTTP