import { apiRequest } from "./apiRequest";
import { apiMethods } from "constants/apiMethods";

export const login = async (user) =>{
    try {
        const response = await apiRequest('/login', apiMethods.post, user);

        return response;
    } catch (error) {
        console.error(error);
    }
};
