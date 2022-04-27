import Cookies from "universal-cookie";
import axios from "axios";
import API from './axios';

export default function useGetBlogList(): Function {

    // const cookies = new Cookies();
    // const myHeaders = new Headers();
    // myHeaders.append("Access-Control-Request-Method", "GET");
    // // myHeaders.append('Authorization', cookies.get('jwt'));
    // const requestOptions: any = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     mode: 'cors',
    //     credentials: 'include'
    // };
    //
    // return (): Promise<any> => {
    //     const url = `http://localhost:1234/api/post/`
    //     return fetch(url, requestOptions)
    //         .then(res => res.json())
    // }

    // API.interceptors.request.use(req => {
    //     console.log(req)
    //     return req
    // })

    return () => {
        axios({
            url: 'http://localhost:1234/api/login',
            method: "POST",
            withCredentials: true,
            data: new URLSearchParams({})

        })


    }

}