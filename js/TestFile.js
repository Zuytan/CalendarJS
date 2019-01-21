var nbTestPassed = 0;
var nbTestTried = 0;
function allTest(){
    console.log("%cBeginning All Test :", 'color: #800080');
    testCreateEvent();
    testEditEvent();
    testExportEvent();
    testImportEvent();
    console.log("%cEnd All Test, Result :", 'color: #800080');
    console.log("\t%cSuccessed Test : "+nbTestPassed+"/"+nbTestTried, 'color: #009000');

}
function testCreateEvent(){
    console.log("%cBeginning Test : Create Event :", 'color: #800080');
    console.log("\tBasic Insertion Begin:");
    nbTestTried++
    try{
        let evt = new EventDict("01/01/2019", "01/02/2019", 250, "Reservation Test");
        console.log("\t\t%cSUCCESSED : INSERTION DONE", 'color: #009000');
        if(evt.StartDate == "01/01/2019" && evt.EndDate == "01/02/2019" && evt.Price == 250 && evt.Name == "Reservation Test") {
            console.log("\t\t%cSUCCESSED : GOOD RESULTS", 'color: #009000')
            nbTestPassed++
        }else{
            console.error("\tFAILED : BAD RESULTS");
        }
        
    }catch(e){
        console.error("FAILED : EXCEPTION THROWED : "+e);
    }
    console.log("\tBasic Insertion End");
    console.log("\tDate Format Error Insertion 1 (number) Begin :");
    nbTestTried++
    try{
        let evt = new EventDict("01//01/2019", "01/02/2019", 250, "Reservation Test");
        console.error("\t\tFAILED : NO ERROR DETECTED");
    }catch(e){
        console.log("\t\t%cSUCCESSED : ERROR DETECTED : "+e, 'color: #009000');
        nbTestPassed++
    }
    console.log("\tDate Format Error Insertion 1 End.");
    console.log("\tDate Format Error Insertion 2 (day) Begin :");
    nbTestTried++
    try{
        let evt = new EventDict("0//01/2019", "01/02/2019", 250, "Reservation Test");
        console.error("\t\tFAILED : NO ERROR DETECTED");
    }catch(e){
        console.log("\t\t%cSUCCESSED : ERROR DETECTED : "+e, 'color: #009000');
        nbTestPassed++
    }
    console.log("\tDate Format Error Insertion 2 End.");
    console.log("\tDate Format Error Insertion 3 (month) Begin :");
    nbTestTried++
    try{
        let evt = new EventDict("01/0//2019", "01/02/2019", 250, "Reservation Test");
        console.error("\t\tFAILED : NO ERROR DETECTED");
    }catch(e){
        console.log("\t\t%cSUCCESSED : ERROR DETECTED : "+e, 'color: #009000');
        nbTestPassed++
    }
    console.log("\tDate Format Error Insertion 3 End.");
    console.log("\tDate Format Error Insertion 4 (year) Begin :");
    nbTestTried++
    try{
        let evt = new EventDict("01/01/201/", "01/02/2019", 250, "Reservation Test");
        console.error("\t\tFAILED : NO ERROR DETECTED");
    }catch(e){
        console.log("\t\t%cSUCCESSED : ERROR DETECTED : "+e, 'color: #009000');
        nbTestPassed++
    }
    console.log("\tDate Format Error Insertion 4 End.");
    console.log("\tDate Format Error Insertion 5 (price) Begin :");
    nbTestTried++
    try{
        let evt = new EventDict("01/01/2019", "01/02/2019", "a", "Reservation Test");
        console.error("\t\tFAILED : NO ERROR DETECTED");
    }catch(e){
        console.log("\t\t%cSUCCESSED : ERROR DETECTED : "+e, 'color: #009000');
        nbTestPassed++
    }
    console.log("\tDate Format Error Insertion 5 End.");
    console.log("%cEnd Test : Create Event.", 'color: #800080');

}

function testEditEvent(){
    console.log("%cBeginning Test : Edit Event :", 'color: #800080');

    console.log("\tBasic Edit Begin:");
    nbTestTried++
    try{
        let evt = new EventDict("01/01/2019", "01/02/2019", 250, "Reservation Test");
        evt.StartDate = "02/01/2019";
        console.log("\t\t%cSUCCESSED : START DATE CHANGED", 'color: #009000');
        evt.EndDate = "02/02/2019";
        console.log("\t\t%cSUCCESSED : END DATE CHANGED", 'color: #009000');
        evt.Price = 224;
        console.log("\t\t%cSUCCESSED : PRICE CHANGED", 'color: #009000');
        evt.Name = "Reservation";
        console.log("\t\t%cSUCCESSED : NAME CHANGED", 'color: #009000');
        if(evt.StartDate == "02/01/2019" && evt.EndDate == "02/02/2019" && evt.Price == 224 && evt.Name == "Reservation"){
            console.log("\t\t%cSUCCESSED : GOOD RESULTS", 'color: #009000') 
            nbTestPassed++
        }else{
            console.error("\tFAILED : BAD RESULTS");
        }
        
    }catch(e){
        console.error("FAILED : EXCEPTION THROWED : "+e);
    }
    console.log("\tBasic Edit End");

    console.log("\tEdit Start Date after End Date Begin:");
    nbTestTried++
    try{
        let evt = new EventDict("01/01/2019", "01/02/2019", 250, "Reservation Test");
        evt.StartDate = "02/02/2019";
        console.error("FAILED : NO ERROR THROWED");
        
    }catch(e){
        console.log("\t\t%cSUCCESSED : ERROR THROWED : "+e, 'color: #009000');
        nbTestPassed++
    }
    console.log("\tEdit Start Date after End Date End");

    console.log("\tEdit End Date before Start Date Begin:");
    nbTestTried++
    try{
        let evt = new EventDict("01/01/2019", "01/02/2019", 250, "Reservation Test");
        evt.EndDate = "02/02/2018";
        console.error("FAILED : NO ERROR THROWED");
        
    }catch(e){
        console.log("\t\t%cSUCCESSED : ERROR THROWED : "+e, 'color: #009000');
        nbTestPassed++
    }
    console.log("\tEdit End Date before Start Date End");

    console.log("\tEdit Price NaN Begin:");
    nbTestTried++
    try{
        let evt = new EventDict("01/01/2019", "01/02/2019", 250, "Reservation Test");
        evt.Price = "a";
        console.error("FAILED : NO ERROR THROWED");
        
    }catch(e){
        console.log("\t\t%cSUCCESSED : ERROR THROWED : "+e, 'color: #009000');
        nbTestPassed++
    }
    console.log("\tEdit Price NaN End");
    console.log("%cEnd Test : Edit Event.", 'color: #800080');
}
function testImportEvent(){

}
function testExportEvent(){
    console.log("%cBeginning Test : Export Event :", 'color: #800080');
    console.log("\tExport Basic Begin:");
    nbTestTried++
    let evt = new EventDict("01/01/2019", "01/02/2019", 250, "Reservation Test");
    let evtExport = evt.exportJSON();
    if(evtExport == "{\"begin\":\"01/01/2019\",\"end\":\"01/02/2019\",\"name\":\"Reservation Test\",\"price\":250}"){
        console.log("\t\t%cSUCCESSED : THE EXPORT IS CORRECT", 'color: #009000');
        nbTestPassed++
    }else{
        console.error("\t\tFAILED : THE EXPORT IS INCORRECT");
    }
    

    console.log("\tEdit End Date before Start Date End");
    console.log("%cEnd Test : Export Event.", 'color: #800080');
}