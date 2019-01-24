class Reservation extends EventDict{
    constructor(startDate, endDate, name = ""){
        super(startDate, endDate)
        this.name = name;
    }

    exportJSON(){
        return JSON.stringify({begin: this.StartDate, end: this.EndDate, name: this.name});
    }

    get Name(){
        return this.name;
    }

    set Name(newName){
        this.name = newName;
    }
}