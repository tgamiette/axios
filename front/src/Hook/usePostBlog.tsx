import Cookies from "universal-cookie";
import {LocalBlogPost} from "../Interface/LocalBlogPost";
import API from "./axios"
import * as jose from 'jose'
import axios from "axios";

export default function usePostBlogFrom(): Function {

    const myHeaders = new Headers();
    const cookies = new Cookies();


    // API.interceptors.request.use(request => {
    //     const jwt= cookies.get('token')
    //     const { payload, protectedHeader } = await jose.jwtDecrypt(jwt, secretKey, {
    //         issuer: 'urn:example:issuer',
    //         audience: 'urn:example:audience'
    //     })
    //
    //     console.log(protectedHeader)
    //     console.log(payload)
    // })

    return (blog: LocalBlogPost) => {

        var params = new URLSearchParams();
        params.append('title', blog.title);
        params.append('description', blog.content);

        return API.post('post', params)
            .then(response => {
                console.log(response)
                    return true
                }
            );
    }

}