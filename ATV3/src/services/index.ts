import api from "./api";
import IContacts from "../types/types";

export const getContacts = async() =>{
    const response = await api.get('/');
    return response.data;
}

export const postContacts = async(message: Omit<IContacts, "id">) =>{
    const response = await api.post('/', message);
    return response.data;
}

export const updateContacts = async(message: IContacts) =>{
    const response = await api.put('/', message);
    return response.data;
}

export const deleteContacts = async(id:string) =>{
    const response = await api.delete(`/?id=${id}`);
    return response.data;
}