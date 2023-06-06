export default class Planet{
    url: string
    name: string
    
    constructor(obj: any) {
        this.url = obj.url
        this.name = obj.name
    }
}