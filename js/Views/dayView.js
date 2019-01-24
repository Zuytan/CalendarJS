class DayView {
    constructor(date, reservation = null, callbackOnClick = ()=>{}){
        this.date = date;
        this.reservation = reservation;
        this.callback = callbackOnClick;
    }

    render(){
        let content = "<td class='day"+((otherMonth)?" otherMonth":"")+((isReserved && !otherMonth)?" event":" free")+"'>";
        content += "<div class='dayNumber'>"+count+"</div>"
        content += "<div class='name'>";
        if (!otherMonth){
            if(isReserved){
                content += evt.Name
            }else{
                let price = this.model.getPriceAt(date)
                content += PRICE + " "+ ((price != "") ? price: PRICE_UNKNOWN);
            }
        }
        content += "</div></td>";
        return content;
    }
}