import { apiRequest } from "./apiRequest";
import { apiMethods } from "constants/apiMethods";

export const login = async (data) =>{
    try {
        const response = await apiRequest('/login', apiMethods.post, data);

        return response;
    } catch (error) {
        console.error(error);
    }
};
