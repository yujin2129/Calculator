let resultstring= "";
let nownumber ;
let nextnumber = "";
let operator_container = "";
let decimal_flag = false;
let result_flag;

$(document).ready(function(){
    $(".calculate_button").click(function(){
        if(result_flag ==true){
            nextnumber = "";
            result_flag = false;
        }
        if(nextnumber == "" && $(this).text() == "."){
            nextnumber = "0.";
            decimal_flag = true;
        }else if($(this).text() == "."){
            if(decimal_flag == false){
                nextnumber += ".";
                decimal_flag = true;
            }
        }else{
            nextnumber += $(this).text();
        }
        $(".result").text(resultstring + nextnumber);
    })
    $(".operator").click(function(){
        if(nextnumber != ""){
            numberCalculate();
        }   
        operator_container = $(this).text();
        resultstring = String(nownumber) + operator_container;
        $(".result").text(resultstring);
        nextnumber = "";
    })
    $(".equal").click(function(){
        numberCalculate();
        resultstring = String(nownumber);
        $(".result").text(resultstring);
        resultstring = "";
        nextnumber = nownumber;
        operator_container = "";
        result_flag = true;
    })
    $(".clear").click(function(){
        $(".result").text("0");
        resultstring= "";
        nextnumber = "";
        operator_container = "";
        decimal_flag = false;
    })
})
function numberCalculate(){
    nextnumber = Number(nextnumber);
    if(operator_container == ""){
        nownumber = nextnumber;
    }else{
        switch(operator_container){
            case "+":
                nownumber = nownumber + nextnumber;
                break;
            case "−":
                nownumber = nownumber - nextnumber;
                break;
            case "×":
                nownumber = nownumber * nextnumber;
                break;
            case "÷":
                nownumber = nownumber / nextnumber;
                break;
        }
    }
    decimal_flag = false;
}