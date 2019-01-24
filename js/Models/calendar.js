class Calendar{
    /* CONSTRUCTORS */
    /**
     * Create the calendar with events
     * @param {Boolean} editable If the calendar is editable, need to be true. Default is false.
     * @param {String} events The events already in the calendar you want to show. Default is empty
     */
    constructor(editable = false, reservations = "{\"reservations\":[]}"){
        this.editable = editable;
        this.periods = [];
        /**
         * A method to parse events from JSON to EventDict[].
         * @param {String} evts The JSON value of the events.
         */
        this.parseEvents = function(evts){
            let out = []
            let eventsList = JSON.parse(evts);
            console.log(eventsList);
            for (let i = 0; i < eventsList.reservations.length; i++){
                let currentEvent = eventsList.reservations[i];
                out[i] = new Reservation(currentEvent["begin"], currentEvent["end"], currentEvent["name"])
            }
            
            return out;
        }
        this.reservations = this.parseEvents(reservations);
    }
    
    /* FUNCTIONS */

    /**
     * This method fill the prices array with the JSON file given in parameters
    * @param {String} periods JSON formatted string ({"periods":[{"begin":"DD/MM/YYYY", "end":"DD/MM/YYYY", "price": XXX}, ...]}
     */
    loadPeriods(periods){
        let periodsFile = JSON.parse(periods)
        if(periodsFile.periods){
            for(let i = 0; i<periodsFile.periods.length; i++){
                let current = periodsFile.periods[i];
                if(!current.begin || !current.end || !current.price) throw "Invalid JSON file format";
                this.periods[i] = new Period(current["begin"], current["end"], current["price"])
            }
        }
    }

    /**
     * This method add an event to the existing list of reservation
     * @param {String} begin The beginning date of the reservation (DD/MM/YYYY)
     * @param {String} end The ending date of reservation (DD/MM/YYYY)
     * @param {String} name The name of the reservation 
     */
    addReservation(begin, end, name){
        if(this.editable){
            try{
                let evt = new Reservation(begin, end, name)
                this.events.push(evt)
            }catch(e){
                console.error(e)
            }
        }
    }

    /**
     * This method add a period to the existing list of periods
     * @param {String} begin The beginning date of the period (DD/MM/YYYY)
     * @param {String} end The ending date of period (DD/MM/YYYY)
     * @param {Int} price 
     */
    addPeriod(begin, end, price){
        if(this.editable){
            try{
                let evt = new Period(begin, end, price)
                this.events.push(evt)
            }catch(e){
                console.error(e)
            }
        }
    }
    /**
     * Remove an event which contains the passed date. Throw an exception in case of non existing event.
     * @param {String} date A date of the event (DD/MM/YYYY)
     */
    removeReservation(date){
        if(this.editable){
            let isEventRemoved = false;
            for(let i = 0; i<events.length; i++){
                if(events[i].isBetweenMineDates(date)){
                    this.events.splice(i,1);
                    isEventRemoved = true;
                }
            }
            if(!isEventRemoved) throw "No events at this date"
        }
        
    }

    /**
     * Indicate if the event is editable or not.
     */
    isEditable(){
        return this.editable;
    }

    /**
     * Get all events of the Calendar
     */
    allEvents(){
        return this.events;
    }
    /**
     * Method that return the event of a date if existing (null if not)
     * @param {String} date Date at the format DD/MM/YYYY
     */
    getEventAt(date){
        let outEvent = null;
        let i = 0;
        while(outEvent == null && i<this.reservations.length){
            if(this.reservations[i].isBetweenMineDates(date)){
                outEvent = this.reservations[i];
            }
            i++;
        }
        return outEvent
    }

    getPriceAt(date){
        let out = ""
        let found = false;
        let i = 0;
        while(!found && i<this.periods.length){
            let current = this.periods[i];
            if(current.isBetweenMineDates(date)){
                found = true;
                out = current.getDayPrice()+"€";
            }
            i++;
        }
        return out;
    }
    /* GETTERS & SETTERS */
}