export default class Starship{
    url: string
    name: string
    model: string
    starship_class: string
    max_atmosphering_speed: number
    hyperdrive_rating: number
    MGLT: number // megalight per hour

    constructor(obj:any){
        this.url = obj.url
        this.name = obj.name
        this.model = obj.model
        this.max_atmosphering_speed = obj.maxAtmospheringSpeed
        this.hyperdrive_rating = obj.hyperdriveRating
        this.MGLT = obj.MGLT
        this.starship_class = obj.starship_class
    }
}