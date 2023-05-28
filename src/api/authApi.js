import axiosClient from "./axiosClient";

const authApi = {
    login: async (data) => {
        const response = await axiosClient.post('/login',data);
        console.log("auth api +",response.data);
        return response.data;
    },
    logout: async () => {
        const response = await axiosClient('logout');
        return response.data
    }
}

export default authApi;
