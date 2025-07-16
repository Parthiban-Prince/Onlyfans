import axios from "axios";


export const api = axios.create({
    baseURL:"https://onlyfans-backend-production.up.railway.app/",

})

export default api