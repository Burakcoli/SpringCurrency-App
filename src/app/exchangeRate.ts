export class ExchangeRate {
    code:string = "";
    name:string = "";
    buying:number = 0;
    selling:number = 0;

    constructor(code:string, name:string, buying:number, selling:number){
        this.code = code;
        this.name = name;
        this.buying = buying;
        this.selling = selling;
    }
}