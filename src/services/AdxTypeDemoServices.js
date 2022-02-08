import { BaseServices } from "./baseServices";

class AdxTypeDemoServices extends BaseServices {
    constructor(){
        super();
    }
    getAdxDemo(idAdx){
        return this.get(`/adxItem/getItemGroup/${idAdx}`)
    }
    upDateDemo(dataDemo){
        return this.post('/admin/adxItem/updateItemDetail', dataDemo)
    }
}

export const adxTypeDemoServices = new AdxTypeDemoServices()