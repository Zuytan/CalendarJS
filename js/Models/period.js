class Period extends EventDict{
    constructor(startDate, endDate, price){
        super(startDate, endDate);
        this.price = price;
    }

    exportJSON(){
        return JSON.stringify({begin: this.StartDate, end: this.EndDate, price: this.price});
    }

    getDayPrice(){
        let nbDay = this.endInt-this.startInt
        return Math.floor(this.price/nbDay);
    }
}