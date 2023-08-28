import axios from 'axios';

const URL = 'http://localhost:5005'
export const authenticatesSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log('error while calling signup api', error);
    }
}