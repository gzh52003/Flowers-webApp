import axios from 'axios';

// let baseUrl = process.env.NODE_ENV === "production"? "http://120.24.63.27:2001" : "http://localhost:3000";

const source = axios.CancelToken.source();
const baseUrl='http://120.24.63.27:2001'
const request = axios.create({
    baseURL:baseUrl+'/api',
    withCredentials:true,
});

request.source = source;

export default request;