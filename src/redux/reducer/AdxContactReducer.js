import { SET_ADX_CONTACT } from "../types/AdxContactType";


const initialState = {
    allAdxContact : [],
}


export default (state = initialState, action) =>{
    switch (action.type) {
        case SET_ADX_CONTACT :
            return {...state, allAdxContact : action.allAdxContact[0]}
        default:
            return state;
    }
}