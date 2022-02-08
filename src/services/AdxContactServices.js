import { BaseServices } from "./baseServices";

class AdxContactServices extends BaseServices{
    constructor(){
        super()
    }

    getAllAdxContact = () =>{
        return this.get(`/adxContact/getAllAdxContact`)
    }

    editAdxContact = (file) =>{
        return this.post(`/adxContact/editAdxContact`, file)
    }

}


export const adxContactServices = new AdxContactServices();