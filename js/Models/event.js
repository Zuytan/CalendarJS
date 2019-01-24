class EventDict{
    /* CONSTRUCTORS */
    /**
     * This represent an event in the calendar. Dates are saved as the number of day from the year 0
     * 
     * @param {String} startDate Start date of the event. Must be at the format "DD/MM/YYYY"
     * @param {String} endDate End date of the event. Must be at the format "DD/MM/YYYY"
     * @param {String} name Name of the event(empty by default)
     */
    constructor(startDate, endDate){
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
        this.startInt = this.convertDateToInt(startDate);
        this.endInt = this.convertDateToInt(endDate)
        if(this.endInt < this.startInt) throw "The start date can't be after the end date";
    }


    /* FUNCTIONS */
    exportJSON(){
        return JSON.stringify({begin: this.StartDate, end: this.EndDate});
    }

    isBetweenMineDates(date){
        try{
            let dateInt = this.convertDateToInt(date)
            return (dateInt >= this.startInt && dateInt <= this.endInt)? true : false;
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
    set StartDate(newDate){
        let newInt = this.convertDateToInt(newDate);
        if(newInt > endInt) throw "The start date can't be after the end date";
        this.startDate = newDate;
        this.startInt = newInt;
    }
    set EndDate(newDate){
        let newInt = this.convertDateToInt(newDate);
        if(this.startInt > newInt) throw "The end date can't be before the start date";
        this.endDate = newDate;
        this.endint = newint;
    }
    
}