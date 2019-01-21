class EventDict{
    /* CONSTRUCTORS */
    /**
     * This represent an event in the calendar. Dates are saved as the number of day from the year 0
     * @param {String} startDate Start date of the event. Must be at the format "DD/MM/YYYY"
     * @param {String} endDate End date of the event. Must be at the format "DD/MM/YYYY"
     * @param {int} price Price of the event
     * @param {String} name Name of the event
     */
    constructor(startDate, endDate, price, name){
        this.convertDateToInt = function(date) {
            if(date.length == 10){
                let nbDayMonth = {1 : 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
                let nbDay = 0;
                let year = parseInt(date.substring(6))
                let month = parseInt(date.substring(3,5))
                let day = parseInt(date.substring(0,2))
                if(isNaN(date.substring(6)) || isNaN(date.substring(3,5)) || isNaN(date.substring(0,2))) throw "Invalid format of the date"
                for(let i=1;i<month;i++){
                    nbDay+=nbDayMonth[i]
                }
                return day+nbDay+parseInt(365.2422*year)
            }
            throw "Invalid format of the date"
        }
        this.startDate = startDate;
        this.endDate = endDate;
        if(parseInt(this.convertDateToInt(endDate)) < parseInt(this.convertDateToInt(startDate))) throw "The start date can't be after the end date";
        if(isNaN(price)) throw "Invalid format of the price, must contain at least 1 integer"
        this.price = parseInt(price);
        this.name = name;
    }


    /* FUNCTIONS */
    exportJSON(){
        return JSON.stringify({begin: this.StartDate, end: this.EndDate, name: this.Name, price: this.Price});
    }

    /* GETTERS & SETTERS */
    get StartDate(){
        return this.startDate;
    }
    get EndDate(){
        return this.endDate;
    }
    get Price(){
        return this.price;
    }
    get Name(){
        return this.name;
    }
    set StartDate(newDate){
        if(parseInt(this.convertDateToInt(newDate)) > parseInt(this.convertDateToInt(this.endDate))) throw "The start date can't be after the end date";
        this.startDate = newDate;
    }
    set EndDate(newDate){
        if(parseInt(this.convertDateToInt(this.startDate)) > parseInt(this.convertDateToInt(newDate))) throw "The end date can't be before the start date";
        this.endDate = newDate;
    }
    set Price(newPrice){
        if(isNaN(newPrice)) throw "The price must be a number"
        this.price = parseInt(newPrice);
    }
    set Name(newName){
        this.name = newName;
    }
}