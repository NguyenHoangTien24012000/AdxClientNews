import { ACCESS_TOKEN } from "../util/config";
import { BaseServices } from "./baseServices";

class UserServices extends BaseServices{
    constructor(){
        super()
    }
    dangNhap = (thongTinDangNhap) =>{
        return this.post(`/admin/checkLogin`, thongTinDangNhap)
    }
    checkToken = () =>{
        return this.post(`/admin/checkToken`)
    }
}

export const userServices = new UserServices();