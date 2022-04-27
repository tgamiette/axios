import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:1234/api/",
    headers: {"Content-Type": 'application/x-www-form-urlencoded'},
    withCredentials: true
});
