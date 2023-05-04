import axiosClient from "./axiosClient";

const authApi = {
    login: async (data) => {
        const response = await axiosClient.post('/login',data);
        console.log(response);
    }
}

export default authApi;
