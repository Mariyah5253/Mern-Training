var $ = function (id) {
    return document.getElementById(id);
}
var calculateClick=function() {
  
    var amount=document.getElementById("investment").value;
    var interest=document.getElementById("rate").value;
    var year=document.getElementById("years").value;
    
    let error_message="";
    //checking for errors
    if(isNaN(amount) ){
        error_message="Amount Must be Numeric.";
    }
    else if(amount<=0)
    {
        error_message+=" Amount Should be greater that 0.";
    }
   
    if(isNaN(interest))
    {
        error_message=error_message+" Interest Rate Must be Numeric.";
    }
    else if(interest<=0)
    {
        error_message+=" Interest Should be greater that 0.";
    }
    if(isNaN(year))
    {
        error_message=error_message+" Year Rate Must be Numeric.";
    }
    else if(year<=0)
    {
        error_message+=" Year Should be greater that 0.";
    }
    if(error_message=="")
    {
    interest=parseFloat(interest);
    year=parseInt(year);
    amount=parseFloat(amount);
    var total=(amount*interest*year)/100;
    var future_amount=(total+amount).toFixed(2);
    document.getElementById("future_value").value=future_amount;}
    else{
        alert(error_message);
    }



}
window.onload = function () {
    $("calculate").onclick = calculateClick;
}