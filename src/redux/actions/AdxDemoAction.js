import { adxTypeDemoServices } from "../../services/AdxTypeDemoServices"
import { SET_DEMO, SET_DEMO_ADX } from "../types/AdxDemoType";

export const getAdxDemoAction = (idAdx) =>{
    return async (dispatch) =>{
        try {
            const result = await adxTypeDemoServices.getAdxDemo(idAdx);
            // console.log(result)
            if(result.status === 200){
                dispatch({
                    type : SET_DEMO_ADX,
                    arrayDemoAdx : result.data.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDemoAction = (idDemo) => ({
    type : SET_DEMO,
    idDemo : idDemo
})


export const upDateDemoAction = (data, idDemo ,history) =>{
    return async (dispatch) =>{
        try {
            const result = await adxTypeDemoServices.upDateDemo(data);
            // console.log(result)
            if(result.status === 200){
                alert("Update Success!!")
                dispatch(getAdxDemoAction(idDemo))
                history.goBack()
            }
        } catch (error) {
            alert("Update Failed!!")
            console.log(error)
        }
    }
}