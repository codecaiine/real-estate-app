import axios from "axios";

export const baseUrl = 'bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'bfada36e05msh8af417e0b315d02p1d6b82jsn4981e0bf00d1'
         } 
    }) 
}