export default class Pilot{
    url: string
    name: string
    mass: string
    gender: string
    vehicles: Array<string>
    vehicleSkill: number
    starships: Array<string>
    starshipSkill: number
    homeworld: string

    constructor(obj:any){
        this.name = obj?.name
        this.url = obj?.url
        this.mass = obj?.mass
        this.gender = obj?.gender
        this.vehicles = obj?.vehicles
        this.starships = obj?.starships
        this.homeworld = obj?.homeworld
        this.vehicleSkill = this.vehicles?.length
        this.starshipSkill = this.starships?.length 
    }
    
    currentSkill(url: string, type: string):number{
        let skill =0;
        if(this.vehicleSkill > 0 && type=="vehicle"){
            skill =
                this.vehicles.filter(el => el === url).length >0 ?
                this.vehicleSkill*2 :
                this.vehicleSkill
        }else if(this.starshipSkill > 0){
            skill =
                this.starships.filter(el => el === url).length >0 ?
                this.starshipSkill :
                this.starshipSkill
        }
        return skill
    }

}