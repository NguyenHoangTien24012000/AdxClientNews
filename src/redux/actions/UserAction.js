import { userServices } from "../../services/UserServices";
import { ACCESS_TOKEN } from "../../util/config";
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

export const dangNhapAction = (thongTinNguoiDung, history) => {

    // console.log(thongTinNguoiDung);
    // console.log(localStorage.getItem('token',ACCESS_TOKEN))
    return async dispatch => {
        try {
            const result = await userServices.dangNhap(thongTinNguoiDung);
            if (result.status === 200) {
                sessionStorage.setItem(ACCESS_TOKEN, result.data.token);
                history.push('/admin');
            }
        } catch (error) {
            console.log("ERROR", error);
            alert("Login Failed")
        }
    }
}



// export const checkTokenAction = () => {
//     // console.log(resProps)
//     return 
// }



