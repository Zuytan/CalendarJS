class Calendar{
    
    /**
     * Create the calendar with events
     * @param {Boolean} editable If the calendar is editable, need to be true
     * @param {String} events The events already in the calendar you want to show
     */
    constructor(editable, events = "{}"){
        this.editable = editable;
    }
    constructor(){
        this.editable = false;
    }
}