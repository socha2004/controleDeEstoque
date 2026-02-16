import Consumivel from "../models/Consumivel"

class ConsumivelService {
    async getConsumivel() {
        return await Consumivel.findAll();
    }
 }

export default new ConsumivelService()