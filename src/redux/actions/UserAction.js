import { userServices } from "../../services/UserServices";
import { ACCESS_TOKEN } from "../../util/config";
import { createBrowserHistory } from 'history';
import { UPDATE_USER } from "../types/UserType";


export const dangNhapAction = (thongTinNguoiDung, history) => {

    // console.log(thongTinNguoiDung);
    // console.log(localStorage.getItem('token',ACCESS_TOKEN))
    return async dispatch => {
        try {
            const result = await userServices.dangNhap(thongTinNguoiDung);
            if (result.status === 200) {
                dispatch({
                    type : UPDATE_USER,
                    thongTinNguoiDung : thongTinNguoiDung
                })
                sessionStorage.setItem(ACCESS_TOKEN, result.data.token);
                history.push('/admin');
            }
        } catch (error) {
            console.log("ERROR", error);
            alert("Login Failed")
        }
    }
}



export const changeUserAction = (thongTinNguoiDung, history) => {
    return async dispatch => {
        try {
            const result = await userServices.changeUser(thongTinNguoiDung);
            if(result.status === 200){
                alert("Change User Success!!")
                sessionStorage.setItem(ACCESS_TOKEN, result.data.token);
                history.push('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }
}



