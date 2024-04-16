import axios from 'axios';
const httpResquest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (api, options = {}) => {
    const response = await httpResquest.get(api, options);
    return response.data;
};
export default httpResquest;
