class EventDict{
    /* CONSTRUCTORS */
    /**
     * This represent an event in the calendar. Dates are saved as the number of day from the year 0
     * 
     * @param {String} startDate Start date of the event. Must be at the format "DD/MM/YYYY"
     * @param {String} endDate End date of the event. Must be at the format "DD/MM/YYYY"
     * @param {int} price Price of the event
     * @param {String} name Name of the event(empty by default)
     */
    constructor(startDate, endDate, price, name = ""){
        this.convertDateToInt = function(date) {
            let nbDay = 0;
            let dateArr = date.split("/")
            if(isNaN(dateArr[0]) || isNaN(dateArr[1]) || isNaN(dateArr[2] || dateArr[2].length == 4)) 
                throw "Invalid format of the date"
            for(let i=1;i<dateArr[1];i++){
                nbDay += new Date(dateArr[2], i, 0).getDate();
            }
            return parseInt(dateArr[0])+nbDay+parseInt(365.2422*dateArr[2])
        }
        this.startDate = startDate;
        this.endDate = endDate;
        if(this.convertDateToInt(endDate) < this.convertDateToInt(startDate)) throw "The start date can't be after the end date";
        if(isNaN(price)) throw "Invalid format of the price, must contain at least 1 integer"
        this.price = parseInt(price);
        this.name = name;
    }


    /* FUNCTIONS */
    exportJSON(){
        return JSON.stringify({begin: this.StartDate, end: this.EndDate, name: this.Name, price: this.Price});
    }

    isBetweenMineDates(date){
        try{
            let dateInt = this.convertDateToInt(date)
            return (dateInt >= this.convertDateToInt(this.startDate) && dateInt <= this.convertDateToInt(this.endDate))? true : false;
        }catch(e){
            console.error(e)
        }
        
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
        if(this.convertDateToInt(newDate) > this.convertDateToInt(this.endDate)) throw "The start date can't be after the end date";
        this.startDate = newDate;
    }
    set EndDate(newDate){
        if(this.convertDateToInt(this.startDate) > this.convertDateToInt(newDate)) throw "The end date can't be before the start date";
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