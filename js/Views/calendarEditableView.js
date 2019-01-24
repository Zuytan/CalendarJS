class CalendarEditableView extends CalendarView{
    constructor(container, model){
        super(container, model);
    }
    initTable(){
        super.initTable();
        $('.day').on("click", ()=>{
            $(".calendar").addClass("overlayOn")
        })
        

    }
}