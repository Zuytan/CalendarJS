class CalendarView{
    
    constructor(container, model){
        this.container = container;
        this.model = model;
        this.initTable(model);
    }

    initTable(model){
        let content = "<div id='currentMonth'></div><table id='calendar'></table>";
        content += "<button id='previous'>"+PREVIOUS_BTN+"</button>";
        content += "<button id='next'>"+NEXT_BTN+"</button>";
        $(this.container).append(content)
        this.reloadDatas();
        $("#previous").on("click", this.previous.bind(this));
        $("#next").on("click", this.next.bind(this));
    }

    reloadDatas(){
        let current = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
        let currentMonth = new Date(currentDay.getFullYear(), currentDay.getMonth()+1, current.getDate()-1);
        let previousMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), current.getDate()-1);
        let currentNbDay = currentMonth.getDate();
        let previousNbDay = previousMonth.getDate();
        let firstDay = ((current.getDay()-1)+7)%7
        let count = 1;
        let otherMonth = false;
        let isReserved = false;
        if(firstDay != 0){
            count = previousNbDay-(firstDay-1);
            otherMonth = true;
        } 
        
        let content = "<tr>";
        for(let i =0; i<7; i++){
            content += "<th>"+DAYS_OF_THE_WEEK[i]+"</th>";
        }
        content += "</tr>";
        for(let i=0; i<5; i++){
            content += "<tr>";
            for(let j = 0; j<7; j++){
                let nbDayMonth = (otherMonth)?previousNbDay+1:currentNbDay+1;
                isReserved = (this.model.getEventAt(""+count+"/"+(currentMonth.getMonth()+1)+"/"+currentMonth.getFullYear()) != null)
                content += "<td class='day "+((otherMonth)?" otherMonth":"")+((isReserved && !otherMonth)?" event":"")+"'><div>"+count+"</div></td>";
                otherMonth = (count > (count+1)%nbDayMonth) ? !otherMonth:otherMonth;
                count = ((count+1)%nbDayMonth == 0) ? 1 : ((count+1)%nbDayMonth);
            }
            content += "</tr>";
        }
        $("#calendar").html("");
        $("#calendar").append(content);
        $("#currentMonth").html(MONTHS[currentDay.getMonth()])
    }

    previous(){
        currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth()-1, 1);
        this.reloadDatas();
    }

    next(){
        currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth()+1, 1);
        this.reloadDatas();
    }
}