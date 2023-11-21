import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://final-projects-server-eight.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;