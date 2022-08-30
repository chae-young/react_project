import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

const fetcher = async(method,url,...rest) => {
    const res = await axios[method](url,...rest)
    return res.data
}

/*
get: axios.get(url[,config])
delet: axios.get(url[,config])
post: axios.get(url,data[,config])
put: axios.get(url,data[,config])
*/

export default fetcher