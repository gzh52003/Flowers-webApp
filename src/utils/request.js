import axios from 'axios';

const request = axios.create({
    baseURL:'http://120.24.63.27:2001/api',
    withCredentials:true,
})

export default request;