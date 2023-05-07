import axios from "axios";


const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
});

axiosClient.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

axiosClient.interceptors.response.use((response)=>{
    return response;
})


export default axiosClient;
