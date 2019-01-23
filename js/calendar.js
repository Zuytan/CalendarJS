class Calendar{
    /* CONSTRUCTORS */
    /**
     * Create the calendar with events
     * @param {Boolean} editable If the calendar is editable, need to be true. Default is false.
     * @param {String} events The events already in the calendar you want to show. Default is empty
     */
    constructor(editable = false, events = "{\"events\":[]}"){
        this.editable = editable;

        /**
         * @param {String} evts The JSON value of the events.
         */
        this.parseEvents = function(evts){
            let out = []
            let eventsList = JSON.parse(evts);
            console.log(eventsList);
            for (let i = 0; i < eventsList.events.length; i++){
                let currentEvent = eventsList.events[i];
                out[i] = new EventDict(currentEvent["begin"], currentEvent["end"], currentEvent["price"], currentEvent["name"])
            }
            
            return out;
        }
        this.events = this.parseEvents(events);
    }
    
    /* FUNCTIONS */
    addEvent(begin, end, price, name){
        if(this.editable){
            try{
                let evt = new EventDict(begin, end, price, name)
                this.events.push(evt)
            }catch(e){
                console.error(e)
            }
        }
    }

    removeEvent(date){
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

    isEditable(){
        return this.editable;
    }

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
        while(outEvent == null && i<this.events.length){
            if(this.events[i].isBetweenMineDates(date)){
                outEvent = this.events[i];
            }
            i++;
        }
        return outEvent
    }
    /* GETTERS & SETTERS */
}