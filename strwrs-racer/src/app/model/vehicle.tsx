export default class Vehicle{
    url: string // url works as id
    name: string
    model: string
    manufacturer: string
	max_atmosphering_speed: number
	vehicle_class: string
    constructor(obj:any){
        this.url = obj.url
        this.name = obj.name
        this.model = obj.model
        this.manufacturer = obj.manufacturer
        this.max_atmosphering_speed = obj.max_atmosphering_speed
        this.vehicle_class = obj.vehicle_class
    }
}