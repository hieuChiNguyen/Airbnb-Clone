import axiosClient from "./axiosClient";

const hotelApi = {
    getListHotel: async () => {
        const response = await axiosClient.get('/');
        return response.data;
    },
    getDetailHotal: async (id) => {
        const response = await axiosClient.get('/room/'+id);
        return response.data;
    }
}
