const NB_DAY_PER_MONTH = {1 : 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
var currentDay = new Date();

$(document).ready(function(){
    //allTest()
    let cal = new Calendar(true, jsonDatas);
    cal.loadPeriods(periodsDatas);
    let calV = new CalendarEditableView(".calendar", cal)
})