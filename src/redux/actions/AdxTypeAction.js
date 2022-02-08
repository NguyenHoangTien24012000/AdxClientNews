import { adxTypeServices } from "../../services/AdxTypeServices"
import { GET_ALL_ADX_TYPE, SET_ADX_GROUP_TYPE, SET_ADX_TYPE } from "../types/AdxType";
import { getAdxDemoAction } from "./AdxDemoAction";

export const getAllTypeAdxAction = ()=>{
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.getAllTypeAdx();
            if(result.status === 200){
                dispatch({
                    type : GET_ALL_ADX_TYPE,
                    allTypeAdx : result.data.data
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

// export const adxActiveAction = (idADX) 

export const getADXGroupTypeAction = (ADXType) => {
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.getADXGroupType(ADXType);
            if(result.status === 200){
                dispatch({
                    type : SET_ADX_GROUP_TYPE,
                    adxGroupType : result.data.data,
                    navBarActive : ADXType,
                    adxActive : result.data.data[0]
                })
                dispatch(getAdxDemoAction(result.data.data[0].id_adx))
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const upLoadAdxTypeAction = (file, history, adxType) =>{
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.upLoadAdxType(file);
            console.log(result)
            if(result.status === 200) {
                alert("Update Success!!")
                history.push(`/admin/${adxType}`)
            }
        } catch (error) {
            alert("Update Failed!!")
            console.log(error);
        }
    }
}


export const getAdxTypeAction = (idADX) =>{
    return async (dispatch) =>{
        try {
            const result = await adxTypeServices.getAdxType(idADX)
            // console.log(result);
            if(result.status === 200){
                dispatch({
                    type :SET_ADX_TYPE,
                    adxType : result.data.data[0]
                })
               
            }
        } catch (error) {
           
            console.log(error)
        }
    }
}


export const addAdxTypeAction = (file, adxType, history) =>{
    return async (dispatch) =>{
        try {
            const result = await adxTypeServices.addAdxType(file)
            if(result.status === 200){
                dispatch(getADXGroupTypeAction(adxType))
                alert("Success!!")
                history.push(`/admin/${adxType}`)
            }
        } catch (error) {
            alert("Failed!!")
            console.log(error)
        }
    }
}


export const deleteAdxTypeAction =(idAdx, adxType) =>{
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.deleteAdxType(idAdx)
            if(result.status === 200){
                dispatch(getADXGroupTypeAction(adxType))
                alert("Success!!")
            }
        } catch (error) {
            alert("Failed!!")
            console.log(error)
        }
    }
}