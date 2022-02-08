import { SET_DEMO, SET_DEMO_ADX } from "../types/AdxDemoType";

const initialState = {
    arrayDemoAdx : [],
    demo:''
}


export default (state = initialState, action) =>{
    switch (action.type) {
        case SET_DEMO_ADX :
            return {...state, arrayDemoAdx : action.arrayDemoAdx}
        case SET_DEMO:
            let newDemo = state.arrayDemoAdx.filter(item => item.id_demo == action.idDemo )
            return {...state, demo : newDemo[0]}
        default:
            return state;
    }
}