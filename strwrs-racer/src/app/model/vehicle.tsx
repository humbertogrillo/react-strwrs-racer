export default class Vehicle{
    url: string; // url works as id
    name: string;
    constructor(obj:any){
        this.url = obj.url;
        this.name = obj.name;
    }
}