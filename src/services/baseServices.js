import Axios  from "axios";
import { DOMAIN,ACCESS_TOKEN } from "../util/config";
export class BaseServices {
    get = (url, model) =>{
        return Axios({
            url : `${DOMAIN}${url}`,
            method : 'GET',
            data : model,
            headers : {'Authorization' : sessionStorage.getItem(ACCESS_TOKEN)}
        })
    }
    post = (url, model) =>{
        return Axios({
            url : `${DOMAIN}${url}`,
            method : 'POST',
            data : model,
            headers : {'Authorization' : sessionStorage.getItem(ACCESS_TOKEN)}
        })
    }
    put = (url, model) =>{
        return Axios({
            url : `${DOMAIN}${url}`,
            method : 'PUT',
            data : model,
            headers : {'Authorization' : sessionStorage.getItem(ACCESS_TOKEN)}
        })
    }
    delete = (url, model) =>{
        return Axios({
            url : `${DOMAIN}${url}`,
            method : 'DELETE',
            data : model,
            headers : {'Authorization' : sessionStorage.getItem(ACCESS_TOKEN)}
        })
    }
}