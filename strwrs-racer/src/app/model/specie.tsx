export default class Specie{
    url: string
    name: string
    designation: string
    homeworld: string
    
    constructor(obj: any){
        this.url = obj.url
        this.name = obj.name
        this.designation = obj.designation
        this.homeworld = obj.homeworld
    }
}