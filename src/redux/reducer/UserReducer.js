import { UPDATE_USER } from "../types/UserType";

const initialState = {
    thongTinNguoiDung : '',
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_USER :
            return {...state, thongTinNguoiDung : action.thongTinNguoiDung}
        default:
            return state;
    }
}