import { adxContactServices } from "../../services/AdxContactServices"
import { SET_ADX_CONTACT } from "../types/AdxContactType"

export const getAllAdxContactAction = () => {
    return async(dispatch) =>{
        try {
            const result = await adxContactServices.getAllAdxContact()
            if(result.status === 200){
                dispatch({
                    type : SET_ADX_CONTACT,
                    allAdxContact : result.data.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const editAdxContactAction = (file) => {
    return async(dispatch) =>{
        try {
            const result = await adxContactServices.editAdxContact(file)
            if(result.status === 200){
                alert("Update Success!!")
            }
        } catch (error) {
            alert("Update Failed!!")
            console.log(error)
        }
    }
}